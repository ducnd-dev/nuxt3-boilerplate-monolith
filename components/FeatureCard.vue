<template>
  <div class="card group hover:shadow-lg transition-all duration-300">
    <div class="card-body">
      <div class="flex items-center space-x-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors dark:bg-primary-900 dark:text-primary-300">
          <Icon :name="icon" class="h-6 w-6" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h3>
      </div>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>
