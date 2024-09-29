// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@crazydos/nuxt-msw', '@nuxt/ui'],
  devtools: { enabled: true }
});