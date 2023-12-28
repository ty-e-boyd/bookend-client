// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      bookendApi: process.env.BOOKEND_API
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/main.css', '@/assets/tailwind.css'],
  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')],
      theme: {
        extend: {
          colors: {}
        }
      }
    }
  }
});
