import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ApiService from "./common/api-service"

ApiService.init()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
