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
})