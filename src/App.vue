<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
    <Navbar />
    <main class="p-4">
      <RouterView />
    </main>
  </div>
</template>
