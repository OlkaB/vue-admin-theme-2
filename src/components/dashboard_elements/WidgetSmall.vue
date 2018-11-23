<template>
        <v-card>
            <v-card-title primary-title>
                <v-layout row wrap>
                    <v-flex>
                        <small class="text-muted uppercase" v-if="cardTitle">{{cardTitle}}</small>
                        <small v-else>&nbsp;</small>
                        <v-icon class="pull-right" v-bind:color="cardIconColor" v-if="cardIcon">mdi-{{cardIcon}}</v-icon>
                        <o-badge class="pull-right" v-if="badgeTitle" :badgeColor="badgeColor" :class="badgeClass ? badgeClass : ''">
                            {{badgeTitle}}
                        </o-badge>

                        <v-layout row align-center>
                            <h1 class="display-2 font-weight-medium" v-bind:class="mainInfoColor + '--text'">
                                {{mainInfo}}
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
        props: [
            'cardTitle',
            'cardIcon',
            'cardIconColor',
            'badgeTitle',
            'badgeColor',
            'badgeClass',
            'mainInfo',
            'mainInfoColor',
            'cardFooterTxt'
        ]
    }
</script>