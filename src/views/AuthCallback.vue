<template>
  <div id="authCallback">
    <p>
      Loading...
    </p>
    <!-- <button id="send" class="btn btn-default" type="button" @click.prevent="publish">Send</button> -->
  </div>
</template>

<script>
import { Utils } from "@/common/utils"
import SockJS from "sockjs-client"
import Stomp from "webstomp-client"

export default {  
  name: "AuthCallback",
  data() {
    return {} 
  },
  beforeCreate() {
    const _clientToken = encodeURIComponent(Utils.getCookie("clientToken"))
    if(_clientToken) {
      window.localStorage.setItem("clientToken", _clientToken)
      this.axios.defaults.headers = {
        clientToken: _clientToken
      }
    }
  },
  mounted() {    
    this.connectWebSocketAndStoreUser()
  },
  methods : {
    
    connectWebSocketAndStoreUser() {
      
      this.axios.get("/me"
      // , { headers: { clientToken: Utils.getCookie("clientToken") } }
      )
      .then(res => { 
        // console.log(user)
        const user = res.data
        this.storeUser(user)
        this.$msg.init(user, () => {
          this.$router.push("/home")
        })
      })
      .catch(e => { console.log("fail", e) })

    },

    storeUser(user) {
      localStorage.setItem("userId", user.userPrincipalName)
      localStorage.setItem("displayName", user.displayName)
    }
  }
};
</script>
<style scoped>
</style>