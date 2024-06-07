import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap 관련 JavaScript와 CSS 로딩------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
