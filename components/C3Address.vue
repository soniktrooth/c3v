<template>
  <address
    itemprop="address"
    itemscope
    itemtype="http://schema.org/PostalAddress"
  >
    <span itemprop="streetAddress">
      {{ address.street }}
    </span>
    <span itemprop="addressLocality">
      {{ address.locality }}
    </span>
    <span itemprop="addressRegion">
      {{ address.region }}
    </span>
    <span itemprop="postalCode">
      {{ address.postcode }}
    </span>
  </address>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: function() {
        return this.$store.state.c3vAddress
      }
    }
  }
}
</script>

<style lang="scss">
</style>
