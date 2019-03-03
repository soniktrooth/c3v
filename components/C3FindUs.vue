<template>
  <section id="find-us">
    <h2 class="sr-only">
      Find us
    </h2>
    <div class="find-us__we-meet">
      <p>
        <span>We meet every Sunday at 10:30am</span> at 2520 Ontario St,<br> Vancouver B.C.
      </p>
    </div>
    <div class="find-us__map">
      <find-us-here-sm class="find-us__arrow find-us__arrow--sm" />
      <find-us-here-lg class="find-us__arrow find-us__arrow--lg" />
    </div>
    <div class="find-us__building">
      <!-- <entrance-corner class="find-us__entrance-corner" /> -->
    </div>
    <div class="find-us__chevrons" />
  </section>
</template>

<script>
import FindUsHereSm from '@/assets/svg/find-us-here--sm.svg'
import FindUsHereLg from '@/assets/svg/find-us-here--lg.svg'
// import EntranceCorner from '@/assets/svg/entrance-corner.svg'

export default {
  components: {
    FindUsHereSm,
    FindUsHereLg
    // EntranceCorner
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#find-us {
  position: relative;

  .find-us__map {
    width: 100%;
    height: 37.5rem;
    padding-bottom: 51.33%;
    position: relative;
    background-image: url('~assets/img/map.png');
    background-size: cover;
    background-position: center;

    @include media-breakpoint-up(xl) {
      padding-bottom: 0;
      background-size: contain;
    }

    .find-us__arrow {
      position: absolute;
      top: calc(50% + 131px);
      left: calc(50% - 156px);

      &.find-us__arrow--sm {
        @include media-breakpoint-up(md) {
          display: none;
        }
      }

      &.find-us__arrow--lg {
        top: calc(50% + 44px);
        left: calc(50% - 315px);

        display: none;

        @include media-breakpoint-up(md) {
          display: block;
        }
      }
    }
  }

  .find-us__we-meet {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: radial-gradient(rgba(#bdca07, 0.8), rgba(#848b1d, 0.8));
    z-index: 1;

    p {
      @extend %container;
      padding: 4rem 1rem;
      text-align: center;
      font-size: 1.875rem;
      font-family: $font-family-serif;
      font-style: italic;
      letter-spacing: 3px;

      span {
        @extend %h3;
        display: block;
        padding-bottom: 1rem;
        font-style: normal;
      }
    }
  }

  .find-us__building {
    width: 100%;
    height: 0;
    padding-bottom: 63.5%;
    position: relative;
    background-image: url('~assets/img/building-2.jpg');
    background-size: cover;
    background-position: center bottom;
    clip-path: polygon(0 0, 0 53%, 50% 100%, 100% 53%, 100% 0);

    & + svg {
      position: absolute;
      bottom: -5%;

      @include media-breakpoint-up(sm) {
        bottom: -6%;
      }

      @include media-breakpoint-up(md) {
        bottom: -8%;
      }
    }

    .find-us__entrance-corner {
      height: 0;
      padding-bottom: 98%;
      position: absolute;
      top: 30px;
      right: 30px;
    }
  }

  .find-us__chevrons {
    height: 0;
    padding-bottom: 63.5%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: #fafafa;
    background-image: url('~assets/img/bg-11.jpg');
    background-size: contain;
    background-attachment: scroll;
    background-position: bottom;
    transform: translateY(55%);
    clip-path: polygon(0 0, 0 53%, 50% 100%, 100% 53%, 100% 0);

    @include media-breakpoint-up(sm) {
      background-size: cover;
      background-attachment: fixed;
    }

    @include media-breakpoint-up(md) {
      transform: translateY(35%);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0;
      padding-bottom: 63.5%;
      clip-path: polygon(0 0, 0 53%, 50% 100%, 100% 53%, 100% 0);
      background-attachment: fixed;
      background-repeat: repeat;
    }

    &::before {
      background-color: #efefef;
      background-image: url('~assets/img/bg-5.jpg');
      background-size: contain;
      z-index: 0;
      transform: translateY(-34%);

      @include media-breakpoint-up(md) {
        transform: translateY(-23%);
      }
    }

    &::after {
      background-color: #fafafa;
      background-image: url('~assets/img/forest.jpg');
      background-size: contain;
      z-index: -1;
      transform: translateY(-17%);

      @include media-breakpoint-up(md) {
        transform: translateY(-12%);
      }
    }
  }
}
</style>
