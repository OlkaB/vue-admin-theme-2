<template>
    <v-app>
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import Header from '@/components/layout/Header';
    import Content from '@/components/layout/Content';
    import Footer from '@/components/layout/Footer';

    export default {
        name: 'App',
        components: {
            'app-header': Header,
            'app-content': Content,
            'app-footer': Footer
        },
        data() {
            return {
                //
            }
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
    a:-webkit-any-link {
        text-decoration: none;
        color: initial;
    }
</style>