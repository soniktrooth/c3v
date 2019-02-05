<template>
  <section id="about-us">
    <h2 class="sr-only">
      About Us
    </h2>
    <div class="about-us__pastors">
      <div>
        <h3>
          Kat Walker, <br>Fletch & Patti
        </h3>
        <p>
          Katherine is wonderful person that needs to be talked about in this section in some detail etc.
        </p>
        <p>
          Graham & Patricia Fletcher established C3 Church Vancouver in 2001. They have been in full time ministry since 1971 as pastors and church planters in Australia and Canada.
        </p>
        <p>
          Patti—as she is affectionately known—is an ordained Senior Minister of C3 Global.
        </p>
        <p>
          Graham itinerates abroad in prophetic & Bible teaching and is known as ‘Fletch' amongst the churches he ministers at.
        </p>
      </div>
    </div>
    <div class="about-us__our-mission">
      <h3>Our Mission</h3>
      <ul>
        <li><span>Redeem</span> the unchurched</li>
        <li><span>Retrieve</span> the over-churched</li>
        <li><span>Revive</span> the churched</li>
        <li><span>Release</span> the Church</li>
      </ul>
      <div
        class="bg"
        aria-hidden="true"
      >
        <span>Redeem</span> the unchurched <span>Retrieve</span> the over-churched <span>Revive</span> the churched <span>Release</span> the Church <span>Redeem</span> the unchurched <span>Retrieve</span> the over-churched <span>Revive</span> the churched <span>Release</span> the Church
      </div>
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
#about-us {
  overflow: hidden;

  .about-us__pastors {
    padding-top: 25rem;
    background-image: url('~assets/img/about-us.jpg');
    background-size: 200%;
    background-position: top right;
    background-repeat: no-repeat;

    @include media-breakpoint-up(md) {
      padding-top: 0;
      background-size: cover;
      background-position: center right;
    }

    > div {
      @extend %container;
      padding: 3rem;
      background-color: #fff;

      @include media-breakpoint-up(md) {
        background-color: transparent;
      }

      p {
        max-width: 30rem;
        font-size: 1.25rem;
        font-family: $font-family-serif;
      }
    }
  }

  .about-us__our-mission {
    height: 40rem;
    position: relative;
    background-color: $yellow;
    // shape-outside: polygon(0 0, 0 80%, 50% 100%, 80% 100%, 100% 0);
    clip-path: polygon(0 0, 0 80%, 50% 100%, 100% 80%, 100% 0);

    @include media-breakpoint-up(lg) {
      height: 45rem;
    }

    @include media-breakpoint-up(xl) {
      height: 50rem;
    }

    h3 {
      color: $white;
      width: 105%;
      margin-left: -2.5%;
      font-size: 14.2vw;
      @include media-breakpoint-up(sm) {
        font-size: 14.7vw;
      }

      @include media-breakpoint-up(md) {
        font-size: 15vw;
      }

      @include media-breakpoint-up(lg) {
        font-size: 15.2vw;
      }

      @include media-breakpoint-up(xl) {
        font-size: 15.3vw;
      }
    }

    ul {
      padding: 0;
      margin: 5rem 0 0;
      font-family: $font-family-serif;
      font-size: 1.875rem;
      list-style: none;
      text-align: center;
      font-style: italic;

      @include media-breakpoint-up(sm) {
        width: 75%;
        margin-top: 3rem;
        font-size: 2.575rem;
        text-align: right;
      }

      @include media-breakpoint-up(md) {
        width: 50%;
      }

      @include media-breakpoint-up(lg) {
        width: 50%;
        font-size: 2.875rem;
      }

      li {
        margin-bottom: 2rem;

        @include media-breakpoint-up(sm) {
          margin-bottom: 1rem;
        }

        span {
          font-weight: 600;
        }
      }
    }

    .bg {
      position: absolute;
      top: -10rem;
      left: -10rem;
      right: -10rem;
      bottom: -10rem;
      font-size: 15.75rem;
      font-style: italic;
      font-family: $font-family-serif;
      line-height: 0.5;
      transform: rotate(10deg);
      opacity: 0.02;
      z-index: -1;

      span {
        font-weight: 600;
      }
    }
  }
}
</style>
