<template>
  <nav
    id="navbar"
    :class="['navbar', 'navbar-expand-md', {'affix': sticky}, {'menu-open': menuOpen}]"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#main-menu"
      aria-controls="main-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="menuToggle()"
    >
      <div :class="['burger', 'burger-slip', {'open': menuOpen}]">
        <div class="burger-lines" />
      </div>
    </button>
    <div
      id="main-menu"
      class="collapse navbar-collapse"
    >
      <div class="navbar-nav">
        <ul
          class="nav"
        >
          <li
            v-for="item in menu"
            :key="item.id"
            class="nav-item"
          >
            <a
              v-scroll-to="{
                el: item.url,
                offset: item.url === '#find-us' ? scrollToOffset * -1 : 10,
                onStart: scrollStart
              }"
              :href="item.url"
              :class="['nav-link', {active: (item.url === activeMenuItem)}]"
              @click="closeMenu()"
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
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      menu: this.$store.state.mainMenu,
      scrollY: 0,
      headerHeight: 0,
      navHeight: 0,
      menuOpen: 0,
      activeMenuItem: ''
    }
  },
  computed: {
    ...mapState({
      isMobile: state => state.mobile
    }),
    sticky() {
      return this.menuOpen || this.scrollY > this.headerHeight - this.navHeight
    },
    scrollToOffset() {
      return this.isMobile ? 48 : 80
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
    ...mapActions({
      bodyScrollToggle: 'index/bodyScrollToggle'
    }),
    handleScroll() {
      this.scrollY = window.scrollY
    },
    getHeaderHeight() {
      this.headerHeight = document.getElementById('header').clientHeight
    },
    getNavHeight() {
      this.navHeight = document.getElementById('navbar').clientHeight
    },
    menuToggle() {
      this.menuOpen = !this.menuOpen
      this.bodyScrollToggle()
    },
    closeMenu() {
      // Only on mobile.
      if (this.isMobile) {
        $('.navbar-toggler').trigger('click')
      }
    },
    scrollStart(e) {
      this.activeMenuItem = '#' + e.id
    }
  }
}
</script>

<style lang="scss">
#navbar {
  width: 100%;
  padding: 0;
  align-content: flex-start;
  position: absolute;
  bottom: 0;
  transition: all 0.35s ease-in-out;
  z-index: 10;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);

  &.affix {
    position: fixed;
    top: 0;
    bottom: auto;
    background-color: rgba(0, 0, 0, 0.6);

    @supports (backdrop-filter: blur(15px)) or
      (-webkit-backdrop-filter: blur(15px)) {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .navbar-toggler {
      height: 3rem;
    }
  }

  &.menu-open {
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    @supports (backdrop-filter: blur(15px)) or
      (-webkit-backdrop-filter: blur(15px)) {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .navbar-toggler {
      height: 5rem;
    }
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-toggler {
    height: 5rem;
    width: 5rem;
    padding: 0;
    position: relative;
    transition: all 0.35s ease-out;

    .burger {
      margin-left: 2rem;

      &.open {
        margin-left: 1rem;
      }
    }
  }

  ul {
    @extend .nav-fill;
    @extend %container;
    width: 100%;

    li {
      width: 100%;

      @include media-breakpoint-up(md) {
        width: auto;
      }

      a {
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.25rem;
        letter-spacing: 3px;
        color: $white;
        font-weight: 800;
        transition: background-color 0.35s ease-in-out;
        background-color: transparent;

        &.active {
          background-color: $white;
          color: $black;
        }
      }
    }
  }
}
</style>
