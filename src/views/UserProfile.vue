<template>
  <div class="about">
    <h1>This is an USER PROFILE page</h1>

    <v-btn type="button" @click="toggleModal">Turn on page loader</v-btn>
  </div>
</template>

<script>
  export default {
      methods: {
          toggleModal: function() {
              return this.$store.commit('appLoaderVisibility', !this.$store.getters.appLoaderVisibility);
          }
      }
  }
</script>
