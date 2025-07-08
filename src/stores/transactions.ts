import { defineStore } from "pinia";

export interface Transaction {
  id: number,
  type: "entrada" | "saida",
  amount: number,
  category: string,
  description: string,
  date: string,
}

export const useTransactionStore = defineStore("transaction", {
  state: () => ({
    transactions: [] as Transaction[]
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