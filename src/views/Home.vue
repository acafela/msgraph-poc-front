<template>
	<div id="home">
		<!-- <button type="button" v-on:click="publish()">Test</button> -->
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
// import Toast from "@/components/Toast"
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
  data(){
	  return {
		  
	  }
  },
	mounted(){
		// this.$subscribe.subscribe()
	},
  methods : {  
	publish() {
		// this.$subscribe.subscribe()
	}
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
.toast-box {
    max-width: 350px;
    overflow: hidden;
    font-size: .875rem;
    background-color: rgba(255,255,255,.85);
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
    backdrop-filter: blur(10px);
    /* opacity: 0; */
    border-radius: .25rem;
}

.toast-box .toast-header img{
	width:30px;
	height:30px;
	border-radius:20px;
}

.toast-box .toast-body{
	text-align: center;
}

</style>