<template>
  <ValidationObserver @submit.prevent="createDocument" ref="createDocument" v-slot="{ invalid }" tag="form">
    <div class="card shadow-card">
      <FormLabel>Create document type</FormLabel>

      <ValidationProvider tag="div" mode="passive" name="name" rules="required" v-slot="{ errors }">
        <AppInputText title="Document name" :error="errors[0]">
          <input v-model="document.name" placeholder="Document name" type="text"
                 class="focus-border-theme input-dark" :class="{ '!border-rose-600': errors[0] }"/>
        </AppInputText>
      </ValidationProvider>
      <AppInputText title="Fields" style="margin-bottom: 0;"></AppInputText>

      <span v-for="(field, index) in document.fields" v-bind:key="index"
            style="display: block ruby; width: 300px;margin-bottom: 6px;">
            <input v-model="field.name" placeholder="Enter the field" type="text"
                   class="focus-border-theme input-dark"/>
          <div class="flex items-center my-3 ml-3">
                <!-- <input v-model="field.required" id="default-checkbox" type="checkbox" value=""
                       class="w-4 rounded-md h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requerido</label> -->
            </div>
            <button @click.prevent="borrarCampo(index)" class="my-3"
                    style="margin-left: 7px;background: rgba(157,102,254,.1);padding: 8px 20px 8px 20px;border-radius: 6px;color: brown;font-weight: bold;">
                Delete
            </button>
        </span>
      <button class="btnHover" @click.prevent="agregarCampo()"
              style="background: rgba(0, 0, 0, 0.13) none repeat scroll 0% 0%; padding: 8px 20px; border-radius: 6px; color: brown; font-weight: bold;margin-top: 11px;">
            <span class="flex items-center mr-4" style="display: block ruby;">
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="vue-feather dark-text-theme feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              Add another field </span>
      </button>

    </div>
    <div class="flex  form-group justify-end">
      <router-link class="flex " :to="{ name: 'Documents' }">
        <ButtonBase button-style="terciary" class="w-full mr-2  sm:w-auto">
          Cancel
        </ButtonBase>
      </router-link>
      <ButtonBase :disabled="isLoading" :loading="isLoading" button-style="theme" type="submit"
                  class="w-full sm:w-auto">
        Create document type
      </ButtonBase>
    </div>
  </ValidationObserver>
</template>

<script>
import AppInputText from '../../../components/Forms/Layouts/AppInputText'
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate/dist/vee-validate.full'
import SelectInput from '../../../components/Inputs/SelectInput'
import ImageInput from '../../../components/Inputs/ImageInput'
import FormLabel from '../../../components/UI/Labels/FormLabel'
import MobileHeader from '../../../components/Mobile/MobileHeader'
import SectionTitle from '../../../components/UI/Labels/SectionTitle'
import ButtonBase from '../../../components/UI/Buttons/ButtonBase'
import PageHeader from '../../../components/Others/PageHeader'
import {
  required
} from 'vee-validate/dist/rules'
import {
  mapGetters
} from 'vuex'
import {
  events
} from '../../../bus'
import axios from 'axios'
import {Edit2Icon} from "vue-feather-icons";

export default {
  name: 'Profile',
  components: {
    AppInputText,
    ValidationProvider,
    ValidationObserver,
    SectionTitle,
    MobileHeader,
    SelectInput,
    ButtonBase,
    ImageInput,
    PageHeader,
    FormLabel,
    required,
  },
  computed: {
    ...mapGetters(['roles']),
  },
  data() {
    return {
      isLoading: false,
      document: {
        fields: [],
        name: '',
      },
      params: []
    }
  },
  created() {
    this.document.fields.push({
      name: '',
      required: ''
    });
  },
  methods: {
    async agregarCampo() {
      this.document.fields.push({
        name: '',
        required: ''
      });
    },
    async borrarCampo(index) {
      this.document.fields.splice(index, 1);
    },
    async createDocument() {
      const isValid = await this.$refs.createDocument.validate()

      if (this.document.fields.length == 0 || this.document.fields.every((e) => e.name == '')) {
        events.$emit('alert:open', {
          title: "You must enter at least one field to document type",
        })
        return
      }

      if (!isValid) return

      this.isLoading = true

      let formData = new FormData()

      formData.append('name', this.document.name)
      formData.append('fields', JSON.stringify(this.document.fields))

      axios
          .post('/api/admin/documents', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            this.isLoading = false
            events.$emit('toaster', {
              type: 'success',
              message: 'document type creating.',
            })
            params = {id: response.data.data.id },
            this.$router.push({
              name: 'Documents'
            })
          })
          .catch((error) => {
            if (error.response.status === 409) {
              events.$emit('alert:open', {
                title: error.response.data.message,
              })

            } else if (error.response.status === 422) {

              if (error.response.data.errors['name']) {
                this.$refs.createDocument.setErrors({
                  email: error.response.data.errors['name'],
                })
              }

            } else {
              events.$emit('alert:open', {
                title: this.$t('popup_error.title'),
                message: this.$t('popup_error.message'),
              })
            }

            // End loading
            this.isLoading = false
          })
    },
  },
}
</script>
