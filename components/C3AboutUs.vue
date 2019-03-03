<template>
  <section id="about-us">
    <h2>
      About Us
    </h2>
    <div class="about-us__pastors">
      <div>
        <div class="about-us__bio">
          <h3>
            Kat Walker, <br>Fletch & Patti
          </h3>
          <p>
            Katherine Walker has held ministry positions in C3 Churches for over 20 years, in Australia and Canada. She holds a degree in film and television production and has success in business. Kat is a powerful, insightful preacher with all the necessary creative ideas and leadership gifts to be Executive Pastor of C3 Church Vancouver.
          </p>
          <p>
            Graham & Patricia Fletcher established C3 Church Vancouver in 2001. They have been in full time ministry since 1971 as pastors and church planters in Australia and Canada.
          </p>
          <p>
            Patti—as she is affectionately known—is an ordained Senior Minister of C3 Global and the Senior Pastor of C3 Church, Vancouver. She is skilled in mentoring and the church loves her straight-forward preaching.
          </p>
          <p>
            Graham–known as ‘Fletch'–itinerates internationally across denominational lines in prophetic ministry and inspirational Bible teaching, and maintains a place in the ministry team and leadership of C3 Church Vancouver.
          </p>
        </div>
      </div>
    </div>
    <div class="about-us__our-mission">
      <h3>Our Mission</h3>
      <ul>
        <li>
          <div>Redeem</div>
          <div> the unchurched</div>
        </li>
        <li>
          <div>Retrieve</div>
          <div> the over-churched</div>
        </li>
        <li>
          <div>Revive</div>
          <div> the churched</div>
        </li>
        <li>
          <div>Release</div>
          <div> the Church</div>
        </li>
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

  h2 {
    font-size: 19vw;
    width: 108%;
    margin-left: -2.5%;
    transform: translateY(45%);

    @include media-breakpoint-up(xs) {
      font-size: 19.5vw;
    }

    @include media-breakpoint-up(md) {
      font-size: 20vw;
    }
  }

  .about-us__pastors {
    padding-top: 18rem;
    background-image: url('~assets/img/about-us.jpg');
    background-size: 200%;
    background-position: 90% 0;
    background-repeat: no-repeat;

    @include media-breakpoint-up(xs) {
      padding-top: 24rem;
    }

    @include media-breakpoint-up(sm) {
      background-position-y: calc(0% - 110px);
    }

    @include media-breakpoint-up(md) {
      padding-top: 29rem;
      background-position-y: calc(0% - 180px);
    }

    @include media-breakpoint-up(lg) {
      padding-top: 0;
      background-size: cover;
      background-position: 60% 0;
    }

    > div {
      @extend %container;
      padding: 0;
      background-color: #fff;

      @include media-breakpoint-up(lg) {
        padding: 3rem 0;
        background-color: transparent;
      }

      @include media-breakpoint-up(xl) {
        padding-left: 3rem;
      }

      .about-us__bio {
        @extend %font-family-serif;
        padding: 3rem;
        font-size: 1.25rem;

        @include media-breakpoint-up(lg) {
          max-width: 36rem;
          background-color: rgba($white, 0.7);
        }
      }
    }
  }

  .about-us__our-mission {
    position: relative;
    background-color: $yellow;

    h3 {
      position: relative;
      width: 106%;
      margin-left: -2.5%;
      font-size: 14vw;
      color: $white;
      z-index: 2;

      // Beware of impending breakpoint ugliness to get the heading to be
      // constantly a little bit bigger than the viewport.
      @include media-breakpoint-up(xs) {
        font-size: 14.2vw;
      }

      @media (min-width: 441px) {
        font-size: 14.3vw;
      }

      @media (min-width: 461px) {
        font-size: 14.5vw;
      }

      @media (min-width: 493px) {
        font-size: 14.6vw;
      }

      @include media-breakpoint-up(sm) {
        font-size: 14.7vw;
      }

      @media (min-width: 596px) {
        font-size: 14.8vw;
      }

      @media (min-width: 685px) {
        font-size: 14.9vw;
      }

      @include media-breakpoint-up(md) {
        font-size: 15vw;
      }

      @media (min-width: 898px) {
        font-size: 15.1vw;
      }

      @include media-breakpoint-up(lg) {
        font-size: 15.2vw;
      }

      @include media-breakpoint-up(xl) {
        font-size: 15.3vw;
      }
    }

    ul {
      padding: 0 0 15rem;
      margin: 3rem 0 0 2rem;
      font-family: $font-family-serif;
      font-size: 1.875rem;
      list-style: none;
      text-align: center;
      font-style: italic;

      @include media-breakpoint-up(sm) {
        font-size: 2.4rem;
        text-align: left;
      }

      @include media-breakpoint-up(md) {
        padding-bottom: 15rem;
        font-size: 2.575rem;
      }

      @include media-breakpoint-up(lg) {
        font-size: 2.875rem;
      }

      li {
        margin-bottom: 2rem;
        display: flex;

        @include media-breakpoint-up(sm) {
          margin-bottom: 1rem;
        }

        div {
          &:first-child {
            padding-right: 0.5rem;
            text-align: right;
            font-weight: 600;

            @include media-breakpoint-up(sm) {
              padding-right: 2rem;
              width: 50%;
            }
          }

          &:last-child {
            @include media-breakpoint-up(sm) {
              width: 50%;
            }
          }
        }
      }
    }

    .bg {
      @extend %font-family-serif;
      position: absolute;
      top: -10rem;
      left: -10rem;
      right: -10rem;
      bottom: -10rem;
      font-size: 15.75rem;
      font-style: italic;
      line-height: 0.5;
      transform: rotate(10deg);
      opacity: 0.02;
      z-index: 0;

      span {
        font-weight: 600;
      }
    }
  }
}
</style>
