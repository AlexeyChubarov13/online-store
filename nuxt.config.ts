// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/icon', '@nuxt/image'],
  devtools: { enabled: true }, 

  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/reset.sass',
    '~/assets/styles/variables.sass'
  ],

  devServer: {
    host: '127.0.0.1',
    port: 3000
  },

  icon: {
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons'
      }
    ]
  },
})