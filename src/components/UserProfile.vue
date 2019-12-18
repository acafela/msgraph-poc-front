<template>
    <div class="profile-section">
      <div class="profile-img-sm-box">
        <img v-bind:src="imgSrc" alt="profile-img" class="profile-img-sm" v-on:click="activeProfileCard = !activeProfileCard"/>
      </div>
      <div class="card" v-show="activeProfileCard" >
        <div class="card-img">
          <img v-bind:src="imgSrc" class="card-img-top profile-img" alt="profile-img">
        </div>
        <div class="card-body">
          <h5 class="card-title" v-text="user.displayName"/>
          <p class="card-text" v-text="user.mail"/>
          <a href="#" class="card-link" v-on:click="logout()">Logout</a>
        </div>
      </div>
    </div>
</template>

<script>
import { API_URL } from "@/common/config"
import { Utils } from "@/common/utils"

export default {
  name: "UserProfile",
  data () {
    return {
      user : {},
      activeProfileCard: false,
      imgSrc : API_URL + "/users/me/photo/content?clientToken=" + window.localStorage.getItem("clientToken")
    }
  },
  created() {
    this.user.mail = localStorage.getItem("userId")
    this.user.displayName = localStorage.getItem("displayName")
  },
  methods : {
    logout() {
      this.$msg.publishLogout()
      localStorage.removeItem("clientToken")
      this.$router.push("/")
    }
  }
};
</script>
<style scoped>
.card-img{
  margin-top : 5px;
  text-align: center;
}
.card {
  border-radius: 15px;
}
.card-body {
  text-align: left;
}
.card .card-link {
  float: right;
}
.profile-img {
	width:100px;
	height:100px;
	border-radius:50px;
}
.profile-img-sm {
  width:45px;
	height:45px;
	border-radius:45px;
}
.profile-section {
	position : absolute;
	top : 5px;
	right : 10px;
  z-index: 10;
}
.profile-img-sm-box {
  text-align: right;
  cursor: pointer;
}
</style>
