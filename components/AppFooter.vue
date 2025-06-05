<template>
  <footer class="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
              N3
            </div>
            <span class="font-bold text-gray-900 dark:text-white">
              Nuxt 3 Boilerplate
            </span>
          </div>
          <p class="mt-4 max-w-md text-sm text-gray-500 dark:text-gray-400">
            A modern, production-ready Nuxt 3 boilerplate with TypeScript, Tailwind CSS v4, 
            Pinia state management, and deployment optimization for Vercel.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul class="mt-4 space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/users" class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Users
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white">Resources</h3>
          <ul class="mt-4 space-y-2">
            <li>
              <a 
                href="https://nuxt.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Nuxt 3 Docs
              </a>
            </li>
            <li>
              <a 
                href="https://tailwindcss.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Tailwind CSS
              </a>
            </li>
            <li>
              <a 
                href="https://pinia.vuejs.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Pinia
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          © {{ currentYear }} Nuxt 3 Boilerplate. Built with ❤️ using Nuxt 3.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
