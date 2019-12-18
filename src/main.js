import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ApiService from "./common/api-service"
import MessagePlugin from "./common/message-plugin"
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './common/jscore-custom'

ApiService.init()

// Vue.prototype.Test = {name : "yshwang"}
Vue.prototype.stompClient = {}
Vue.prototype.socket = {}

Vue.use(MessagePlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
