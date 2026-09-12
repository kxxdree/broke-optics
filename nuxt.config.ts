import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["nuxt-svgo"],
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
});
