<template>
    <v-card v-bind:color="cardColor" v-bind:class="cardColor ? 'white--text' : ''">
        <v-card-title primary-title>
            <span class="text-muted--dark uppercase font-weight-medium" >{{cardTitle}}</span>        
        </v-card-title>

        <div class="px-3">
            <v-layout row align-center class="comparators" v-bind:class="cardColor ? 'comparators--white' : ''">
                <v-flex lg-4>
                    <span class="font-weight-light">{{data[0].title}}</span>
                    <p class="title">{{data[0].value|number}}</p>
                </v-flex>
                <v-flex lg-4>
                    <span class="font-weight-light">{{data[1].title}}</span>
                    <p class="title">{{data[1].value|number}}</p>
                </v-flex>
                <v-flex lg-4>
                    <span class="font-weight-light">{{data[2].title}}</span>
                    <p class="title">{{data[2].value|number}}</p>
                </v-flex>
            </v-layout>
            <v-layout row align-center>
                <v-flex>
                    <v-progress-linear v-bind:value="progressVal" 
                        v-bind:color="cardColor ? 'white' : ''"
                    ></v-progress-linear>
                </v-flex>
            </v-layout>
        </div>

        <v-card-title>
            <span class="text-muted--dark font-weight-medium" v-if="cardFooterTxt">{{cardFooterTxt}}</span>
            <span v-else>&nbsp;</span>            
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: 'WidgetCompare',
        props: [
            'cardColor',
            'cardTitle',
            'progressVal',
            'data',
            'cardFooterTxt'
        ]
    }
</script>

<style lang="scss">
    .comparators .flex:nth-child(1),
    .comparators .flex:nth-child(2) {
        border-right: 1px solid rgba(0,0,0,0.4);
    }

    .comparators .flex:nth-child(2),
    .comparators .flex:nth-child(3) {
        padding-left: 7px;
    }

    .comparators.comparators--white .flex:nth-child(1),
    .comparators.comparators--white .flex:nth-child(2) {
        border-right-color: rgba(255,255,255,0.4);
    }
</style>
