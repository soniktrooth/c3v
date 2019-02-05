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
        <c3-event :event="event" />
      </li>
    </ul>
    <div class="events__featured">
      <div
        v-for="event in featured"
        :key="event.id"
        class="events__featured-event"
      >
        <div class="events__details sr-only">
          <c3-event :event="event" />
        </div>
        <img :src="'/events-images/' + event.attributes.image">
      </div>
    </div>
  </section>
</template>

<script>
import C3Event from '@/components/C3Event.vue'

export default {
  components: {
    C3Event
  },
  data() {
    return {}
  },
  computed: {
    events() {
      return this.$store.state.events.list
    },
    featured() {
      return this.$store.state.events.featured
    },
    featuredImages() {
      const imgs = []
      this.featured.forEach(item => {
        const src = '/events-images/' + item.attributes.image
        imgs.push(src)
      })
      return imgs
    }
  },
  methods: {}
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

      h2 {
        margin-bottom: 1.25rem;
        font-size: 2.25rem;
        min-height: 5.5rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      div {
        margin-bottom: 5rem;

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
