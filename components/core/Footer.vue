<template>
  <v-footer
    fixed
    height="88"
    class="justify-start px-2"
  >
    <v-layout
      column
      pa-2
    >
      <nuxt-link
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
      >
        {{ project.attributes.name }}
      </nuxt-link>
    </v-layout>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['projects'])
}
</script>

<style scoped>
a {
  display: inline-block;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
