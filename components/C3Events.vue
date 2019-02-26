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
    <div class="events__extra-chevron" />
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
  methods: {
    eventExpired(event) {
      debugger
      return Date.now() > Date.parse(event.attributes.exp_date)
    }
  }
}
</script>

<style lang="scss">
#events {
  padding: 13rem 0 0;
  position: relative;

  @include media-breakpoint-up(md) {
    padding-top: 21rem;
  }

  // .events__extra-chevron,
  // &::before,
  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 0;
  //   padding-top: 37%;
  //   clip-path: polygon(0 0, 0 38%, 50% 100%, 100% 38%, 100% 0);
  //   transform: translateY(-100%);
  //   background-attachment: fixed;
  // }

  // &::before {
  //   transform: translateY(calc(-100% + 3rem));
  //   background-color: #efefef;
  //   background-image: url('~assets/img/forest.jpg');
  //   background-size: contain;
  //   z-index: -1;

  //   @include media-breakpoint-up(md) {
  //     transform: translateY(calc(-100% + 5rem));
  //   }
  // }

  // &::after {
  //   transform: translateY(calc(-100% + 6rem));
  //   background-color: #fafafa;
  //   background-image: url('~assets/img/bg-5.jpg');
  //   background-size: cover;
  //   z-index: -2;

  //   @include media-breakpoint-up(md) {
  //     transform: translateY(calc(-100% + 10rem));
  //   }
  // }

  // .events__extra-chevron {
  //   transform: translateY(calc(-100% + 9rem));
  //   background-color: #fafafa;
  //   background-image: url('~assets/img/bg-11.jpg');
  //   background-size: cover;
  //   z-index: -2;

  //   @include media-breakpoint-up(md) {
  //     transform: translateY(calc(-100% + 15rem));
  //   }
  // }

  .events__list {
    @extend %container;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;

    @include media-breakpoint-up(md) {
      padding: 0 0 6rem;
    }

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
        font-weight: 800;
        text-transform: uppercase;

        @include media-breakpoint-up(md) {
          min-height: 5.5rem;
        }
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
