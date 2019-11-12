import path from 'path'
const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        name: 'google-site-verification',
        content: 'WAoUuDgTAfBrSCnqTEbnrqPtLDldtTaCcBz1NyGK6M0'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      {
        src: '/js/bootstrap/util.js'
      },
      {
        src: '/js/bootstrap/collapse.js'
      },
      {
        src: '/js/scrollPosStyler.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#A6AF34'
  },

  /*
   ** Global CSS
   */
  // css: ['~assets/scss/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vue2-scrollspy',
      ssr: false
    },
    { src: '~/plugins/vue-lazyload', ssr: false },
    '~/plugins/vue-scroll-to',
    '~/plugins/check-mobile'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    'vue-scrollto/nuxt',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        css: false
      }
    ]
  ],
  optimizedImages: {
    optimizeImages: true
  },
  render: {
    // Set cache expire on static resources.
    static: {
      immutable: true,
      cacheControl: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  /*
   ** Build configuration
   */
  styleResources: {
    scss: require('./assets/scss/imports.js')
  },
  build: {
    /**
     * add external plugins
     */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content')
      })
    }
  }
}
