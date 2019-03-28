<template>
  <div>
    {{ error.statusCode }}
    Error {{ error.message }}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
