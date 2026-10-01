// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/icon', '@nuxt/image'],
  devtools: { enabled: true }, 



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
      },

      {
        prefix: 'sidebar',
        dir: './app/assets/icons/icons-sidebar'
      }
    ]
  },
})