<template>
  <div class="card group hover:shadow-lg transition-all duration-300">
    <div class="card-body text-center">
      <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">
        {{ value }}
      </div>
      <div class="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
        {{ label }}
      </div>
      <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string
  label: string
  description: string
}

defineProps<Props>()
</script>
