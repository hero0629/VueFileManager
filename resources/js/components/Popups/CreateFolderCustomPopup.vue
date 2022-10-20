<template>
	<PopupWrapper name="create-folder-custom">
		<!--Title-->
		<PopupHeader :title="$t('popup_create_folder.title')" icon="edit" />

		<!--Content-->
		<PopupContent>
			<!--Form to set sharing-->
			<ValidationObserver @submit.prevent="createFolder" ref="createForm" v-slot="{ invalid }" tag="form">
				<!--Set folder name-->			
				<ValidationProvider tag="div" mode="passive" name="Socio" rules="required|numeric" v-slot="{ errors }">
					<AppInputText title="Partner number" :error="errors[0]">
						<input v-model="txtNroSocio" :class="{ '!border-rose-600': errors[0] }" type="text" ref="txtSocio"
							class="focus-border-theme input-dark" placeholder="Membership number" />
					</AppInputText>
				</ValidationProvider>
				<ValidationProvider tag="div" mode="passive" name="Identificacion" rules="required" v-slot="{ errors }">
					<AppInputText title="ID" :error="errors[0]">
						<input v-model="txtIdentificacion" :class="{ '!border-rose-600': errors[0] }" type="text"
							class="focus-border-theme input-dark" placeholder="Identification number" />
					</AppInputText>
				</ValidationProvider>
				<ValidationProvider tag="div" mode="passive" name="Nombre" rules="required" v-slot="{ errors }">
					<AppInputText title="First name" :error="errors[0]">
						<input v-model="txtNombre" :class="{ '!border-rose-600': errors[0] }" type="text"
							class="focus-border-theme input-dark" placeholder="First name" />
					</AppInputText>
				</ValidationProvider>
				<ValidationProvider tag="div" mode="passive" name="Apellido" rules="required" v-slot="{ errors }">
					<AppInputText title="Last name"  :error="errors[0]">
						<input v-model="txtApellido" :class="{ '!border-rose-600': errors[0] }" type="text" class="focus-border-theme input-dark"
							placeholder="Last name" />
					</AppInputText>
				</ValidationProvider>


			</ValidationObserver>
		</PopupContent>

		<!--Actions-->
		<PopupActions>
			<ButtonBase class="w-full" @click.native="$closePopup()" button-style="secondary">{{ $t('cancel') }}
			</ButtonBase>
			<ButtonBase class="w-full" @click.native="createFolder" button-style="theme">{{
					$t('popup_create_folder.title')
			}}
			</ButtonBase>
		</PopupActions>
	</PopupWrapper>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'
import PopupWrapper from '../Popups/Components/PopupWrapper'
import PopupActions from '../Popups/Components/PopupActions'
import PopupContent from '../Popups/Components/PopupContent'
import PopupHeader from '../Popups/Components/PopupHeader'
import ThumbnailItem from '../UI/Entries/ThumbnailItem.vue'
import ButtonBase from '../UI/Buttons/ButtonBase.vue'
import { required } from 'vee-validate/dist/rules'
import AppInputSwitch from '../Forms/Layouts/AppInputSwitch.vue'
import AppInputText from '../Forms/Layouts/AppInputText.vue'
import SwitchInput from '../Inputs/SwitchInput.vue'
import { events } from '../../bus'
import EmojiPicker from '../Emoji/EmojiPicker'

export default {
	name: 'CreateFolderCustomPopup',
	components: {
		AppInputSwitch,
		SwitchInput,
		EmojiPicker,
		AppInputText,
		ValidationProvider,
		ValidationObserver,
		ThumbnailItem,
		PopupWrapper,
		PopupActions,
		PopupContent,
		PopupHeader,
		ButtonBase,
		required,
	},
	data() {
		return {
			txtNroSocio: undefined,
			txtIdentificacion: undefined,
			txtNombre: undefined,
			txtApellido: undefined,
		}
	},
	methods: {
		async createFolder() {
			// Validate fields
			const isValid = await this.$refs.createForm.validate()

			if (!isValid) return
			await this.$store.dispatch('createFolderCustom', {
				socio: this.txtNroSocio,
				identificacion: this.txtIdentificacion,
				nombre:this.txtNombre,
				apellido:this.txtApellido
			})

			this.$closePopup()
			this.txtNroSocio= undefined;
			this.txtIdentificacion= undefined;
			this.txtNombre= undefined;
			this.txtApellido= undefined;
		},
	},
	mounted() {
		events.$on('popup:open', ({ name }) => {
			if (name === 'create-folder-custom' && !this.$isMobile()) this.$nextTick(() => this.$refs.txtSocio.focus())
		})
	},
}
</script>
