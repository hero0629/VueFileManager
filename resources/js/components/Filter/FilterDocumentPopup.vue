<template>
    <div
		id="filter"
        v-if="isVisible"
        @keyup.esc="exitFilterPopup"
        @click.exact.self="exitFilterPopup"
        tabindex="-1"
        class="fixed left-0 right-0 bottom-0 top-0 z-50 z-50 h-full w-full bg-white dark:bg-dark-background md:absolute md:bg-dark-background md:bg-opacity-[0.35] dark:md:bg-opacity-[0.45]"
    >
        <div
            class="relative z-50 mx-auto w-full overflow-y-auto md:mt-8 md:max-w-xl md:rounded-xl md:bg-white md:shadow-xl dark:bg-dark-foreground 2xl:mt-20"
        >
            <!--Query bar-->
            <div class="z-50 mx-auto flex justify-between items-center px-5 py-4">
                <div class="relative mr-4">
                    <div v-if="isLoading" class="spinner-icon origin-center translate-y-2.5 scale-50 transform">
                        <Spinner />
                    </div>
                    <search-icon
                        :class="{ 'opacity-0': isLoading }"
                        size="22"
                        class="magnify dark-text-theme text-theme vue-feather"
                    />
                </div>
                <div class="ml-5 p-3 absolute">Filter Documents</div>
                <!-- close icon -->
                <div @click="exitFilterPopup" class="-m-3 cursor-pointer p-3">
                    <x-icon size="14" class="hover-text-theme vue-feather" />
                </div>

                <!--Mobile close icon-->
                <div v-if="$isMobile()" @click="exitFilterPopup" class="cursor-pointer">
                    <x-icon size="22" class="close" />
                </div>
            </div>
            <!-- filter select part -->
            <div class="mx-auto px-5 py-4">
                <SelectInput v-on ="$filterInput(select_user, select_custom, from_date, to_date)" v-model="select_user" :options="users" placeholder="Select User"/>
            </div>    
            <div class="mx-auto px-5">
                <SelectInput v-on ="$filterInput(select_user, select_custom, from_date, to_date)" v-model="select_custom" :options="customers" placeholder="Select Customer"/>
            </div>
            <div class="z-50 mx-auto flex justify-between items-center px-5 py-4 pb-16">
                <div class="p-3">From Date:</div>
                <div class="relative mr-4">
                    <input v-on ="$filterInput(select_user, select_custom, from_date, to_date)" v-model="from_date" class="filter-date cursor-pointer input-area rounded-lg bg-light-background dark:bg-2x-dark-foreground" type="date" placeholder="From Date"/>
                </div>
                <div class="p-3">To Date:</div>
                <div class="relative mr-4">
                    <input v-on ="$filterInput(select_user, select_custom, from_date, to_date)" v-model="to_date" class="filter-date cursor-pointer input-area rounded-lg bg-light-background dark:bg-2x-dark-foreground" type="date" placeholder="From Date"/>
                </div>
            </div>
            <!-- filter select part -->
            <!--Results-->
            <div v-if="isNotEmptyQuery" class="relative z-50 px-4 pb-4">
                <!--Show results-->
                <CategoryName v-if="results.length !== 0">
                    {{ $t('files_and_folders') }}
                </CategoryName>

                <div v-if="results.length !== 0" v-for="(result, i) in results" :key="result.data.id" class="relative">
                    <!--Users result-->
                    <!-- <div
                        class="flex items-center px-2.5 py-3.5 'rounded-xl bg-light-background dark:bg-4x-dark-foreground'"
                        @click="openUser(result)"
                    >
                        <MemberAvatar :is-border="false" :size="44" :member="result" />
                        <div class="ml-3">
                            <b
                                class="max-w-1 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold"
                                style="max-width: 155px"
                            >
                                {{ result.data.attributes.name }}
                            </b>
                            <span class="block text-xs text-gray-600 dark:text-gray-500">
                                {{ result.data.attributes.email }}
                            </span>
                        </div>
                    </div> -->
                    <!-- class="rounded-xl bg-light-background dark:bg-4x-dark-foreground" -->

                    <!--Item result-->
                    <ItemList
                        :entry="result"
                        :highlight="false"
                        :mobile-handler="false"
                        @click.native="openItem(result)"
                    />
                </div>

                <!--Show Empty message-->
                <!-- <span
                    v-if="results.length === 0"
                    class="p-2.5 text-sm text-gray-700 dark:text-gray-400"
                >
                    {{ $t('messages.nothing_was_found') }}
                </span> -->
            </div>
        </div>
    </div>
