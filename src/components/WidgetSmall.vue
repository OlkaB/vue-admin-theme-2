<template>
    <v-card>
        <v-card-title primary-title>
            <v-layout row wrap>
                <v-flex>
                    <small class="text-muted uppercase" v-if="cardTitle">{{cardTitle}}</small>
                    <small v-else>&nbsp;</small>
                    <v-icon class="pull-right" v-bind:color="cardIconColor" v-if="cardIcon">mdi-{{cardIcon}}</v-icon>
                    <doz-badge--rect class="pull-right" v-if="badgeTitle" :badgeColor="badgeColor" :class="badgeClass ? badgeClass : ''">
                        {{badgeTitle}}
                    </doz-badge--rect>

                    <v-layout row align-center>
                        <h1 class="display-2 font-weight-medium" v-bind:class="mainInfoColor + '--text'">
                            <slot></slot>
                        </h1>
                        <div class="ml-4">
                            <slot name="mainInfoAddOn"></slot>
                        </div>
                    </v-layout>

                    <small class="text-muted" v-if="cardFooterTxt">{{cardFooterTxt}}</small>
                    <small v-else>&nbsp;</small>
                </v-flex>
            </v-layout>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: 'WidgetSmall',
        props: {
            cardTitle: {
                type: String,
                required: true,
            },
            cardIcon: {
                type: String,
                required: false,
            },
            cardIconColor: {
                type: String,
                required: false,
            },
            badgeTitle: {
                type: String,
                required: false,
            },
            badgeColor: {
                type: String,
                required: false,
            },
            badgeClass: {
                type: String,
                required: false,
            },
            mainInfoColor: {
                type: String,
                required: false,
            },
            cardFooterTxt: {
                type: String,
                required: false,
            },
        },
    }
</script>