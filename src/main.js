import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ApiService from "./common/api-service"
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

ApiService.init()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
