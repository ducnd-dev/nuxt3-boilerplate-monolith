<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Global app configuration
useSeoMeta({
  titleTemplate: '%s - Nuxt 3 Boilerplate',
  description: 'A modern Nuxt 3 boilerplate with TypeScript, Tailwind CSS v4, and Pinia state management.',
  ogDescription: 'A modern Nuxt 3 boilerplate with TypeScript, Tailwind CSS v4, and Pinia state management.',
  ogTitle: 'Nuxt 3 Boilerplate',
  twitterCard: 'summary_large_image',
})
</script>
