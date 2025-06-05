<template>
  <div class="max-w-2xl mx-auto py-16">
    <div class="card">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-4">User: {{ userId }}</h1>
        <p class="text-gray-600 dark:text-gray-300">This is a sample dynamic route page for user <span class="font-mono">[id]</span>.</p>
        <NuxtLink to="/users" class="btn btn-secondary mt-6">Back to Users</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const userId = computed(() => route.params.id)
</script>
