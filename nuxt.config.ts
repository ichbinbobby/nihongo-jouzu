// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/w3.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  compatibilityDate: "2024-07-04",
});