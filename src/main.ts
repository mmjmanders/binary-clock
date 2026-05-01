import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import faPlugin from './fa-plugin'

createApp(App).use(faPlugin).mount('#app')
