<script setup lang="ts">
    import { useTransactionStore } from '@/stores/transactions';
import { computed } from 'vue';

    const store = useTransactionStore();
    const transactions = computed(() => store.transacoesOrdenadasPorData);

    function remover(id: number) {
    store.removerTransacao(id);
    }
</script>

<template>
    <div v-if="store.transactions.length" class="!space-y-3">
        <h2 class="!text-lg !font-semibold">Transações cadastradas</h2>
        <ul class="!divide-y !divide-gray-300 dark:!divide-gray-600">
            <li
                v-for="transacao in transactions"
                :key="transacao.id"
                class="!py-3 !flex !justify-!between !items-center"
            >
                <div>
                    <p class="!font-medium">{{ transacao.description }}</p>
                    <p class="!text-sm !text-gray-500 dark:!text-gray-400">
                        {{ transacao.category }} | {{ new Date(transacao.date).toLocaleDateString() }}
                    </p>
                </div>

                <div class="!flex !items-center !gap-4">
                    <span
                        :class="[
                        '!font-semibold',
                        transacao.type === 'entrada' ? '!text-green-600' : '!text-red-600'
                        ]"
                    >
                        {{ transacao.type === 'entrada' ? '+' : '-' }} R$ {{ transacao.amount.toFixed(2) }}
                    </span>
                    <button
                        @click="remover(transacao.id)"
                        class="!text-red-500 hover:!text-red-700"
                    >
                        Remover
                    </button>
                </div>
            </li>
        </ul>
    </div>

    <div v-else class="text-gray-500 dark:text-gray-400">
        Nenhuma transação cadastrada ainda.
    </div>
</template>