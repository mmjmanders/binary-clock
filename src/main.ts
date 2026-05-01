import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeMerge, faSquareBinary } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './main.css'

library.add(faCodeMerge, faSquareBinary)

createApp(App).mount('#app')
