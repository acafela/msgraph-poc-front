<template>
  <div >
    <section>
			<Navigation></Navigation>
		</section>

    <section class="reservation-content">
      <section class="rooms-nav">
        <ul class="nav nav-tabs">
          <li class="nav-item " v-for="(room,index) in rooms" :key="index">
            <a class="nav-link" 
              v-bind:class="{ active : index == 0 }"
              href="#" 
              v-text="room.name" 
              v-on:click="showTimeTable(room.address, $event)"
              >
            </a>
          </li>
        </ul>
      </section>

      <section id="time-table-section">
        <div class="search-box">
          <input type="date" name="searchDate" id="searchDate" v-model="searchDate" v-on:change="showTimeTable()">
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">예약 시간</th>
              <th scope="col">회의명</th>
              <th scope="col">주관자</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event,index) in events" :key="index" v-bind:class="{ 'table-primary progess-meeting' : eventStatus(event) == '진행중' }" >
              <td v-text="event.displayStartTime.substring(11) + ' ~ ' + event.displayEndTime.substring(11)"></td>
              <td v-text="event.subject"></td>
              <td><span><img class="profile-img-sm" v-bind:src="organizerImg(event.organizerAddress)" ></span>&nbsp;&nbsp;<span v-text="event.organizerName"></span></td>
              <td v-text="eventStatus(event)"></td>
            </tr>
            <tr v-if="noEvents">
              <td class="table-bordered" colspan="4">예약된 회의가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </section>

    </section>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation"
import { API_URL } from "@/common/config"

export default {
  
  name: "Reservation",
  data() {
    return { 
      rooms : [],
      events : [],
      searchDate : new Date().format("yyyy-MM-dd"),
      roomId : "",
      noEvents : false
    } 
  },
  components: {
    Navigation
  },
  created(){
    this.axios.get("/resources/rooms")
    .then(res => { 
      this.rooms = res.data
      // console.log(this.rooms)
      this.showTimeTable(this.rooms[0].address)
    })
    .catch(e => { console.log("fail", e) })

  },
  
  mounted(){
    // document.getElementsByClassName("rooms-nav-link")[0].classList.add("active")
  },
  methods : {

    organizerImg (address){
      return API_URL + "/users/" + address + "/photo/content?clientToken=" + window.localStorage.getItem("clientToken")
    },
    
    showTimeTable(address, event) {
      
      if(event){
        event.target.parentNode.parentNode.childNodes.forEach(element => {
          element.childNodes[0].classList.remove("active")
        })
        event.target.classList.add("active")
      }

      if(address){
        this.roomId = address
      }

      let endDate = new Date(this.searchDate)
      endDate.setDate(endDate.getDate() + 1)
      let query = "?startDateTime=" + this.searchDate + "T00:00:00&endDateTime=" + endDate.format("yyyy-MM-dd") + "T00:00:00"
      
      this.events = []
      this.axios.get("/users/{id}/calendar/events".replace("{id}", this.roomId) + query)
      .then(res => { 
        // console.log(res.data)
        this.events = res.data
        this.noEvents = (this.events.length == 0)
      })
      .catch(e => { console.log("fail", e) })

    },

    eventStatus(event) {
      var endTime = new Date(event.displayEndTime)
      var startTime = new Date(event.displayStartTime)
      var now = new Date()
      return ( now >= startTime && now <= endTime ) ? "진행중" : (now < endTime) ? "예정" : "종료"
    },

    yyyyMMdd(){
      const d = new Date()
      return new Date().format("yyyy-MM-dd")
    }
  }
};

</script>
<style scoped>
.reservation-content {
	margin: 30px auto 0 auto;
    height: 1350px;
    width: 80%;
}
.rooms-nav {
  margin-bottom:10px;
}
.table {
  text-align: center;
}
.table tbody tr td:nth-child(2){
  text-align: left;
}

.thead-dark tr th:nth-child(1){
  width : 20%;
}
.thead-dark tr th:nth-child(2){
  width : 35%;
}
.thead-dark tr th:nth-child(3){
  width : 25%;
}
.thead-dark tr th:nth-child(4){
  width : 20%;
}
.progess-meeting {
  font-weight: bold;
}
.search-box {
  text-align: right;
  margin : 0 0 15px 0;
}
.search-box input {
  /* width : 200px; */
  font-size: 18px;
}
.profile-img-sm {
  width:25px;
	height:25px;
	border-radius:25px;
}
</style>


