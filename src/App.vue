<template>
    <v-app>
        <doz-header/>
        <doz-content/>
        <doz-loading-overlay/>
        <doz-footer/>
    </v-app>
</template>

<script>
    import Header from '@/components/layout/TheHeader';
    import Content from '@/components/layout/TheContent';
    import Footer from '@/components/layout/TheFooter';
    import LoaderOverlay from '@/components/LoaderOverlay';

    export default {
        name: 'App',
        components: {
            'doz-header': Header,
            'doz-content': Content,
            'doz-footer': Footer,
            'doz-loading-overlay': LoaderOverlay
        },
        mounted() {
            // get user data and permissions
            let store = this.$store;
            this.$http.get(this.$store.getters.endpoint('userdata'))
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.commit('setUser', data.users[1])
                });
        }
    }
</script>

<style lang="scss">
    .text-muted {
        color: rgba(0,0,0,0.4);
    }
    .text-muted--dark {
        color: rgba(0,0,0,0.5);
    }
    .uppercase {
        text-transform: uppercase;
    }
    .pull-left {
        float: left !important;
    }
    .pull-right {
        float: right !important;
    }
    .v-content {
        background-color: #e2e2e2;
    }
    .img-responsive {
        width: 100%;
        height: auto;
    }
    .img-responsive-full {
        max-width: 100%;
        height: 100%;
        width: auto;
        height: auto;
    }
    a {
        text-decoration: none;
        color: initial;
    }
</style>