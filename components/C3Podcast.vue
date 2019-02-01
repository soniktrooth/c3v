<template>
  <section id="podcast">
    <h2>
      C3 Vancouver Podcast
    </h2>
    <div class="podcast__iframes">
      <iframe
        src="https://anchor.fm/c3vancouver/embed/episodes/Faith-Beyond-Belief---Ps--Graham-Fletcher---14th-October-2018-e2dbk2/a-a5rnkp"
        height="102px"
        width="400px"
        frameborder="0"
        scrolling="no"
      />
      <iframe
        src="https://anchor.fm/c3vancouver/embed/episodes/Faith-Cheque---Ps--Graham-Fletcher---7th-October-2018-e2c38p/a-a5o4qj"
        height="102px"
        width="400px"
        frameborder="0"
        scrolling="no"
      />
    </div>
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
$podcast-top-offset: 10rem;
#podcast {
  padding: ($podcast-top-offset + 3rem) 3rem 0;
  margin-top: -$podcast-top-offset;
  background-image: url('~assets/img/podcast.jpg');
  background-size: cover;
  background-position: center center;

  min-height: 1000px;
  text-align: center;

  h2 {
    color: $white;
  }
}
</style>
