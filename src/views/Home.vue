<template>
	<div id="home">
		<section class="contents-section">
			<article class="calendar-article">
				<p class="article-subject">Schedule</p>
				<EventList></EventList>
			</article>
			<article class="mail-article">
				<p class="article-subject">Recent Mail</p>
				<MailMessageList></MailMessageList>
			</article>
			<article class="task-article">
				<p class="article-subject">Tasks</p>
				<TaskList></TaskList>
			</article>
			<article class="drive-article">
				<p class="article-subject">One Drive</p>
				<OneDriveList></OneDriveList>
			</article>
		</section>
		<section class="profile-section">
			<UserProfile></UserProfile>
		</section>
	</div>
</template>

<script>
import TaskList from "@/components/TaskList"
import EventList from "@/components/EventList"
import OneDriveList from "@/components/OneDriveList"
import MailMessageList from "@/components/MailMessageList"
import UserProfile from "@/components/UserProfile"
import { Utils } from "@/common/utils"

export default {
  name: "home",
  components: {
	TaskList,
	EventList,
	MailMessageList,
	OneDriveList,
	UserProfile
  },
  beforeCreate() {
	// alert(window.location)
	// var clientToken = window.location.href.substring(window.location.href.indexOf("?clientToken=") + "?clientToken=".length)
	// window.localStorage.setItem("clientToken", clientToken)
	var clientToken = Utils.getCookie("clientToken")
	console.log(clientToken)
	this.axios.defaults.headers = {
		clientToken: clientToken
	}
	
  },
  methods : {  
	
  }
};
</script>
<style>
.contents-section {
	margin: 80px auto 0 auto;
    height: 1350px;
    width: 90%;
}

.contents-section article {
  background-color: white;
  border : 1px solid #ccc;
  width:49%;
  padding : 30px 0 0 30px;
  border-radius:10px;
  /* display:inline-block; */
  float:left;
  height:30%;
  margin:0 1px 1px 0;
}

.article-subject {
	font-size : 19px;
	font-weight:600
}

.calendar-article ul li p:first-child {
	color : #1483D7;
	font-size : 16px;
	font-weight:600
}

.calendar-article ul li p:nth-child(2){
	padding-left:5px;
}

.mail-article ul li p:first-child, .task-article ul li p:first-child {
	font-size:15px;
	font-weight:600;
}
.duedate {
	color : white;
	background-color : #E13D61;
	padding : 0 5px 0 5px;
	font-size:13px;
	font-weight:500;
}


</style>