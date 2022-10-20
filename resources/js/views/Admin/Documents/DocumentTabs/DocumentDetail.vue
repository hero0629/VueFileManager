<template>
  <ValidationObserver @submit.prevent="updateDocument()" ref="updateDocument" v-slot="{ invalid }" tag="form">
    <div class="card shadow-card">
      <FormLabel>Edit document type</FormLabel>

      <ValidationProvider tag="div" mode="passive" name="name" rules="required" v-slot="{ errors }">
        <AppInputText title="Document name" :error="errors[0]">
          <input  v-model="documentation.name" placeholder="Document name" type="text" class="focus-border-theme input-dark" :class="{ '!border-rose-600': errors[0] }" />
        </AppInputText>
      </ValidationProvider>
      <AppInputText title="Fields" style="margin-bottom: 0;"></AppInputText>

      <span v-for="(field, index) in documentation.fields" v-bind:key="index" style="display: block ruby; width: 300px;margin-bottom: 6px;">

            <input v-model="field.name" placeholder="Ingresa el campo" type="text" class="focus-border-theme input-dark" />

            <div class="flex items-center my-3 ml-3">
                <input v-model="field.required" id="default-checkbox" type="checkbox" value="" class="w-4 rounded-md h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Required</label>
            </div>

            <button @click.prevent="borrarCampo(index)" class="my-3" style="margin-left: 7px;background: rgba(157,102,254,.1);padding: 8px 20px 8px 20px;border-radius: 6px;color: brown;font-weight: bold;">
                Delete
            </button>
        </span>
      <button class="btnHover" @click.prevent="agregarCampo()" style="background: rgba(0, 0, 0, 0.13) none repeat scroll 0% 0%; padding:8px 20px 8px 20px; border-radius: 6px; color: brown; font-weight: bold;margin-top: 11px;">
            <span class="flex items-center mr-4" style="display: block ruby;">
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="vue-feather dark-text-theme feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              Add another field </span>
      </button>

    </div>
    <div class="flex  form-group justify-end">
      <router-link  class="flex " :to="{ name: 'Documents' }">
        <ButtonBase  button-style="terciary"  class="w-full mr-2  sm:w-auto">
          To return
        </ButtonBase>
      </router-link>

      <ButtonBase :disabled="isLoading" :loading="isLoading" button-style="theme" type="submit" class="w-full sm:w-auto">
        Update document type
      </ButtonBase>
    </div>
  </ValidationObserver>
</template>

<script>
import AppInputText from '../../../../components/Forms/Layouts/AppInputText'
import InfoBox from '../../../../components/UI/Others/InfoBox'
import PageTabGroup from '../../../../components/Layout/PageTabGroup'
import PageTab from '../../../../components/Layout/PageTab'
import {
    ValidationProvider,
    ValidationObserver
} from 'vee-validate/dist/vee-validate.full'
import ButtonBase from '../../../../components/UI/Buttons/ButtonBase'
import SetupBox from '../../../../components/Others/SetupBox'
import SelectInput from '../../../../components/Inputs/SelectInput'
import FormLabel from '../../../../components/UI/Labels/FormLabel'
import {
    required
} from 'vee-validate/dist/rules'
import {
    mapGetters
} from 'vuex'
import {
    events
} from '../../../../bus'
import axios from 'axios'

export default {
    name: 'DocumentDetail',
    props: ['document'],
    components: {
        AppInputText,
        PageTabGroup,
        PageTab,
        InfoBox,
        FormLabel,
        ValidationProvider,
        ValidationObserver,
        SelectInput,
        ButtonBase,
        SetupBox,
        required,
    },
    computed: {
        ...mapGetters([]),
    },
    data() {
        return {
            isLoading: false,
            isSendingRequest: false,
            name: '',
            documentation: {
              fields: JSON.parse(this.document.data.attributes.fields),
              name: this.document.data.attributes.name,
            },
        }
    },
    methods: {
        async changeName() {
            const isValid = await this.$refs.changeName.validate()

            if (!isValid) return

            this.isSendingRequest = true

            // Send request to get user reset link
            axios
                .post(this.$store.getters.api + '/admin/documents/' + this.$route.params.id, {
                    attributes: {
                        name: this.name,
                    },
                    _method: 'patch',
                })
                .then(() => {
                    // Reset errors
                    this.$refs.changeName.reset()

                    this.$emit('reload-document')

                    events.$emit('toaster', {
                        type: 'success',
                        message: 'Updated document type',
                    })
                })
                .catch(() => {
                    events.$emit('alert:open', {
                        title: this.$t('popup_error.title'),
                        message: this.$t('popup_error.message'),
                    })
                })
                .finally(() => {
                    this.isSendingRequest = false
                })
        },
        async borrarCampo(index) {
          this.documentation.fields.splice(index, 1);
        },
        async agregarCampo() {
          this.documentation.fields.push({
            name: ''
          });
        },
      async updateDocument() {
        const isValid = await this.$refs.updateDocument.validate()

        if (this.documentation.fields.length === 0 || this.documentation.fields.every((e) => e.name === '')) {
          events.$emit('alert:open', {
            title: "You must enter at least one field to document type",
          })
          return
        }

        if (!isValid) return

        this.isLoading = true
        axios
            .patch(`/api/admin/documents/${this.$route.params.id}`, this.documentation)
            .then((response) => {
              this.isLoading = false

              events.$emit('toaster', {
                type: 'success',
                message: 'Type of document created',
              })
              //params: {id: response.data.data.id },
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
                  this.$refs.updateDocument.setErrors({
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
