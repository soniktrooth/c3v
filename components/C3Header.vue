<template>
  <header id="header">
    <div class="header__logo-social">
      <C3logo />
      <h1>C3 Church Vancouver</h1>
      <ul class="header__social">
        <li
          v-for="social in socialMenu"
          :key="social.id"
        >
          <a :href="social.url">
            <C3Icon :icon-name="social.icon" />
          </a>
        </li>
      </ul>
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
import C3logo from '@/assets/svg/C3logo.svg'
import C3Icon from '@/components/C3Icon.vue'
import C3Navbar from '@/components/C3Navbar.vue'

export default {
  components: {
    C3logo,
    C3Icon,
    C3Navbar
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

  .header__social {
    @extend .nav;
    flex-wrap: nowrap;
    max-width: 200px;
    margin: 0 auto 3rem;

    li {
      @extend .nav-item;

      a {
        @extend .nav-link;
      }
    }
  }

  .header__social {
    li {
      flex-grow: 1;
    }
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
