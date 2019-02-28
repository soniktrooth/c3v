<template>
  <section id="podcast">
    <h2>
      C3 Vancouver Podcast
    </h2>
    <div class="podcast__iframes">
      <h3>Listen Now:</h3>
      <div class="podcast__iframes-wrap">
        <div
          v-for="ep in episodes"
          :key="ep.id"
          :class="{'loaded': ep.load}"
        >
          <C3Icon
            icon-name="IconLoader"
            class="podcast__loader"
          />
          <div
            class="podcast__preload"
            @click="loadPlay"
          >
            <div>
              <h4>{{ ep.title }}</h4>
              <p>{{ ep.preacher }}</p>
              <p>{{ ep.date }}</p>
            </div>
            <button>
              Load Episode
              <C3Icon icon-name="IconAudio" />
            </button>
          </div>
          <iframe
            :src="ep.load ? ep.url : ''"
            :height="ep.load ? '102px' : ''"
            width="100%"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
    <div class="podcast__service-links">
      <h3>Subscribe on:</h3>
      <ul>
        <li
          v-for="service in services"
          :key="service.id"
        >
          <a
            :href="service.url"
            :class="['podcast--' + service.icon, service.textDark ?'podcast__color--dark' : '']"
            :style="{backgroundColor: service.colour}"
            target="_blank"
          >
            <C3Icon :icon-name="service.icon" />
            <span>{{ service.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="podcast__background" />
    <div class="podcast__chevrons" />
  </section>
</template>

<script>
import C3Icon from '@/components/C3Icon.vue'

export default {
  components: {
    C3Icon
  },
  computed: {
    episodes() {
      return this.$store.state.podcasts.episodes
    },
    services() {
      return this.$store.state.podcasts.services
    }
  },

  methods: {
    loadPlay(event) {
      const child = event.currentTarget.parentNode
      const parent = document.getElementsByClassName('podcast__iframes-wrap')[0]
      const i = Array.prototype.indexOf.call(parent.children, child)
      this.$store.commit('podcasts/load', i)
    }
  }
}
</script>

<style lang="scss">
$podcast-top-offset: 10rem;
$podcast-bottom-offset: 25rem;

#podcast {
  display: flex;
  flex-wrap: wrap;
  padding: ($podcast-top-offset + 3rem) 3rem $podcast-bottom-offset;
  margin: -$podcast-top-offset 0 0;
  position: relative;
  z-index: 0;

  .podcast__chevrons,
  .podcast__chevrons::before,
  .podcast__chevrons::after,
  .podcast__background {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .podcast__background {
    top: -4%;
    bottom: 4%;
    background-size: 500%;
    background-position: center top;
    background-attachment: fixed;
    clip-path: polygon(0 0, 0 86%, 50% 100%, 100% 86%, 100% 0, 50% 150px);

    @include media-breakpoint-up(sm) {
      background-size: cover;
      background-position: center center;
      clip-path: polygon(0 0, 0 84.5%, 50% 100%, 100% 84.5%, 100% 0, 50% 150px);
    }

    @include media-breakpoint-up(md) {
      top: -6%;
      bottom: 6%;
      clip-path: polygon(0 0, 0 81.5%, 50% 100%, 100% 81.5%, 100% 0, 50% 150px);
    }

    @include media-breakpoint-up(lg) {
      clip-path: polygon(0 0, 0 81%, 50% 100%, 100% 81%, 100% 0, 50% 150px);
    }

    @include media-breakpoint-up(lg) {
      clip-path: polygon(0 0, 0 80.5%, 50% 100%, 100% 80.5%, 100% 0, 50% 150px);
    }

    background-image: url('~assets/img/podcast.jpg');
    z-index: -1;
  }

  .podcast__chevrons {
    z-index: -2;
    transform: translateY(-4%);

    @include media-breakpoint-up(sm) {
      transform: translateY(-5%);
    }

    @include media-breakpoint-up(md) {
      transform: translateY(-6%);
    }

    @include media-breakpoint-up(lg) {
      transform: translateY(-7%);
    }

    &::before {
      background-color: #addbcb;
      transform: translateY(2%);
      z-index: -1;
      clip-path: polygon(0 0, 0 86.5%, 50% 100%, 100% 86.5%, 100% 0, 50% 150px);

      @include media-breakpoint-up(sm) {
        transform: translateY(3%);

        background-size: cover;
        background-position: center center;
        clip-path: polygon(0 0, 0 85%, 50% 100%, 100% 85%, 100% 0, 50% 150px);
      }

      @include media-breakpoint-up(md) {
        clip-path: polygon(0 0, 0 82%, 50% 100%, 100% 82%, 100% 0, 50% 150px);
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(4.3%);

        clip-path: polygon(
          0 0,
          0 81.5%,
          50% 100%,
          100% 81.5%,
          100% 0,
          50% 150px
        );
      }

      @include media-breakpoint-up(xl) {
        clip-path: polygon(0 0, 0 81%, 50% 100%, 100% 81%, 100% 0, 50% 150px);
      }
    }

    &::after {
      background-color: #e9f4ef;
      transform: translateY(4%);
      z-index: -2;
      clip-path: polygon(0 0, 0 86.5%, 50% 100%, 100% 86.5%, 100% 0, 50% 150px);

      @include media-breakpoint-up(sm) {
        transform: translateY(5%);
        background-size: cover;
        background-position: center center;
        clip-path: polygon(0 0, 0 85%, 50% 100%, 100% 85%, 100% 0, 50% 150px);
      }

      @include media-breakpoint-up(md) {
        transform: translateY(6%);
        clip-path: polygon(0 0, 0 82%, 50% 100%, 100% 82%, 100% 0, 50% 150px);
      }

      @include media-breakpoint-up(lg) {
        transform: translateY(7%);
        clip-path: polygon(
          0 0,
          0 81.5%,
          50% 100%,
          100% 81.5%,
          100% 0,
          50% 150px
        );
      }

      @include media-breakpoint-up(xl) {
        clip-path: polygon(0 0, 0 81%, 50% 100%, 100% 81%, 100% 0, 50% 150px);
      }
    }
  }

  h2 {
    margin-bottom: 3rem;
    color: $white;
    flex-basis: 100%;
    text-align: center;

    @include media-breakpoint-up(sm) {
      margin-bottom: 7rem;
    }
  }

  h3 {
    margin-bottom: 3rem;
    font-family: $font-family-serif;
    font-weight: 600;
    text-transform: none;
    font-style: italic;
    color: $white;
  }

  .podcast__iframes {
    margin-bottom: 4rem;
    width: 100%;

    @include media-breakpoint-up(md) {
      flex-basis: 60%;
      padding-right: 5%;
      margin-bottom: 0;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: 70%;
      padding-right: 15%;
    }

    .podcast__iframes-wrap {
      > div {
        position: relative;
        margin-bottom: 6rem;
        background-color: #fff;
        border-radius: 4px;
        line-height: 0;
        cursor: pointer;

        &:hover,
        &:focus,
        &:active {
          box-shadow: 0px 0px 0px 4px $yellow;
        }

        &.loaded {
          height: 102px;

          &:hover,
          &:focus,
          &:active {
            box-shadow: none;
          }

          .podcast__preload {
            overflow: hidden;

            div {
              opacity: 0;
              transform: translateX(-100%);
            }

            button {
              opacity: 0;
              transform: translateX(100%);
            }
          }

          iframe {
            height: 100%;
          }

          .podcast__loader {
            opacity: 1;
          }
        }
      }
    }

    .podcast__loader {
      width: 3rem;
      height: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.35s ease-in-out;
    }

    .podcast__preload {
      opacity: 1;

      @include media-breakpoint-up(sm) {
        display: flex;
        height: 100%;
      }

      @include media-breakpoint-up(md) {
        display: block;
        //height: 100%;
      }

      @include media-breakpoint-up(lg) {
        display: flex;
        //height: 100%;
      }

      > div {
        padding: 1rem;
        flex-basis: 80%;
        transition: all 0.35s ease-in-out;
      }

      > button {
        @extend .btn;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        background-color: $orange;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        transition: all 0.35s ease-in-out;

        @include media-breakpoint-up(sm) {
          width: auto;
          border-top-right-radius: 3px;
          border-bottom-left-radius: 0;
        }

        @include media-breakpoint-up(md) {
          width: 100%;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        @include media-breakpoint-up(lg) {
          width: auto;
          border-top-right-radius: 3px;
          border-bottom-left-radius: 0;
        }
      }

      svg {
        width: 3rem;
        height: 3rem;
        margin-left: 1rem;

        @include media-breakpoint-up(sm) {
          margin-left: 0;
        }

        @include media-breakpoint-up(md) {
          margin-left: 1rem;
        }

        @include media-breakpoint-up(lg) {
          margin-left: 0;
        }
      }
    }

    h4 {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    iframe {
      max-width: 765px;
      height: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      &:not(:last-child) {
        margin-bottom: 2rem;

        @include media-breakpoint-up(md) {
          margin-bottom: 6rem;
        }
      }
    }
  }

  .podcast__service-links {
    @include media-breakpoint-up(md) {
      flex-basis: 40%;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: 30%;
    }

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      list-style: none;

      @include media-breakpoint-up(md) {
        max-width: 300px;
      }

      li {
        flex-basis: 100%;

        @include media-breakpoint-up(sm) {
          flex-basis: 50%;

          &:nth-child(odd) {
            a {
              margin-right: 0.5rem;
            }
          }

          &:nth-child(even) {
            a {
              margin-left: 0.5rem;
            }
          }
        }
        @include media-breakpoint-up(md) {
          flex-basis: 100%;

          a {
            &:nth-child(even),
            &:nth-child(odd) {
              margin-left: 0;
              margin-right: 0;
            }
          }
        }

        a {
          @extend .btn;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          text-align: left;
          color: $white;
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
          transition: all 0.15s ease-in;

          &:hover,
          &:focus,
          &:active {
            color: $white;
            box-shadow: $box-shadow--hover;
            transform: scale(1.02);
          }

          &.podcast__color--dark {
            color: $black;

            svg {
              fill: $black;

              path {
                fill: $black;
              }
            }
          }

          svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1rem;
            fill: $white;

            path {
              fill: $white;
            }
          }
        }
      }
    }
  }
}
</style>
