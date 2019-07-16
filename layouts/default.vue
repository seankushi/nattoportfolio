<template>
  <v-app>
    <core-toolbar />
    <v-content>
      <nuxt />
    </v-content>
    <core-footer @change="project => active = project" />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar')
    // CoreView: () => import('@/components/core/View')
  },
  data () {
    return {
      active: null
    }
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
.v-footer {
  background: none !important;
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
