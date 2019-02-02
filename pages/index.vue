<template>
  <div class="page page--index">
    <c3-header />
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
import C3FindUs from '@/components/C3FindUs.vue'
import C3Events from '@/components/C3Events.vue'
import C3AboutUs from '@/components/C3AboutUs.vue'
import C3Podcast from '@/components/C3Podcast.vue'
import C3Giving from '@/components/C3Giving.vue'

// import wn from '~/content/events/worship-night.md'
// const fm = require('front-matter')
// const fileContent = import('@/content/events/worship-night.md')

export default {
  components: {
    C3Header,
    C3FindUs,
    C3Events,
    C3AboutUs,
    C3Podcast,
    C3Giving
  },
  fetch({ store, params }) {
    // const md = require.context('~/content/events', true, /\.md$/)
    // const md = require('~/content/events/christmas-village.md')
    // eslint-disable-next-line
    //console.log(wn)
    // eslint-disable-next-line
    //console.log(md)
    // eslint-disable-next-line
    //console.log(wn.attributes)
    // eslint-disable-next-line
    //console.log(wn.body)
    // eslint-disable-next-line
    //console.log(wn.html)
    // const mdContent = []
    // // const res = fm(fileContent.default)
    // md.keys().forEach(function(key) {
    //   // const res = fm(fileContent.default)
    //   debugger
    //   mdContent.push(key)
    // })
    // store.commit('events/add', mdContent)
  }
}
</script>

<style lang="scss">
</style>
