<template>
  <div>
    <v-container>
      <h1 class="display-3 mb-2">
        {{ data.name }}
      </h1>
      <v-md class="v-md">
        {{ body }}
      </v-md>
      <h1>{{ data.name }}</h1>
    </v-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    'v-md': VueMarkdown
  },
  data () {
    return {
      attributes: {},
      frontmatter: '',
      body: ''
    }
  },
  computed: {
    banner () {
      return this.attributes.banner
    },
    data () {
      return this.attributes
    },
    sections () {
      return this.attributes.sections
    }
  },
  async asyncData ({ params, error, payload, store }) {
    return payload || store.state.projects.find(p => p.slug === params.project)
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
