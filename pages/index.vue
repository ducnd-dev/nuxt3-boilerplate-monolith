<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Welcome to
            <span class="text-primary-600">Nuxt 3</span>
            Boilerplate
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A production-ready starter template with TypeScript, Tailwind CSS v4, 
            Pinia state management, and modern development tools.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/about" class="btn-primary btn-lg">
              Get Started
            </NuxtLink>
            <NuxtLink to="/users" class="btn-outline btn-lg">
              View Demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16 dark:bg-gray-800 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to build modern web apps
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            This boilerplate includes all the essential tools and configurations for rapid development.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-16 dark:bg-gray-900 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built for Performance
          </h2>
          <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              v-for="stat in stats"
              :key="stat.label"
              :value="stat.value"
              :label="stat.label"
              :description="stat.description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-600">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start building?
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-100">
            Clone this repository and start building your next project with this modern Nuxt 3 setup.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 text-base font-medium"
            >
              View on GitHub
            </a>
            <NuxtLink 
              to="/users" 
              class="btn bg-primary-500 text-white hover:bg-primary-400 px-6 py-3 text-base font-medium"
            >
              Live Demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Home - Nuxt 3 Boilerplate',
  meta: [
    { name: 'description', content: 'A modern Nuxt 3 boilerplate with TypeScript, Tailwind CSS v3, and Pinia state management.' },
    { property: 'og:title', content: 'Nuxt 3 Boilerplate' },
    { property: 'og:description', content: 'A modern Nuxt 3 boilerplate with TypeScript, Tailwind CSS v3, and Pinia state management.' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Features data
const features = [
  {
    title: 'TypeScript',
    description: 'Full TypeScript support with strict type checking and IntelliSense.',
    icon: 'heroicons:code-bracket'
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Latest Tailwind CSS with improved performance and developer experience.',
    icon: 'heroicons:paint-brush'
  },
  {
    title: 'Pinia State Management',
    description: 'Modern state management with excellent TypeScript integration.',
    icon: 'heroicons:cube'
  },
  {
    title: 'SSR Ready',
    description: 'Server-side rendering configured for optimal performance and SEO.',
    icon: 'heroicons:server'
  },
  {
    title: 'ESLint & Prettier',
    description: 'Code quality tools configured with sensible defaults.',
    icon: 'heroicons:check-circle'
  },
  {
    title: 'Vercel Deployment',
    description: 'Optimized for deployment on Vercel with zero configuration.',
    icon: 'heroicons:cloud'
  }
]

// Stats data
const stats = [
  {
    value: '< 1s',
    label: 'Time to Interactive',
    description: 'Lightning fast loading times'
  },
  {
    value: '100%',
    label: 'TypeScript',
    description: 'Fully typed codebase'
  },
  {
    value: 'SSR',
    label: 'Rendering Mode',
    description: 'Server-side rendering'
  },
  {
    value: 'A+',
    label: 'Performance Score',
    description: 'Optimized for speed'
  }
]
</script>
