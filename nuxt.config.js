import path from 'path'
const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

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
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: '/js/jquery.min.js'
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
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        css: false
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    styleResources: {
      scss: require('./assets/scss/imports.js')
    },
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
