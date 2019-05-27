<template>
  <footer id="footer">
    <div>
      <div class="footer__header-social">
        <h2>
          C3 Church <span>Vancouver</span>
        </h2>
        <c3-social color="black" />
      </div>
      <div class="footer__address-phone">
        <c3-address />
        <div class="footer__phone-email">
          <span>
            ph. <a tel="+16042500111">
              604 250 0111
            </a>
          </span>
          <span>
            e.
            <span
              class="footer__email"
              data-user="ofni"
              data-website="ac.v3c"
              @click="emailClick"
            />
          </span>
        </div>
      </div>
      <div class="footer__info-hours">
        <div class="footer__more-info">
          <p style="display: none;">
            For information about the ‘CROSSTOWN facility
            please visit http://c3v.ca/crosstown
          </p>
        </div>
        <div class="footer__office-hours">
          Office hours vary. Please contact for an appointment.
        </div>
      </div>
      <p class="footer__copyright">
        © Copyright 2019. Christian City Church Vancouver
      </p>
    </div>
    <div v-lazy:background-image="imgUrl" class="footer__bg" />
  </footer>
</template>

<script>
import C3Social from '@/components/C3SocialLinks.vue'
import C3Address from '@/components/C3Address.vue'

export default {
  components: {
    C3Social,
    C3Address
  },
  data() {
    return {
      imgUrl: require('@/assets/img/footer-bg.jpg')
    }
  },
  methods: {
    emailClick() {
      window.location = 'mailto:info@c3v.ca'
    }
  }
}
</script>

<style lang="scss">
#footer {
  position: relative;
  padding: 4rem 2rem 0;
  font-family: $font-family-serif;
  font-style: italic;
  font-size: 1.125rem;

  @include media-breakpoint-up(sm) {
    padding-top: 8rem;
  }

  .footer__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: bottom;
    background-repeat: no-repeat;
    opacity: 0.25;
    z-index: -1;

    @include media-breakpoint-up(md) {
      background-size: contain;
    }
  }

  > div:not(.footer__bg) {
    @extend .container;
  }

  h2 {
    flex-basis: 70%;
    font-size: 2.3rem;
    font-style: normal;

    span {
      font-weight: 400;
    }
  }

  .footer__header-social {
    margin-bottom: 4rem;

    @include media-breakpoint-up(sm) {
      display: flex;
    }

    ul {
      margin-top: 4rem;
      @include media-breakpoint-up(sm) {
        margin-top: 0;
        flex-basis: 30%;
      }
    }
  }

  .footer__address-phone {
    @include media-breakpoint-up(sm) {
      display: flex;
    }

    .footer__phone-email {
      margin-bottom: 1rem;

      > span {
        display: block;
      }
    }
  }

  address {
    flex-basis: 70%;
    font-style: italic;

    span {
      display: block;
    }
  }

  .footer__info-hours {
    display: flex;
  }

  .footer__more-info {
    @include media-breakpoint-up(sm) {
      flex-basis: 70%;
    }
  }

  .footer__office-hours {
    @include media-breakpoint-up(sm) {
      flex-basis: 30%;
    }
  }

  .footer__copyright {
    margin: 0;
    padding: 20rem 0 1rem;
    font-size: 1rem;
    font-family: $font-family-sans-serif;
    font-style: normal;
    text-align: center;
  }

  .footer__email {
    &::before {
      content: attr(data-website) '\0040' attr(data-user);
      unicode-bidi: bidi-override;
      direction: rtl;
      color: $link-color;
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    }
  }
}
</style>
