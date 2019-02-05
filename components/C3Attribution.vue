<template>
  <section id="attribution">
    <div>
      <div>
        <c3-logo-small />
      </div>
      <div>
        <p>
          C3 Church Vancouver is recognised as a Full Member Church of C3 Church Global.
        </p>
        <a href="http://c3churchglobal.com">
          http://c3churchglobal.com
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import C3LogoSmall from '@/assets/svg/C3LogoSmall.svg'

export default {
  components: {
    C3LogoSmall
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#attribution {
  font-family: $font-family-serif;
  font-style: italic;
  background-color: $black;
  color: $white;
  letter-spacing: 0.5px;

  > div {
    @extend %container;
    display: flex;
    padding: 4rem 3rem;
  }

  svg {
    width: 3rem;
    margin-right: 3rem;
  }

  a {
    font-weight: 600;
    color: $white;
  }
}
</style>
