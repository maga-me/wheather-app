import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/style/main.scss';

createApp(App).use(store).mount('#app')
