<script setup lang="ts">
import { ref } from 'vue';
import TransactionForm from "../components/TransactionForm.vue"
import TransactionsList from "../components/TransactionList.vue"

const mostrarFormulario = ref(false)
</script>

<template>
  <div class="!p-6 !space-y-4">
    <h1 class="!text-2xl !font-bold">Transações</h1>

    <button
      @click="mostrarFormulario = !mostrarFormulario"
      class="!bg-blue-600 !text-whitew !px-4 !py-2 !rounded !cursor-pointer hover:!bg-blue-700"
    >
      {{ mostrarFormulario ? 'Fechar Fomulário' : 'Nova transação' }}
    </button>

    <TransactionForm v-if="mostrarFormulario"/>

    <div class="mt-6">
      <TransactionsList />
    </div>

  </div>
</template>