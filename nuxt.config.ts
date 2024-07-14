export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css','@fortawesome/fontawesome-free/css/all.css'],
  build: {
      transpile: ['vuetify']
  },    modules: ['@pinia/nuxt'],
  
});