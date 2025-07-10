<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionStore } from '@/stores/transactions';

const store = useTransactionStore();

const type = ref<"entrada" | "saida">("entrada");
const amount = ref<number | null>(null);
const category = ref("");
const description = ref("");
const date = ref("");

const handleSubmit = () => {
  if (!amount.value || !category.value || !description.value || !date.value) {
    alert('Preencha todos os campos');
    return;
  }

  store.adicionarTransacao({
    id: Date.now(),
    type: type.value,
    amount: amount.value,
    category: category.value,
    description: description.value,
    date: date.value,
  });

  type.value = 'entrada';
  amount.value = null;
  category.value = '';
  description.value = '';
  date.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="!bg-white dark:!bg-gray-900 !p-6 !rounded-xl !shadow-md !space-y-4">
    <h2 class="!text-xl !font-semibold !mb-4">Nova Transação</h2>

    <div class="!flex !space-x-4">
      <label class="!flex !items-center !space-x-2">
        <input type="radio" value="entrada" v-model="type" class="!accent-green-500" />
        <span>Entrada</span>
      </label>
      <label class="!flex !items-center !space-x-2">
        <input type="radio" value="saída" v-model="type" class="!accent-red-500" />
        <span>Saída</span>
      </label>
    </div>

    <div>
      <label class="!block !text-sm !mb-1">Valor (R$)</label>
      <input type="number" v-model="amount" class="!w-full !p-2 !rounded !border dark:!bg-gray-700 dark:!text-white" />
    </div>

    <div>
      <label class="!block !text-sm !mb-1">Categoria</label>
      <input type="text" v-model="category" class="!w-full !p-2 !rounded !border dark:!bg-gray-700 dark:!text-white" />
    </div>

    <div>
      <label class="!block !text-sm !mb-1">Descrição</label>
      <input type="text" v-model="description" class="!w-full !p-2 !rounded !border dark:!bg-gray-700 dark:!text-white" />
    </div>

    <div>
      <label class="!block !text-sm !mb-1">Data</label>
      <input type="date" v-model="date" class="!w-full !p-2 !rounded !border dark:!bg-gray-700 dark:!text-white" />
    </div>

    <button type="submit" class="!w-full !bg-green-600 !text-white !p-2 !rounded hover:!bg-green-700 !cursor-pointer">
      Adicionar Transação
    </button>
  </form>
</template>