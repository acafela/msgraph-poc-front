<template>
  <section class="contents-wrap-section">
		<section class="contents-section">
			<article class="calendar-article">
				<p class="article-subject">내 일정</p>
				<ul id="calendarEvents">
					<!-- <li>
						<p>제목입니다</p>
						<p><span>2019-09-25 10:00</span> - <span>2019-09-25 12:00</span></p>
					</li> -->
				</ul>
			</article>
			<article class="mail-article">
				<p class="article-subject">받은 편지함</p>
				<ul id="mailMessages">
					<!-- <li>
						<p class="mail-sender">김상기</p>
						<p class="mail-subject">금주 배포 항목 취합.</p>
					</li> -->
				</ul>
			</article>
			<article class="task-article">
				<p class="article-subject">할일(Teams Task)</p>
				<TaskList></TaskList>
			</article>
			<article class="drive-article">
				<p class="article-subject">One Drive</p>
				<OneDriveList></OneDriveList>
			</article>
		</section>
	</section>
</template>

<script>
import TaskList from "@/components/TaskList";
import OneDriveList from "@/components/OneDriveList";

export default {
  name: "home",
  components: {
	TaskList,
	OneDriveList
  },
  beforeCreate() {
    // alert(window.location)
	var clientToken = window.location.href.substring(window.location.href.indexOf("?clientToken=") + "?clientToken=".length)
    window.localStorage.setItem("clientToken", decodeURIComponent(clientToken))
  }
};
</script>
<style>
.contents-section {
	margin: 80px auto 0 auto;
    height: 1000px;
    width: 75%;
}

.contents-section article {
  background-color: white;
  border : 1px solid #ccc;
  width:45%;
  padding : 30px 0 0 30px;
  border-radius:10px;
  /* display:inline-block; */
  float:left;
  height:30%;
  margin:0 3px 3px 0;
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