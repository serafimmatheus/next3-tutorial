// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  components: [{ path: '@/shared/icons', prefix: 'Icon' }, '@/components'],
  devtools: { enabled: true },

  alias: {
    css: '/<rootDir>/assets/css',
  },

  css: ['@/assets/css/globals.css'],
  modules: ['@nuxt/ui'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Meta description',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
