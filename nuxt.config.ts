// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-06-05',
  
  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],  // Modules
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],

  // Color mode configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'  },

  // PostCSS configuration for Tailwind CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // SSR configuration
  ssr: true,

  // App configuration
  app: {
    head: {
      title: 'Nuxt 3 Boilerplate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'A modern Nuxt 3 boilerplate with TypeScript, TailwindCSS, and Pinia' 
        }
      ],      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: '123',
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: '/api'
    }
  },

  // Components auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],  // Auto-import composables
  imports: {
    dirs: ['composables/**']
  },

  // Build configuration
  build: {
    transpile: ['@headlessui/vue']
  },

  // Nitro configuration for deployment
  nitro: {
    preset: 'vercel-edge'
  }
})
