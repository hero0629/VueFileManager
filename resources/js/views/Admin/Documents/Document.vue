<template>
    <div>
        <div id="page-content" v-if="!isLoading">
            <!--Page Tab links-->
            <div class="card sticky top-0 z-10 pt-4 shadow-card" style="padding-bottom: 0">
                <!--User thumbnail-->
                <div class="mb-3 flex items-center">
                    <!--Image input for replace avatar-->

                    <!--User name & email-->
                    <div class="ml-4">
                        <b class="text-md block font-bold sm:text-lg">
                            {{ document.data.attributes.name }}

 
                        </b>

                    </div>
                </div>

                <CardNavigation :pages="pages" class="-mx-1" />
            </div>

            <!--Router Content-->
            <router-view :document="document" @reload-document="fetchDocument" />
        </div>
        <div id="loader" v-if="isLoading">
            <Spinner />
        </div>
    </div>
</template>

<script>
import CardNavigation from '../../../components/UI/Others/CardNavigation'
import { UserIcon, HardDriveIcon, LockIcon, Trash2Icon, FileTextIcon, CreditCardIcon } from 'vue-feather-icons'
import MobileHeader from '../../../components/Mobile/MobileHeader'
import SectionTitle from '../../../components/UI/Labels/SectionTitle'
import PageHeader from '../../../components/Others/PageHeader'
import ColorLabel from '../../../components/UI/Labels/ColorLabel'
import Spinner from '../../../components/UI/Others/Spinner'
import { events } from '../../../bus'
import { mapGetters } from 'vuex'
import axios from 'axios'
import MemberAvatar from "../../../components/UI/Others/MemberAvatar";

export default {
    name: 'Document',
    components: {
		MemberAvatar,
        CardNavigation,
        CreditCardIcon,
        HardDriveIcon,
        SectionTitle,
        FileTextIcon,
        MobileHeader,
        PageHeader,
        ColorLabel,
        Trash2Icon,
        UserIcon,
        LockIcon,
        Spinner,
    },
    watch: {
        '$route.fullPath': function () {
            this.fetchDocument()
        },
    },
    computed: {
        ...mapGetters(['config']),
        admin() {
            return this.$store.getters.user ? this.$store.getters.user : undefined
        },
        pages() {
            if (this.config.subscriptionType === 'none') {
                return [
                    {
                        title: this.$t('detail'),
                        route: 'DocumentDetail',
                    }

                ]
            }

            return [
                {
                    title: this.$t('detail'),
                    route: 'DocumentDetail',
                }
            ]
        },
    },
    data() {
        return {
            isLoading: true,
            document: undefined,
        }
    },
    methods: {
        fetchDocument() {
            axios.get('/api/admin/documents/' + this.$route.params.id).then((response) => {
                this.document = response.data
                this.isLoading = false
            })
        },
    },
    created() {
        this.fetchDocument()

        events.$on('reload:document', () => this.fetchDocument())
    },
}
</script>
