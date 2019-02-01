<template>
  <section id="events">
    <h2 class="sr-only">
      Events
    </h2>

    <ul class="events__list">
      <li
        v-for="(event, i) in events"
        :key="i"
      >
        <div v-html="event" />
      </li>
    </ul>
    <div class="events__featured">
      <!-- <img :src="featured[0]"> -->
      {{ featured }}
    </div>
  </section>
</template>

<script>
// const fm = require('front-matter')
// const md = require('markdown-it')

export default {
  data() {
    return {
      // events: [],
      featured: ['blah']
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  mounted() {
    // const mds = require.context('~/static/events', true, /\.md$/)
    // this.importMarkdown(mds, this.events)
    // const img = require.context('~/static/events/featured', true)
    // this.importAll(img, this.featured)
  },
  methods: {
    importAll(items, dataItem) {
      items.keys().forEach(key => dataItem.push(items(key)))
    },
    importMarkdown(items, events) {
      // items.keys().forEach(function(key) {
      //   debugger
      //   const fileContent = import(key)
      //   const res = fm(fileContent.default)
      //   events.push(res)
      //   debugger
      // })
    }
  }
}
</script>

<style lang="scss">
#events {
  padding: 6rem 0 0;

  .events__list {
    @extend %container;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 6rem;
    list-style: none;

    li {
      padding-right: 3rem;
      padding-left: 3rem;

      @include media-breakpoint-up(md) {
        flex-basis: 50%;
        padding-right: 2rem;
        padding-left: 2rem;
      }

      @include media-breakpoint-up(lg) {
        flex-basis: 33%;
        padding-right: 3rem;
        padding-left: 3rem;
      }

      section {
        margin-bottom: 5rem;

        h2 {
          margin-bottom: 1.25rem;
          font-size: 2.25rem;
          min-height: 5.5rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        p {
          font-size: 1.5rem;
        }
      }
    }
  }

  .events__featured {
    img {
      @extend .img-fluid;
      width: 100%;
    }
  }
}
</style>
