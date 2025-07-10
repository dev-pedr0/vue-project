import './assets/tailwind.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupTransactionStorePersistence, useTransactionStore } from './stores/transactions';

const app = createApp(App)

app.use(createPinia())
app.use(router)

const transactionStore = useTransactionStore()
setupTransactionStorePersistence(transactionStore)

app.mount('#app')
