import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config"

const ApiService = {
  init() {
    console.log("ApiSevice initialize.")
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    Vue.axios.defaults.headers = {
      clientToken: window.localStorage.getItem("clientToken")
    }
  },

  get(resource) {
    return Vue.axios.get(resource).catch(error => {
      throw new Error(`ApiService Error - ${error}`)
    });
  },

};

export default ApiService
