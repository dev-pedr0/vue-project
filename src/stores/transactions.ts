import { defineStore } from "pinia";
import { watch } from "vue";

export interface Transaction {
  id: number,
  type: "entrada" | "saida",
  amount: number,
  category: string,
  description: string,
  date: string,
}

const transacoesPadrao: Transaction[] = [
    {
      id: 1,
      type: "entrada",
      amount: 1200,
      category: "Salário",
      description: "Salário Mensal",
      date: "2025-07-01",
    },
    {
      id: 2,
      type: "saida",
      amount: 300,
      category: "Mercado",
      description: "Compras da semana",
      date: "2025-07-03",
    },
    {
      id: 3,
      type: "saida",
      amount: 150,
      category: "Transporte",
      description: "Combustível",
      date: "2025-07-05",
    }
  ]

export const useTransactionStore = defineStore("transaction", {
    state: () => ({
    transactions: (() => {
      const saved = localStorage.getItem('transactions')
      return saved ? JSON.parse(saved) as Transaction[] : transacoesPadrao
    })()
  }),

  getters: {
    saldoTotal: (state) =>
      state.transactions.reduce((acc, t) =>
        t.type === "entrada" ? acc + t.amount : acc - t.amount, 0),

    entradas: (state) =>
      state.transactions
        .filter(t => t.type === "entrada")
        .reduce((acc, t) => acc + t.amount, 0),
    
    saidas: (state) =>
      state.transactions
        .filter(t => t.type === 'saida')
        .reduce((acc, t) => acc + t.amount, 0),

    transacoesOrdenadasPorData: (state) => {
      return [...state.transactions].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      });
  }
  },

  actions: {
    adicionarTransacao(transacao: Transaction) {
      this.transactions.push(transacao);
    },

    removerTransacao(id: number) {
      this.transactions = this.transactions.filter(t => t.id !== id);
    }
  }
});

export function setupTransactionStorePersistence(store: ReturnType<typeof useTransactionStore>) {
  watch(
    () => store.transactions,
    (transactions) => {
      localStorage.setItem('transactions', JSON.stringify(transactions))
    },
    { deep: true }
  )
}