<template>
  <section id="podcast">
    <h2>
      C3 Vancouver Podcast
    </h2>
    <div class="podcast__iframes">
      <h3>Listen Now:</h3>
      <iframe
        v-for="ep in episodes"
        :key="ep.id"
        :src="ep"
        height="102px"
        width="100%"
        frameborder="0"
        scrolling="no"
      />
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
  </section>
</template>

<script>
import C3Icon from '@/components/C3Icon.vue'

export default {
  components: {
    C3Icon
  },
  data() {
    return {
      episodes: this.$store.state.podcastEpisodes,
      services: [
        {
          name: 'Apple Podcasts',
          url: 'https://itunes.apple.com/us/podcast/c3-vancouver/id1416953951',
          colour: '#9933CC',
          icon: 'IconApplePodcasts',
          textDark: false
        },
        {
          name: 'Breaker',
          url: 'https://www.breaker.audio/c3-church-vancouver',
          colour: '#5D9FFF',
          icon: 'IconBreaker',
          textDark: false
        },
        {
          name: 'Castbox',
          url: 'https://castbox.fm/channel/id1410862?country=us',
          colour: '#FF6D34',
          icon: 'IconCastbox',
          textDark: true
        },
        {
          name: 'Google Podcasts',
          url:
            'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81NjkyYzRjL3BvZGNhc3QvcnNz',
          colour: '#4285F4',
          icon: 'IcongooglePodcasts',
          textDark: false
        },
        {
          name: 'Overcast',
          url: 'https://overcast.fm/itunes1416953951/c3-church-vancouver',
          colour: '#fc7e0f',
          icon: 'IconOvercast',
          textDark: true
        },
        {
          name: 'Pocket Casts',
          url: 'https://pca.st/5ozW',
          colour: '#F74132',
          icon: 'IconPocketCasts',
          textDark: false
        },
        {
          name: 'Radio Public',
          url: 'https://radiopublic.com/c3-church-vancouver-Wa3lEb',
          colour: '#CE202B',
          icon: 'IconRadioPublic',
          textDark: false
        },
        {
          name: 'Spotify',
          url: 'https://open.spotify.com/show/0p2pmUwFkTwlili2BEZXSa',
          colour: '#1ED760',
          icon: 'IconSpotify',
          textDark: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$podcast-top-offset: 10rem;
$podcast-bottom-offset: 20rem;

#podcast {
  display: flex;
  flex-wrap: wrap;
  padding: ($podcast-top-offset + 3rem) 3rem $podcast-bottom-offset;
  margin: -$podcast-top-offset 0 10rem;
  background-image: url('~assets/img/podcast.jpg');
  background-size: cover;
  background-position: center center;
  clip-path: polygon(0 0, 0 80%, 50% 100%, 100% 80%, 100% 0);
  min-height: 1000px;

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

    @include media-breakpoint-up(md) {
      flex-basis: 60%;
      padding-right: 5%;
      margin-bottom: 0;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: 70%;
      padding-right: 15%;
    }

    iframe {
      max-width: 765px;

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
