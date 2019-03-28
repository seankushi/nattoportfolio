<template>
  <v-app>
    <core-toolbar />
    <v-content>
      <nuxt />
    </v-content>
    <nuxt-link
      v-for="project in projects"
      :key="project.slug"
      :to="`/projects/${project.slug}`"
      v-text="project.slug"
    />
    <core-footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  computed: mapState(['projects'])
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
.v-md {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
.v-md img {
  display: inline-block;
  width: 100%;
}
</style>
