<template>
    <div>
        <v-navigation-drawer v-model="navDrawerIsVisible" app>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list @click="">
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

                        <v-list-tile v-for="subItem in menuItem.subItems" :to="{path: subItem.route}">
                            <v-list-tile-action>
                                <v-icon>{{ subItem.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>


                    <v-list-group :key="abcd" class="no-submenu"v-else>
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
            <v-breadcrumbs :items="breadCrmb" divider=">"></v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon>
                <v-badge color="accent" >
                    <span slot="badge">6</span>
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
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
</style>