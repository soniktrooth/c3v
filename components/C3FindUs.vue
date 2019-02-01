<template>
  <section id="find-us">
    <h2 class="sr-only">
      Find us
    </h2>
    <div class="find-us__we-meet">
      <p>
        <span>We meet every Sunday at 10:30am</span> on the corner of Broadway St & Ontario St,<br> Vancouver B.C.
      </p>
    </div>
    <div class="find-us__map" />
    <div class="find-us__building" />
    <building-chevron />
  </section>
</template>

<script>
import BuildingChevron from '@/assets/svg/building-chevron.svg'

export default {
  components: {
    BuildingChevron
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
    background-image: url('~assets/img/map.png');
    background-size: cover;
    background-position: center;
  }

  .find-us__we-meet {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: radial-gradient(rgba(#bdca07, 0.8), rgba(#848b1d, 0.8));

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
    margin-bottom: 5%;
    position: relative;
    background-image: url('~assets/img/building.jpg');
    background-size: cover;
    @include media-breakpoint-up(sm) {
      margin-bottom: 6%;
    }

    @include media-breakpoint-up(md) {
      margin-bottom: 8%;
    }

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
  }
}
</style>
