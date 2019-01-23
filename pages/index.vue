<template>
  <div class="page page--index">
    <c3-header />
    <c3-navbar />
    <div
      id="sections"
      v-scroll-spy="{allowNoActive: true}"
    >
      <c3-find-us />
      <c3-events />
      <c3-about-us />
      <c3-podcast />
      <c3-giving />
    </div>
  </div>
</template>

<script>
import C3Header from '@/components/C3Header.vue'
import C3Navbar from '@/components/C3Navbar.vue'
import C3FindUs from '@/components/C3FindUs.vue'
import C3Events from '@/components/C3Events.vue'
import C3AboutUs from '@/components/C3AboutUs.vue'
import C3Podcast from '@/components/C3Podcast.vue'
import C3Giving from '@/components/C3Giving.vue'

export default {
  components: {
    C3Header,
    C3FindUs,
    C3Navbar,
    C3Events,
    C3AboutUs,
    C3Podcast,
    C3Giving
  }
}
</script>

<style>
</style>
