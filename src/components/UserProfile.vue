<template>
  
    <!-- <p>
      <img v-bind:src="imgSrc" alt="profile-img" class="profile-img"/>
    </p>
    <p>
      <span class="glyphicon glyphicon-user" aria-hidden="true"></span><span v-text="user.displayName"></span>
    </p>
    <p>
      <span v-text="user.mail"></span>
    </p> -->
    <div>
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
          <a href="#" class="card-link">Logout</a>
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
      imgSrc : API_URL + "/me/photo/content?clientToken=" + Utils.getCookie("clientToken") 
    }
  },
  created() {
    this.axios.get("/me")
    .then(res => { 
      console.log(res) 
      this.user = res.data
    })
    .catch(e => { console.log("fail", e) })
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
  width:50px;
	height:50px;
	border-radius:50px;
}
.profile-section {
	position : absolute;
	top : 5px;
	right : 5px;
}
.profile-img-sm-box {
  text-align: right;
  cursor: pointer;
}
</style>
