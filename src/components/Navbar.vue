<template>
  <nav class="!bg-white dark:!bg-gray-900 !text-gray-800 dark:!text-white !px-6 !py-4 !shadow-md">
    <div class="!max-w-5xl !mx-auto flex justify-between items-center">
      <h1 class="text-xl !font-bold">💰 Meu Financeiro</h1>
      <ul class="flex space-x-6 font-medium gap-5">
        <li>
          <RouterLink
            to="/"
            class="nav-link"
            :class="{ 'text-green-600 font-semibold underline': $route.path === '/' }"
          >
            Início
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/transacoes"
            class="nav-link"
            :class="{ 'text-green-600 font-semibold underline': $route.path === '/transacoes' }"
          >
            Transações
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router'
    const $route = useRoute()
</script>

<style>
  .nav-link:hover {
    color: rgb(0, 160, 0);
  }
</style>