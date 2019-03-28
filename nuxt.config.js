import { readFiles } from './api'
import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  generate: {
    fallback: true,
    routes: function () {
      return readFiles('./content/projects')
        .then(files => {
          console.log('files', files)
          return files.map(({ content, filename }) => {
            console.log('gen', filename)
            return {
              route: `/projects/${filename}`,
              payload: { ...content, name: filename, slug: filename }
            }
          })
        })
        .catch(error => console.error(error))
    }
  },

  // hooks: {
  //   build: {
  //     async before (builder) {
  //       try {
  //         files = await readFiles('./content/projects')
  //         console.log('FILES', files)
  //       } catch (error) {
  //         console.error('before', error)
  //       }
  //     }
  //   }
  // },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/base',
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-netlify-cms'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
      config.module.rules.push({
        test: /\.md$/,
        loaders: 'frontmatter-markdown-loader'
      })
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
