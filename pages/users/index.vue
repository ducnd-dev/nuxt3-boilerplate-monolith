<template>
  <div class="max-w-2xl mx-auto py-16">
    <div class="card">
      <div class="card-body">
        <h1 class="text-2xl font-bold mb-4">Users List</h1>
        <ul class="space-y-2">
          <li v-for="user in users" :key="user.id">
            <NuxtLink :to="`/users/${user.id}`" class="btn btn-outline w-full text-left">
              {{ user.name }} <span class="ml-2 text-xs text-gray-400">({{ user.id }})</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]
</script>
