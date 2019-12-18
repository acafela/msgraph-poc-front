// ChartPlugin.js
import MessageService from "@/common/message-service"

export default {
  install(Vue, options) {
    Vue.prototype.$msg = MessageService;
  }
}