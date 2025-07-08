
<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="bg-gray-200 h-lvh dark:bg-gray-800 text-gray-900 dark:text-white p-4 flex flex-col items-center justify-center">
    <h1 class="!text-3xl !mb-10">Controle de Finanças</h1>
    <ul class="flex flex-col justify-center items-center gap-10">
      <li>
        <RouterLink to="/" class="link">Início</RouterLink>
      </li>
      <li>
        <RouterLink to="/transacoes" class="link">Transações</RouterLink>
      </li>
    </ul>
  </main>
</template>


<style>
  .link:hover {
    text-decoration: underline;
  }
</style>