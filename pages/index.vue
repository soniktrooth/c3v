<template>
  <div class="page page--index">
    <C3Header />
    <C3Navbar />
    <FindUs />
  </div>
</template>

<script>
import C3Header from '@/components/C3Header.vue'
import C3Navbar from '@/components/C3Navbar.vue'
import FindUs from '@/components/FindUs.vue'

export default {
  components: {
    C3Header,
    FindUs,
    C3Navbar
  }
}
</script>

<style>
</style>
