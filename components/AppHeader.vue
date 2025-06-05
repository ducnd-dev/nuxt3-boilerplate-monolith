<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
              N3
            </div>
            <span class="hidden font-bold text-gray-900 dark:text-white sm:block">
              Nuxt 3 Boilerplate
            </span>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden space-x-8 md:flex">
          <NuxtLink
            to="/"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/users"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path.startsWith('/users') }"
          >
            Users
          </NuxtLink>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center space-x-4">          <!-- Theme Toggle -->
          <button
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle theme"
            @click="toggleTheme"
          >
            <Icon
              :name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
              class="h-5 w-5"
            />
          </button>

          <!-- Mobile menu button -->
          <button
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white md:hidden"
            @click="toggleMobileMenu"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isMobileMenuOpen"
        class="border-t border-gray-200 pb-3 pt-4 dark:border-gray-700 md:hidden"
      >
        <div class="space-y-1">
          <NuxtLink
            to="/"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === '/about' }"
            @click="closeMobileMenu"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/users"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path.startsWith('/users') }"
            @click="closeMobileMenu"
          >
            Users
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Theme state
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>
