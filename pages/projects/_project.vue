<template>
  <div>
    <v-img
      v-if="data.banner"
      :src="data.banner"
      aspect-ratio="16/9"
      class="banner"
      height="400"
    />
    <code>{{ data }}</code>
    <v-container>
      <h1 class="display-3 mb-2">{{ data.name }}</h1>
      <v-md class="v-md">{{ content.body }}</v-md>
    </v-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    'v-md': VueMarkdown
  },
  async asyncData ({ params, error, payload, store }) {
    return payload || store.state.projects.find(p => p.slug === params.project)
  },
  data () {
    return {
      content: {
        attributes: {},
        body: ''
      }
    }
  },
  computed: {
    banner () {
      return this.content.attributes.banner
    },
    data () {
      return this.content.attributes
    },
    sections () {
      return this.content.attributes.sections
    }
  },
  mounted () {
    console.log('data:', this)
    console.log('store: ', this.$store.state.projects[0])
  }
}
</script>

<style scoped>
.banner {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
