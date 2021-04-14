import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'

Vue.prototype.$myRequest = myRequest
import cuCustom from './components/Cu/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
