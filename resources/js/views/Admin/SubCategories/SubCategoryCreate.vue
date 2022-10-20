<template>
  <ValidationObserver @submit.prevent="createSubCategory" ref="createSubCategory" v-slot="{ invalid }" tag="form">
    <div class="card shadow-card">
      <FormLabel>Create subcategory</FormLabel>

      <ValidationProvider tag="div" mode="passive" name="name" rules="required" v-slot="{ errors }">
        <AppInputText title="Subcategory name" :error="errors[0]">
          <input v-model="subCategory.name" placeholder="Subcategory name" type="text"
                 class="focus-border-theme input-dark" :class="{ '!border-rose-600': errors[0] }"/>
        </AppInputText>
      </ValidationProvider>
      <AppInputText title="Fields" style="margin-bottom: 0;"></AppInputText>

      <span v-for="(field, index) in subCategory.fields" v-bind:key="index"
            style="display: block ruby; width: 300px;margin-bottom: 6px;">
            <div class=" grid grid-cols-2 gap-4">
                <input v-model="field.name" placeholder="Enter the field" type="text"
                       class="focus-border-theme input-dark"/>
            <SelectInput
                v-model="field.type"
                :options="fieldsType"
                placeholder="Select field type"/>

            </div>

            <div class="flex items-center my-3 ml-3">
                <input v-model="field.required" id="default-checkbox" type="checkbox" value=""
                       class="w-4 rounded-md h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required</label>
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
      <router-link class="flex " :to="{ name: 'SubCategories',
                            params: { id: typeDocument_id } }">

        <ButtonBase button-style="terciary" class="w-full mr-2  sm:w-auto">
          To return
        </ButtonBase>
      </router-link>
      <ButtonBase :disabled="isLoading" :loading="isLoading" button-style="theme" type="submit"
                  class="w-full sm:w-auto">
          Create subcategory
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
      fieldsType :[],
      typeDocument_id:this.$route.params.id,
      subCategory: {
        fields: [],
        name: '',
      },
    }
  },
  created() {
    this.subCategory.fields.push({
      name: '',
      type:'',
      required: ''
    });
    this.fieldsType = [
      {
        "label": "Text",
        "value": 1,
      },
      {
        "label": "Number",
        "value": 2
      },
      {
        "label": "Date",
        "value": 3
      },
      {
        "label": "Boolean",
        "value": 4
      }
    ]

  },
  methods: {
    async agregarCampo() {

      this.subCategory.fields.push({
        name: '',
        type:'',
        required: ''
      });
    },
    async borrarCampo(index) {
      this.subCategory.fields.splice(index, 1);
    },
    async createSubCategory() {
      const isValid = await this.$refs.createSubCategory.validate()

      if (this.subCategory.fields.length == 0 || this.subCategory.fields.every((e) => e.name == '')) {
        events.$emit('alert:open', {
          title: "You must enter at least one field to document type",
        })
        return
      }

      if (!isValid) return

      this.isLoading = true

      let formData = new FormData()

      formData.append('name', this.subCategory.name)
      formData.append('type_document_id', this.$route.params.id)
      formData.append('fields', JSON.stringify(this.subCategory.fields))

      axios
          .post('/api/admin/sub-categories', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            this.isLoading = false
            console.log("subcategory", response)
            events.$emit('toaster', {
              type: 'success',
              message: 'Subcategory created.',
            })
            //params: {id: response.data.data.id },
            // this.$router.push({ name: 'SubCategories', params: { id: response.data.data.attributes.type_document_id } })
            
            this.$router.push({
              name: 'SubCategories',
              params: {id: response.data.data.id }
            })
          })
          .catch((error) => {
            if (error.response.status === 409) {

              events.$emit('alert:open', {
                title: error.response.data.message,
              })

            } else if (error.response.status === 422) {

              if (error.response.data.errors['name']) {
                this.$refs.SubCategories.setErrors({
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
