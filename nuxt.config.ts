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
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Broke Optics. Премиальная оптика нового формата. Изготавливаем линзы по вашему рецепту для любых оправ без переплат",
        },
        {
          name: "keywords",
          content: "Broke Optics, оптика, нового формата, линзы, по рецепту, любых оправ, без переплат",
        },
        { name: "author", content: 'ОБУ "ИТЦ"' },
      ],
    },
  },
});
