<template>
  <nav
    id="navbar"
    :class="['navbar', 'navbar-expand-md', {'affix': sticky}]"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#main-menu"
      aria-controls="main-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <IconHamburger class="navbar-toggler-icon" />
    </button>
    <div
      id="main-menu"
      class="collapse navbar-collapse"
    >
      <div class="navbar-nav">
        <ul
          v-scroll-spy-active
          v-scroll-spy-link
          class="nav"
        >
          <li
            v-for="item in menu"
            :key="item.id"
            class="nav-item"
          >
            <a
              :href="item.url"
              class="nav-link"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IconHamburger from '@/assets/svg/icon--hamburger.svg'

export default {
  components: {
    IconHamburger
  },
  data() {
    return {
      menu: this.$store.state.mainMenu,
      scrollY: 0,
      headerHeight: 0,
      navHeight: 0
    }
  },
  computed: {
    sticky() {
      return this.scrollY > this.headerHeight - this.navHeight
    }
  },
  mounted() {
    this.getHeaderHeight()
    this.getNavHeight()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
    getHeaderHeight() {
      this.headerHeight = document.getElementById('header').clientHeight
    },
    getNavHeight() {
      this.navHeight = document.getElementById('navbar').clientHeight
    }
  }
}
</script>

<style lang="scss">
#navbar {
  width: 100%;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-100%);
  transition: background-color 0.25s ease-in-out;
  z-index: 2;

  &.affix {
    position: fixed;
    top: 0;
    transform: translateY(0);
    background-color: rgba(0, 0, 0, 0.2);
  }

  .navbar-nav {
    width: 100%;
  }

  ul {
    @extend .nav-fill;
    width: 100%;

    li {
      &.active {
        a {
          background-color: $white;
          color: $black;
        }
      }

      a {
        text-transform: uppercase;
        color: $white;
      }
    }
  }
}
</style>
