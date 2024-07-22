import Vue from 'vue'
import App from './App'
import io from './common/weapp.socket.io.js'

Vue.config.productionTip = false
Vue.prototype.socket = io('http://10.126.58.61:8082')
App.mpType = 'app'

const app = new Vue({
...App
})
app.$mount() //挂载 Vue 实例