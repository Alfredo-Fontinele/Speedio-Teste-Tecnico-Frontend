// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      title: "Anotation",
    },
  },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["Toast", "Button"],
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-green/theme.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-primevue"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
