<template>
  <section id="corona">
    <h2>
      Live Stream Service
    </h2>
    <p>Due to circumstances around the COVID-19 outbreak we have moved to online services for the time being. <br><a :href="url" class="btn btn-primary" target="_blank">Click here to view the Facebook Live stream.</a></p>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: 'https://www.facebook.com/c3Vancouver/live_videos/'
    }
  }
}
</script>

<style lang="scss">
#corona {
  padding: 2rem;
  background-color: $black;
  color: $white;
  text-align: center;

  p {
    font-size: $font-size-lg;
  }

  a {
    margin-top: 2rem;
  }
}
</style>
