<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="main.image || ''"
          height="100vh"
        />
      </v-flex>

      <v-flex
        :pa-5="$vuetify.breakpoint.smAndDown"
        xs12
        md6
        align-content-space-between
        layout
        wrap
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6
          >
            <base-heading>
              {{ main.title }}
            </base-heading>
            <article v-html="main.body" />
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['main', 'meta']),
  head () {
    const {
      title
    } = this.meta
    return {
      title
    }
  }
}
</script>
