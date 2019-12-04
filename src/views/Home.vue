<template>
	<div id="home">
		<section>
			<Navigation></Navigation>
		</section>
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
		
	</div>
</template>

<script>
import TaskList from "@/components/TaskList"
import EventList from "@/components/EventList"
import OneDriveList from "@/components/OneDriveList"
import MailMessageList from "@/components/MailMessageList"
import UserProfile from "@/components/UserProfile"
import Navigation from "@/components/Navigation"
import { Utils } from "@/common/utils"

export default {
  name: "Home",
  components: {
	TaskList,
	EventList,
	MailMessageList,
	OneDriveList,
	UserProfile,
	Navigation
  },
  beforeCreate() {
	// alert(window.location)
	// var clientToken = window.location.href.substring(window.location.href.indexOf("?clientToken=") + "?clientToken=".length)
	var clientToken = Utils.getCookie("clientToken")
	window.localStorage.setItem("clientToken", clientToken)
	// console.log(clientToken)
	// this.axios.defaults.headers = {
	// 	clientToken: clientToken
	// }
	
  },
  methods : {  
	
  }
};
</script>
<style>
.contents-section {
	margin: 30px auto 0 auto;
    height: 1350px;
    width: 90%;
}

.contents-section article {
  background-color: white;
  border : 1px solid #ccc;
  width:49%;
  padding : 15px 25px 0 25px;
  border-radius:10px;
  /* display:inline-block; */
  float:left;
  height:30%;
  margin:0 1px 1px 0;
}

.article-subject {
	font-size : 21px;
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
ul {
   list-style:none;
   padding-left:0px;
}

.contents-section ul li {
	margin-top : 10px;
}

p {
	margin:0;
}

</style>