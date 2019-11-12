<template>
  <section id="connected">
    <div>
      <h2>Stay Connected</h2>
      <h3>
        Want to stay in touch? <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKJ_ME6rmfUDDYFehkDoUKaDgnORcAQSfjpmWDbUZAHIEKBw/viewform" target="_blank">
          Join our mailing list.
        </a>
      </h3>
      <p>
        If you already attend our church you can submit your contact details <a href="http://connected.c3v.ca" target="_blank">
          here
        </a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'C3Connected'
}
</script>

<style lang="scss" scoped>
$connected-link: lighten($yellow, 45);
#connected {
  padding: 5rem 0;
  text-align: center;
  background-color: $yellow;
  background-image: radial-gradient($yellow, darken($yellow, 5));
  > div {
    @extend %container;
    padding: 0 2rem;
  }
}

h2 {
  margin-bottom: 2rem;

  @include media-breakpoint-up(md) {
    font-size: 5rem;
  }
}

h3 {
  a {
    display: inline-block;
    font-size: 1.2rem;

    @include media-breakpoint-up(md) {
      display: inline;
      font-size: 1.5rem;
    }
  }
}

a {
  color: $connected-link;
  border-bottom: 1px solid $connected-link;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    border-bottom: 1px solid $orange;
  }
}

p {
  margin-top: 2rem;
  font-size: 1.2rem;
}
</style>
