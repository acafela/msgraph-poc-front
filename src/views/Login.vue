<template>
  <section id="login-section">
    <div class="form-group">
      <!-- <label for="loginId">아이디</label> -->
      <input type="email" class="form-control" id="loginId" 
        ref="loginId" aria-describedby="emailHelp" placeholder="Enter your email address" v-model="loginId"
        value=""
        v-on:keyup.enter="goLogin"
        >
      <small class="form-text text-muted">Office 365 아이디 입력</small>
    </div>
    <div class="btn-box">
		  <button type="button" class="btn btn-primary" v-on:click="goLogin">로그인 하기</button>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/common/config"

export default {
  name: "Login",
  data() {
    return { 
      loginId : "dev_team@lsgpoc.onmicrosoft.com"
    } 
  },
  components: {
  },
  mounted(){
    this.$refs.loginId.focus()
  },
  methods : {
    goLogin(){
      location.href = API_URL + "/auth?loginId=" + this.loginId
    }
  }
};
</script>
<style scoped>
#login-section{
  width : 450px;
  margin : 100px auto;
}
#login-section .btn-box{
  text-align: right;
}
</style>