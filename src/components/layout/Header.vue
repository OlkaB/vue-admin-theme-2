<template>
    <div>
        <app-nav-drawer></app-nav-drawer>
        <app-header-toolbar></app-header-toolbar>

    </div>
</template>

<script>
    import { menuItemsData } from '@/mixins/MenuItems';
    import NavigationDrawer from '@/components/layout/partials/NavigationDrawer';
    import HeaderToolbar from '@/components/layout/partials/HeaderToolbar';

    export default {
        name: 'Header',
        mixins: [menuItemsData],
        components: {
            'app-nav-drawer': NavigationDrawer,
            'app-header-toolbar': HeaderToolbar
        },
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
        computed: {
            userFullName () {
                return this.$store.getters.userFullName;
            }
        }
    }
</script>

<style lang="scss" scoped>
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