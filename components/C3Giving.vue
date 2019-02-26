<template>
  <section id="giving">
    <h2 class="sr-only">
      Giving
    </h2>
    <h3>Give online with</h3>
    <a
      href="https://get.tithe.ly"
      target="_blank"
    >
      <tithely-logo />
    </a>
    <div class="giving--content">
      <div class="giving--app">
        <h4>Get the app</h4>
        <div class="giving--app-links">
          <a
            href="https://itunes.apple.com/us/app/tithe-ly/id694740700?mt=8"
            target="_blank"
          >
            <app-store-logo />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ly.tithe.tithely&hl=en">
            <google-play-logo />
          </a>
        </div>
      </div>
      <div class="giving--or">
        or
      </div>
      <div
        class="giving--give-now"
        @click="toggleGiveOverlay"
      >
        <button @click="toggleGiveOverlay">
          <C3Icon icon-name="IconLock" />
          <span>Give Now</span>
          <C3Icon icon-name="IconChevronRight" />
        </button>
        <div :class="['giving--tithely-iframe', {'show': frameShow}]">
          <div class="giving--iframe-wrap">
            <C3Icon
              icon-name="IconClose"
              class="giving__close"
              @click="toggleGiveOverlay"
            />
            <iframe
              :src="frameSrc"
              frameborder="0"
            />
            <C3Icon
              icon-name="IconLoader"
              class="giving__loader"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="tithely-circle">
      <span /><span /><span />
    </div>
  </section>
</template>

<script>
import TithelyLogo from '@/assets/svg/logo--tithely.svg'
import AppStoreLogo from '@/assets/svg/logo--app-store.svg'
import GooglePlayLogo from '@/assets/svg/logo--google-play.svg'
import C3Icon from '@/components/C3Icon.vue'

export default {
  components: {
    TithelyLogo,
    AppStoreLogo,
    GooglePlayLogo,
    C3Icon
  },
  data() {
    return {
      frameShow: false,
      frameSrc: ''
    }
  },
  methods: {
    toggleGiveOverlay: function(event) {
      // Prevent a bubble up because we're also calling this from the button's
      // parent element for closing when the iframe is showing.
      event.stopPropagation()

      // Toggle class on frame.
      this.frameShow = !this.frameShow

      // Prevent the body from scrolling when the overlay is showing.
      document.getElementsByTagName('BODY')[0].classList.toggle('no-scroll')

      this.frameSrc = this.frameSrc
        ? ''
        : 'https://tithe.ly/give?c=234700?widget=1'
    }
  }
}
</script>

<style lang="scss">
#giving {
  position: relative;
  padding: 4rem 0 0;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 30%,
    rgba(233, 246, 240, 1) 100%
  );

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 415px;
  //   clip-path: polygon(0 0, 0 38%, 50% 100%, 100% 38%, 100% 0);
  //   transform: translateY(-495px);
  //   background-color: #addbcb;
  //   z-index: -1;
  // }

  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 415px;
  //   clip-path: polygon(0 0, 0 38%, 50% 100%, 100% 38%, 100% 0);
  //   transform: translateY(-415px);
  //   background-color: #e9f4ef;
  //   z-index: -2;
  // }

  h3 {
    padding: 3rem;
    font-size: 3rem;

    @include media-breakpoint-up(md) {
      font-size: 5rem;
    }
  }

  .giving--content {
    @extend %container;
    padding: 7rem 3rem 0;

    @include media-breakpoint-up(md) {
      display: flex;
      align-items: center;
    }

    > div {
      flex-grow: 1;
    }
  }

  .giving--app {
    @include media-breakpoint-up(md) {
      text-align: left;
    }

    h4 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 2px;

      @include media-breakpoint-up(md) {
        margin-bottom: 0.5rem;
      }
    }

    .giving--app-links {
      display: flex;
      justify-content: center;

      @include media-breakpoint-up(md) {
        justify-content: flex-start;
      }
    }

    a {
      display: flex;
      border-radius: 5px;
      transition: all 0.15s ease-out;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      &:hover,
      &:focus,
      &:active {
        box-shadow: $box-shadow--hover;
        svg {
          transform: scale(1.02);
        }
      }

      svg {
        transition: all 0.25s ease-out;
      }
    }
  }

  .giving--or {
    margin: 3rem 0;
    font-family: $font-family-serif;
    font-size: 2.25rem;
    font-style: italic;

    @include media-breakpoint-up(md) {
      margin: 0;
    }
  }

  .giving--give-now {
    display: flex;
    justify-content: center;

    @include media-breakpoint-up(md) {
      justify-content: flex-end;
    }

    button {
      @extend .btn;
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border: solid 3px $green--tithely;
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: uppercase;
      color: $green--tithely--dark;
      border-radius: 12px;

      @include media-breakpoint-up(sm) {
        font-size: 1.875rem;
      }

      &:hover,
      &:focus,
      &:active {
        background-color: $green--tithely;
        color: $white;

        svg {
          path {
            fill: $white;
          }
        }
      }

      svg {
        path {
          transition: 0.15s ease-in-out;
        }
      }

      span {
        margin: 0 1rem;
        line-height: 1;

        @include media-breakpoint-up(sm) {
          margin: 0 2rem;
        }
      }
    }
  }

  .tithely-circle {
    position: relative;
    padding-top: 20rem;
    overflow: hidden;

    span {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;

      &:nth-child(1) {
        width: 235px;
        height: 235px;
        background-color: $green--tithely;
        z-index: 3;
      }

      &:nth-child(2) {
        width: 385px;
        height: 385px;
        background-color: #addbcb;
        z-index: 2;
      }

      &:nth-child(3) {
        width: 537px;
        height: 537px;
        background-color: #e9f4ef;
        z-index: 1;
      }
    }
  }

  .giving--tithely-iframe {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -2;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    opacity: 0;
    transition: all 0.35s ease-in-out;
    pointer-events: none;

    @supports (backdrop-filter: blur(15px)) or
      (-webkit-backdrop-filter: blur(15px)) {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &.show {
      z-index: 999;
      opacity: 1;
      pointer-events: auto;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      .giving--iframe-wrap {
        transform: translate(-50%, -50%);
      }
    }

    .giving--iframe-wrap {
      position: absolute;
      width: calc(100% - 2rem);
      height: calc(100% - 4rem);
      top: calc(50% + 1rem);
      left: 50%;
      transition: all 0.35s ease-in-out;
      transform: translate(-50%, -100%);
      background-color: #fff;

      @include media-breakpoint-up(sm) {
        width: 50%;
        height: 80%;
        box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.4);
        max-width: 600px;
      }

      .giving__close {
        position: absolute;
        top: -1rem;
        right: 1rem;
        width: 1rem;
        height: 1rem;
        transform: translate(100%, -100%);
        cursor: pointer;

        @include media-breakpoint-up(sm) {
          right: -1rem;
        }

        path {
          fill: $white;

          @supports (backdrop-filter: blur(15px)) or
            (-webkit-backdrop-filter: blur(15px)) {
            fill: $black;
          }
        }

        &:hover,
        &:focus,
        &:active {
          transform: translate(100%, -100%) scale(1.1);

          path {
            fill: darken($white, 30);

            @supports (backdrop-filter: blur(15px)) or
              (-webkit-backdrop-filter: blur(15px)) {
              fill: $white;
            }
          }
        }
      }

      iframe {
        width: 100%;
        height: 100%;
      }

      .giving__loader {
        width: 5rem;
        height: 5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: opacity 0.35s ease-in-out;
        z-index: -1;
      }
    }
  }
}
</style>
