<template>
  <div>project</div>
</template>

<script>
export default {
  async asyncData ({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    console.log('PROJECT', store.state, route)
    return {
      content: store.state.projects.find(project => project.slug === route.path)
    }
  },
  data () {
    return {
      content: {}
    }
  }
}
</script>
