<template>
  <div class="page page--index">
    <c3-header />
    <div
      id="sections"
      v-scroll-spy="{allowNoActive: true, offset: scrollSpyOffset()}"
    >
      <c3-find-us />
      <c3-events />
      <c3-about-us />
      <c3-podcast />
      <c3-giving />
      <c3-attribution />
    </div>
    <c3-footer />
  </div>
</template>

<script>
import C3Header from '@/components/C3Header.vue'
import C3FindUs from '@/components/C3FindUs.vue'
import C3Events from '@/components/C3Events.vue'
import C3AboutUs from '@/components/C3AboutUs.vue'
import C3Podcast from '@/components/C3Podcast.vue'
import C3Giving from '@/components/C3Giving.vue'
import C3Attribution from '@/components/C3Attribution.vue'
import C3Footer from '@/components/C3Footer.vue'

export default {
  components: {
    C3Header,
    C3FindUs,
    C3Events,
    C3AboutUs,
    C3Podcast,
    C3Giving,
    C3Attribution,
    C3Footer
  },
  fetch({ store, params }) {
    // Grab all the event markdown files and add them to the store.
    store.dispatch('fetchEvents')
    store.dispatch('fetchPodcasts')
  },
  methods: {
    scrollSpyOffset() {
      if (process.client) {
        return window.matchMedia('(min-width: 768px)').matches ? 80 : 48
      }
    }
  }
}
</script>

<style lang="scss">
</style>
