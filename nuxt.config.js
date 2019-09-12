module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Intro to Vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=NTR'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:300,400&display=swap&subset=cyrillic'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Archivo+Narrow|Fjalla+One|Contrail+One'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap&subset=cyrillic'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bitter'}
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  css: ['assets/css/common.css'],
  plugins: [
    'plugins/directives.js'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

