<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ error.statusMessage || 'Something went wrong.' }}
        </p>
      </div>
      <div class="mt-8 space-y-6">        <button 
          class="btn-primary w-full"
          @click="handleError"
        >
          {{ error.statusCode === 404 ? 'Go home' : 'Try again' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage?: string
  }
}

const props = defineProps<Props>()

const handleError = async () => {
  if (props.error.statusCode === 404) {
    await navigateTo('/')
  } else {
    await clearError({ redirect: '/' })
  }
}
</script>
