import path from 'path'
// const md = require('markdown-it')
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
    color: '#fff'
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
    // '@nuxtjs/markdownit',
    'frontmatter-markdown-loader',
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          {
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            include: path.resolve(__dirname, 'contents')
          }
        )
      }
    }
  }
}
