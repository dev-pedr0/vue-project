
<script setup lang="ts">
  import { useTransactionStore } from '@/stores/transactions';
  import { RouterLink } from 'vue-router'
  import CategoryPieChart from '../components/CategoryPieChart.vue'

  const transactionStore = useTransactionStore()

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
</script>

<template>
  <main class="bg-gray-200 h-lvh dark:bg-gray-800 text-gray-900 dark:text-white p-4 flex flex-col items-center justify-center">
    <h1 class="!text-3xl !font-bold !mb-10">Controle de Finanças</h1>
    <ul class="flex flex-col justify-center items-center gap-10">
      <li>
        <RouterLink to="/" class="link">Início</RouterLink>
      </li>
      <li>
        <RouterLink to="/transacoes" class="link">Transações</RouterLink>
      </li>
    </ul>

    <div class="!p-6 !mt-10">
      <h1 class="!text-3xl !font-bold !mb-6 text-center">Dashboard Financeiro</h1>

      <div class="!grid !grid-cols-1 md:!grid-cols-3 !gap-6">
        <div class="!bg-white dark:!bg-gray-700 !p-4 !rounded !shadow !text-center">
          <h2 class="!text-lg !font-semibold !mb-2">Total Disponível</h2>
          <p class="!text-2xl !font-bold !text-green-600">
            {{ formatCurrency(transactionStore.saldoTotal) }}
          </p>
        </div>

        <div class="!bg-white dark:!bg-gray-700 !p-4 !rounded !shadow !text-center">
          <h2 class="!text-lg !font-semibold !mb-2">Entradas</h2>
          <p class="!text-2xl !font-bold !text-green-500">
            {{ formatCurrency(transactionStore.entradas) }}
          </p>
        </div>

        <div class="!bg-white dark:!bg-gray-700 !p-4 !rounded !shadow !text-center">
          <h2 class="!text-lg !font-semibold !mb-2">Saídas</h2>
          <p class="!text-2xl !font-bold !text-red-500">
            {{ formatCurrency(transactionStore.saidas) }}
          </p>
        </div>
      </div>
    </div>

    <div class="!p-6 !mt-10">
      <CategoryPieChart />
    </div>
  </main>  
</template>


<style>
  .link:hover {
    text-decoration: underline;
  }
</style>