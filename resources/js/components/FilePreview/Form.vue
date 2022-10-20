<template>
<div class="card shadow-card absolute bottom-0 top-0 left-0 overflow-y-auto rounded-xl md:p-5" style="margin: 40px;">

    <FormLabel> Form </FormLabel>

    <div class="justify-items">
        <AppInputText title="Category" class="w-full">
           <p>{{ this.file.data.attributes.tipo_nombre }}</p>
        </AppInputText>
        <span class="pt-2 text-xs dark:text-rose-600 text-rose-600" v-if="errors">
            All fields must be filled.
        </span>
        <div v-for="(campo, index) in campos" v-bind:key="index">
            <AppInputText :title="campo.name" class="w-full">
                <input v-model="campo.value" :placeholder="'Enter '+ campo.name" type="text" class="focus-border-theme input-dark" />
            </AppInputText>
        </div>

        <button style="background: antiquewhite;padding: 7px 20px 8px 20px;border-radius: 5px;font-weight: bold;margin-top: -7px;" :disabled="isLoading" :loading="isLoading" type="submit" class="w-full sm:w-auto" @click.prevent="registrarMetaData()">
            Update
        </button>

    </div>
</div>
</template>

<script>
import AppInputText from '../../components/Forms/Layouts/AppInputText.vue'
import SelectInput from '../../components/Inputs/SelectInput'
import FormLabel from '../../components/UI/Labels/FormLabel'
import axios from 'axios'
import {
    required
} from 'vee-validate/dist/rules'
import {
    ValidationProvider,
    ValidationObserver
} from 'vee-validate/dist/vee-validate.full'
import ButtonBase from '../../components/UI/Buttons/ButtonBase'
import {
    events
} from '../../bus'
export default {
    name: 'Form',
    props: ['file'],
    components: {
        AppInputText,
        SelectInput,
        FormLabel,
        ButtonBase,
        ValidationProvider,
        ValidationObserver,
        required,
        axios
    },
    data() {
        return {
            creado: true,
            campos: [],
            isLoading: false,
            errors: false
        }
    },
    methods: {
        async registrarMetaData() {
            this.errors = false
            if (this.campos.every((e) => e.value != "")) {
                this.isLoading = true

                let formData = new FormData()

                formData.append('campos', JSON.stringify(this.campos))
                formData.append('file_id', this.file.data.id)

                axios
                    .post('/api/admin/meta-data', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    .then((response) => {
                        this.isLoading = false
                        this.creado = false
                        this.$router.go()
                        //this.getCampos()
                        events.$emit('toaster', {
                            type: 'success',
                            message: 'Meta data agregada.',
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                        this.isLoading = false
                    })
            } else {
                this.errors = true
                console.log(this.errors)
            }
        },
        async getCampos() {
            console.log(this.file)
            axios
                .get('/api/admin/campos/' + this.file.data.attributes.tipo_id)
                .then((response) => {
                    let fields = JSON.parse(JSON.stringify(response.data.data.fields));
                    JSON.parse(fields).map((e) => this.campos.push({
                        "name": e.name,
                        "value": ''
                    }))

                    this.campos.map((e) => this.file.data.attributes.meta_data.map((f) => e.name == f.key ? e.value = f.value : ''))
                    console.log("The follow is my field")
                    console.log(this.campos)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    },
    created() {
        this.getCampos()
    },
    updated() {},
    mounted() {},
}
</script>
