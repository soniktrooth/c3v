(function ($){
  // Set up the background slideshow.
  var slideshow = new C3vSlideShow();
  slideshow.init();

  function C3vSlideShow() {
    var ss = this;
    this.i = 2;
    this.childDiv = 1;
    this.imageCount = 11;
    this.slideshowInterval = 8000;
    this.startTime = +new Date();
    this.runThroughCount = 2;
    this.endTime = this.runThroughCount * (this.startTime + (this.slideshowInterval * this.imageCount));
    this.interval;
    this.images = {
      1: {
        loaded: true,
        logoColor: 0,
      },
      2: {
        loaded: false,
        logoColor: 0,
      },
      3: {
        loaded: false,
        logoColor: 1,
      },
      4: {
        loaded: false,
        logoColor: 1,
      },
      5: {
        loaded: false,
        logoColor: 1,
      },
      6: {
        loaded: false,
        logoColor: 0,
      },
      7: {
        loaded: false,
        logoColor: 0,
      },
      8: {
        loaded: false,
        logoColor: 1,
      },
      9: {
        loaded: false,
        logoColor: 0,
      },
      10: {
        loaded: false,
        logoColor: 0,
      },
      11: {
        loaded: false,
        logoColor: 1,
      },
    };

    /**
     * Set a class on the logo so we can adjust the colour based on the bg 
     * image.
     * 
     * @param {integer} i 
     */
    this.setLogoColour = function (i) {
      var colour = this.images[i].logoColor;
      var prefix = 'logo-color--';
      var altColour = 1 - colour;
      $('main .logo')
        .removeClass(prefix + altColour)
        .addClass(prefix + colour);
    }

    /**
     * Return the path to an image based on the count. 
     */
    this.c3vBgSlideshowPreloadImage = function(i) {
      $('<img/>')
        .on('load', function (params) {
          ss.images[i].loaded = true;
        })
        .attr('src', ss.c3vBgSlideshowMakeUrl(i));
    };

    /**
     * Return the path to an image based on the count. 
     */
    this.c3vBgSlideshowMakeUrl = function(i) {
      return '/img/bg-' + i + '.jpg';
    };
    
    /**
     * Run the slideshow.
     */
    this.doSlideShow = function () {
      // Loop back to 1 when we hit 11.
      ss.i = ss.i < ss.imageCount ? ss.i : 1;

      // Let's check if this image has loaded yet.
      if (!ss.images[ss.i].loaded) {
        // This image hasn't loaded yet so let's go back to the start.
        ss.i = 1;
      }

      // Make the image url with the current i.
      var url = ss.c3vBgSlideshowMakeUrl(ss.i);

      // Toggle between the two child divs so we can cross fade between the
      // two.
      ss.childDiv = ss.childDiv == 1 ? 2 : 1;

      // Hit the DOM.
      $('.bg-fader > div:nth-child(' + ss.childDiv + ')')
        .css('backgroundImage', function () {
          ss.setLogoColour(ss.i);

          // Toggle classes for fading and set url for bg image.
          $(this)
            .siblings('div')
            .add($(this))
            .toggleClass('in out');

          return 'url(' + url + ')';
        });

      if (ss.endTime < +new Date()) {
        clearInterval(ss.interval);
      }

      // Increment the count.
      ss.i++;

      // Preload the next image if it isn't already.
      if (!ss.images[ss.i].loaded) {
        ss.c3vBgSlideshowPreloadImage(ss.i);
      }
    }

    this.init = function () {
      // Preload the second image so we get off to a good start.
      ss.c3vBgSlideshowPreloadImage(ss.i)

      ss.interval = setInterval(ss.doSlideShow, ss.slideshowInterval);
    };
  }

}(jQuery));
