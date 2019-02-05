<template>
  <header id="header">
    <div class="header__logo-social">
      <c3-logo />
      <h1>C3 Church Vancouver</h1>
      <div class="header__social">
        <c3-social />
      </div>
      <a
        href="#find-us"
        class="header__down-link"
      >
        <C3Icon icon-name="IconChevronDown" />
      </a>
    </div>
    <c3-navbar />
  </header>
</template>

<script>
import C3Logo from '@/assets/svg/C3Logo.svg'
import C3Icon from '@/components/C3Icon.vue'
import C3Navbar from '@/components/C3Navbar.vue'
import C3Social from '@/components/C3SocialLinks.vue'

export default {
  components: {
    C3Logo,
    C3Icon,
    C3Navbar,
    C3Social
  },

  data() {
    return {
      socialMenu: this.$store.state.socialMenu
    }
  }
}
</script>

<style lang="scss">
header {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  min-height: 700px;
  position: relative;
  background-color: var(--primary);
  background-image: url('~assets/img/forest.jpg');
  background-size: cover;
  background-position: center;
  color: $white;

  .header__logo-social {
    width: 100%;
    flex-grow: 1;
    text-align: center;
    padding-top: 25%;

    @include media-breakpoint-up(sm) {
      padding-top: 20%;
    }

    @include media-breakpoint-up(md) {
      padding-top: 10%;
    }

    > svg {
      margin-bottom: 5rem;
      width: 80%;
      max-width: 380px;
    }

    h1 {
      @extend .sr-only;
    }
  }

  .social-links {
    max-width: 200px;
    margin: 0 auto 3rem;
  }

  .header__down-link {
    display: block;
    padding-bottom: calc(5rem + 25%);

    @include media-breakpoint-up(sm) {
      padding-bottom: calc(5rem + 20%);
    }

    @include media-breakpoint-up(md) {
      padding-bottom: calc(5rem + 10%);
    }
  }
}
</style>
