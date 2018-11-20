<template>
    <v-card>
        <v-card-title primary-title>
            <v-layout row wrap>
                <v-flex>
                    <small class="text-muted uppercase">products sold</small>
                    <v-icon class="pull-right" color="accent">mdi-bell</v-icon>

                    <v-layout row align-center>
                            <h1 class="display-2 font-weight-medium" v-bind:class="">
                                125.58%
                            </h1>
                            <div class="ma-4 success--text">
                                <span>9%</span>
                                <v-icon color="success" small>mdi-arrow-up-thick</v-icon>
                            </div>
                    </v-layout>

                    <small class="text-muted">something else</small>
                </v-flex>
            </v-layout>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: 'WidgetSmall'
    }
</script>