<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#FFF'"
    app
    flat
  >
    <nuxt-link
      class="site-title"
      to="/"
    >
      <v-toolbar-title class="display-1">{{ main.title }}</v-toolbar-title>
    </nuxt-link>
    <v-spacer />
    <!-- <SocialMedia /> -->
    <v-btn
      outline
      to="/about"
      v-text="'About'"
    />
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    // SocialMedia: () => import('@/components/SocialMedia')
  },

  data: () => ({
    isTransparent: true
  }),

  computed: mapState(['main']),

  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>

<style scoped>
.site-title {
  text-decoration: none;
}
</style>
