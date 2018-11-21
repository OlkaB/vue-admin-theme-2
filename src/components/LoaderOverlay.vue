<template>
    <v-dialog
            v-model="dialogIsVisible"
            persistent
            width="300"
    >
        <v-card color="primary" dark >
            <v-card-text>
                <h3 class="font-weight-regular">Przetwarzamy dane...</h3>
                <v-progress-circular indeterminate color="white" class="my-4" :value="40" :size="60" :width="6"></v-progress-circular>
                <p class="mb-0 caption"><i>Prosimy o chwilę cierpliwości.</i></p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        computed: {
            dialogIsVisible: function() {
                return this.$store.getters.appLoaderVisibility;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .theme--dark.v-card p {
        color: rgba(255,255,255,.7);
    }
    .v-card {
        cursor: not-allowed;
        user-select: none;
        text-align: center;
    }
</style>