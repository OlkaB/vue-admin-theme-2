<template>
    <div>
        <v-navigation-drawer v-model="navDrawerIsVisible" app>
            <v-toolbar flat class="transparent nav-header" color="secondary" height="150">
                <!--<img :src="require('@/assets/images/logo.png')" class="img-responsive logo"><img>-->
                <div class="py-3">
                    <router-link to="/wylogowano">
                        <h2 class="headline font-weight-light white--text">SYS | Company</h2>
                    </router-link>

                    <p class="title font-weight-medium pt-3 mb-0 white--text">{{ userFullName }}</p>
                    <v-menu offset-y class="user-profile__menu">
                        <v-list-tile slot="activator" >
                            <span class="font-weight-light user-profile__menu__activator">Profil <v-icon>mdi-menu-down</v-icon></span>
                        </v-list-tile>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-title>
                                    <router-link to="/profil">
                                        <v-icon>mdi-account</v-icon> mój profil
                                    </router-link>
                                </v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-title>
                                    <router-link to="/wylogowano">
                                        <v-icon>mdi-logout-variant</v-icon> wyloguj
                                    </router-link>
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list>
                <template v-for="menuItem in menuItems"
                          >
                    <v-list-group v-if="menuItem.subItems && menuItem.subItems.length > 0"
                                  :key="menuItem.title">
                        <v-list-tile slot="activator">
                            <v-list-tile-action>
                                <v-icon>{{ menuItem.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile :key="subItem.title" v-for="subItem in menuItem.subItems" :to="{path: subItem.route}">
                            <v-list-tile-action>
                                <v-icon>{{ subItem.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>


                    <v-list-group :key="menuItem.title" class="no-submenu" v-else>
                        <v-list-tile slot="activator" :to="{path: menuItem.route}" active-class="text-primary">
                            <v-list-tile-action>
                                <v-icon>{{ menuItem.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                </template>

            </v-list>
        </v-navigation-drawer>


        <v-toolbar color="primary" dark app>
        <!-- <v-toolbar-side-icon @click="navDrawerIsVisible = !navDrawerIsVisible"></v-toolbar-side-icon> -->
            <v-toolbar-side-icon @click="navDrawerIsVisible = !navDrawerIsVisible"></v-toolbar-side-icon>

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
    </div>
</template>

<script>
    import { menuItemsData } from '@/mixins/MenuItems';

    export default {
        name: 'Header',
        mixins: [menuItemsData],
        data () {
            return {
                navDrawerIsVisible: true,
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
        computed: {
            userFullName () {
                return this.$store.getters.userFullName;
            }
        }
    }
</script>

<style lang="scss">
    .text-primary,
    .text-primary .v-icon{
        color: #3f51b5 !important;
    }
    .no-submenu .v-list__group__header__append-icon {
        display: none;
    }
    .logo {
        max-width: 150px;
    }
    .user-profile__menu .v-list__tile {
        height: auto;
        padding: 0;
        font-size: 14px;
    }
    .user-profile__menu__activator,
    .user-profile__menu .v-icon {
        color: rgba(255,255,255,.7);
    }
    .v-breadcrumbs {
        margin-left: 70px;
    }
    .v-breadcrumbs .v-breadcrumbs__item {
        color: rgba(255,255,255,0.7);
    }
    .theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled {
        color: rgba(255,255,255,0.9);
        font-weight: 500;
    }
    /*.nav-header {*/
        /*background: url("~@/assets/images/header-profile-blue.png") center no-repeat;*/
        /*background-size: cover;*/
    /*}*/
</style>