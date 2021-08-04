import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'

import store from '@/store' //引入自己的路径
import './store/useSocket.js' //引入自己的路径
Vue.prototype.$store=store

Vue.prototype.$myRequest = myRequest
import cuCustom from './components/Cu/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

//全局注入w-loading组件
import wLoading from "@/components/w-loading/w-loading.vue";
Vue.component('w-loading',wLoading)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
