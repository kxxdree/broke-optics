import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["nuxt-svgo"],
  css: ["~/assets/css/main.css"],
  ssr: true,

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Broke Optics",
      meta: [
        { name: "description", content: "Broke Optics" },
        { name: "keywords", content: "Broke Optics" },
      ],
    },
  },
});
