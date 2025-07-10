<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { useTransactionStore } from '@/stores/transactions'
import { computed, onMounted, ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)
const transactionStore = useTransactionStore()

const chartData = computed(() => {
  const categoryMap = new Map<string, number>()

  transactionStore.transactions.forEach(t => {
    const prev = categoryMap.get(t.category) ?? 0
    categoryMap.set(t.category, prev + t.amount)
  })

  return {
    labels: Array.from(categoryMap.keys()),
    datasets: [
      {
        label: 'Gastos por Categoria',
        data: Array.from(categoryMap.values()),
        backgroundColor: [
          '#34D399', // verde
          '#60A5FA', // azul
          '#FBBF24', // amarelo
          '#F87171', // vermelho claro
          '#A78BFA', // roxo
          '#F472B6', // rosa
          '#6B7280', // cinza
        ],
        hoverOffset: 30,
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#00ffff',
        font: {
          size: 14,
        },
      },
    },
  },
}
</script>

<template>
  <div class="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>