</template>

<script>
import AppInputText from '../Forms/Layouts/AppInputText.vue'
import SelectInput from '../Inputs/SelectInput.vue'
import { events } from '../../bus'
import ItemList from '../UI/Entries/ItemList'
import MemberAvatar from '../UI/Others/MemberAvatar'
import Spinner from '../UI/Others/Spinner'
import CategoryName from '../../components/Spotlight/Components/CategoryName.vue'
import KeyboardHints from '../../components/Spotlight/Components/KeyboardHints'
import axios from 'axios'
import { debounce } from 'lodash'
import {
    SearchIcon,
    XIcon,
} from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
    name: 'Spotlight',
    components: {
        AppInputText,
        SelectInput,
        KeyboardHints,
        CategoryName,
        MemberAvatar,
        SearchIcon,
        ItemList,
        Spinner,
        XIcon,
    },
    computed: {
        ...mapGetters(['config', 'user', 'sharedDetail']),
        isAdmin() {
            return this.user.data.attributes.role === 'admin'
        },
        metaKeyIcon() {
            return this.$isApple() ? '⌘' : 'Ctrl'
        },
        isNotEmptyQuery() {
            return this.select_user !== '' || this.select_custom !== ''
        },
        isEmptyQuery() {
            return this.select_user === '' || this.select_custom === ''
        },
    },
    data() {
        return {
            isLoading: false,
            isVisible: false,
            results: [],
            users: [],
            customers: [],
            select_user: '',
            select_custom: '',
            from_date: '',
            to_date: ''
        }
    },
    methods: {
        async getUsers() {
            axios
                .get('/api/users')
                .then((response) => {
                    response.data.data.map((e) => this.users.push({
                        "label": e.data.attributes.name,
                        "value": e.data.id
                    }))
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        async getFolders() {
            axios
                .get(`${this.$store.getters.api}/browse/all-folders/${'all'}${this.$store.getters.sorting.URI}`)
                .then((response) => {
                    let arr = response.data.data;
                    for (var i = 0; i < arr.length; i ++) {
                        if ((arr[i].data.attributes.name).indexOf(" - ") > -1) {
                            this.customers.push({
                                "label": arr[i].data.attributes.name,
                                "value": arr[i].data.id
                            })
                        }
                    }
                })
                .catch((error) => {
                    // Redirect if unauthenticated
                    console.log(error);
                })
        },
        openItem(file) {
            console.log("filte info: ", file)
			// Show file
			if (file.data.type !== 'folder') {
				this.$store.commit('ADD_TO_FAST_PREVIEW', file)
				this.$store.commit('CLIPBOARD_REPLACE', file)

				// Show file thumbnail
				events.$emit('file-preview:show')
			}

            this.exitFilterPopup()
        },
        exitFilterPopup() {
            this.actions = []
            this.results = []
            this.select_user = '',
            this.select_custom = '',
            this.from_date = '',
            this.to_date = ''
            this.isVisible = false
        },
    },
    created() {
        this.getFolders();
        this.getUsers();
        events.$on('filter:show', (filter) => {
            this.isVisible = true
            this.$nextTick(() => {
                if (this.$refs.searchInput) this.$refs.searchInput.focus()
            })
        })
        /*events.$on('data:filter', (args) => {
            // this.results = args;
            axios
                .get(`/api/filter`, {
                    params: args,
                })
                .then((response) => {
					this.results = response.data.data
                })
                .catch(() => this.$isSomethingWrong())
                .finally(() => (this.isLoading = false))
        })*/
    },
}
</script>

<style lang="scss">
	.filter-date {
        border-radius: 4px;
        padding: 7px;
    }
</style>
