<template>
  <header id="header">
    <div class="header__logo-social">
      <C3logo />
      <h1><span>C3</span><span>Church</span><span>Vancouver</span></h1>
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
      <a href="#">
        <C3Icon icon-name="IconChevronDown" />
      </a>
    </div>
  </header>
</template>

<script>
import C3logo from '@/assets/svg/C3logo.svg'
import C3Icon from '@/components/C3Icon.vue'

export default {
  components: {
    C3logo,
    C3Icon
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
  min-height: 500px;
  background-color: var(--primary);
  background-image: url('~assets/img/forest.jpg');
  background-size: cover;
  color: $white;

  .header__logo-social {
    flex-grow: 1;
    text-align: center;
  }

  ul {
    @extend .nav;

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
}
</style>
