<template>
    <v-app>
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import Header from './components/layout/Header';
    import Content from './components/layout/Content';
    import Footer from './components/layout/Footer';

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
