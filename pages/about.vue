<template>
  <div>
    {{ about.name }}
    <article v-html="about.body" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['about'])
}
</script>
