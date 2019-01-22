<template>
  <section id="find-us">
    <h2 class="sr-only">
      Find us
    </h2>
    <p>
      <span>We meet every Sunday at 10:30am</span> on the corner of Broadway St & Ontario St,<br> Vancouver B.C.
    </p>
    <div class="find-us__map" />
    <div class="find-us__building" />
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.find-us__map {
  width: 100%;
  height: 0;
  padding-bottom: 51.33%;
  background-image: url('~assets/img/map.png');
  background-size: cover;
}

.find-us__building {
  width: 100%;
  height: 0;
  padding-bottom: 58.66%;
  background-image: url('~assets/img/building.png');
  background-size: cover;
}
</style>
