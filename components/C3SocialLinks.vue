<template>
  <ul :class="['social-links', 'social-links--' + color]">
    <li
      v-for="social in socialMenu"
      :key="social.id"
    >
      <a
        :href="social.url"
        target="_blank"
      >
        <C3Icon :icon-name="social.icon" />
      </a>
    </li>
  </ul>
</template>

<script>
import C3Icon from '@/components/C3Icon.vue'

export default {
  components: {
    C3Icon
  },
  props: {
    color: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      socialMenu: this.$store.state.socialMenu
    }
  }
}
</script>

<style lang="scss">
.social-links {
  @extend .nav;
  flex-wrap: nowrap;

  &--black {
    svg {
      path {
        fill: $black;
      }
    }
  }

  li {
    @extend .nav-item;
    flex-grow: 1;
    text-align: center;

    a {
      @extend .nav-link;
      transition: all 0.15s ease-in;

      &:hover,
      &:focus,
      &:active {
        transform: scale(1.1);
        transform-origin: center center;
      }
    }
  }
}
</style>
