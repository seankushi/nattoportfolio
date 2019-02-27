<template>
  <v-app>
    <core-toolbar />

    <nuxt />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  }
}
</script>
