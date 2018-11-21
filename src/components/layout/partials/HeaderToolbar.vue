<template>
    <v-toolbar color="primary" dark app>
        <!-- <v-toolbar-side-icon @click="navDrawerIsVisible = !navDrawerIsVisible"></v-toolbar-side-icon> -->
        <v-toolbar-side-icon @click="navDrawerIsVisible"></v-toolbar-side-icon>

        <v-breadcrumbs class="hidden-xs-only" :items="breadCrmb" divider="/"></v-breadcrumbs>
        <v-spacer></v-spacer>

        <router-link to="/profil">
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/dashboard">
            <v-btn icon>
                <v-badge color="accent" >
                    <span slot="badge">6</span>
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>
        </router-link>
        <router-link to="/wylogowano">
            <v-btn icon>
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
        </router-link>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'HeaderToolbar',
        data () {
            return {
                breadCrmb: [
                    {
                        text: 'Dashboard',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Link 1',
                        disabled: false,
                        href: 'breadcrumbs_link_1'
                    },
                    {
                        text: 'Link 2',
                        disabled: true,
                        href: 'breadcrumbs_link_2'
                    }
                ],
            }
        },
        methods: {
            navDrawerIsVisible() {
                const leftNavBarVisibility = this.$store.getters.leftNavBarVisibility;
                this.$store.commit('leftNavBarVisibility', !leftNavBarVisibility);
            }
        }
    }
</script>