import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap 관련 JavaScript와 CSS 로딩------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// icon 로딩
import PhosphorIcons from "@phosphor-icons/vue"

// jquery import
import jQuery from 'jquery'

// axiosConfig --> 추후 뺄지 확인
import axiosConfig from './apis/axiosConfig';

// Daum postcode import
import VueDaumPostcode from "vue-daum-postcode"

// main.js
import Vue3Lottie from 'vue3-lottie'

createApp(App)
.use(store)
.use(router)
.use(PhosphorIcons)
.use(VueDaumPostcode)
.use(jQuery)
.use(Vue3Lottie)
.mount('#app')

global.$ = jQuery
