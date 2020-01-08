<template>
    <ul id="calendarEvents">
        <li v-for="(event,index) in events" :key="index">
            <p v-text="event.subject"/>
            <p v-html="displayPeriod(event)"></p>
        </li>
    </ul>
</template>

<script>
export default {
  name: "EventList",
  data () {
    return {
      events : []
    }
  },
  methods : {
    displayPeriod(event){
      return event.isAllDay ? "<span>하루종일 - </span><span>" + event.displayStartTime.substring(0, 10) + "</span>"
						: "<span>" + event.displayStartTime + "</span> - <span>" + event.displayEndTime + "</span></p>"
    }
  },
  created() {
    const now = new Date()
    // endDate.setDate(endDate.getDate() + 1)
    const afterWeek = new Date()
    afterWeek.setDate(now.getDate() + 7)

    let query = "?startDateTimeFrom=" + now.format("yyyy-MM-ddTHH:mm:ss.000") + "&startDateTimeTo=" + afterWeek.format("yyyy-MM-dd") + "T00:00:00.000"
    this.axios.get("/users/me/calendar/events" + query)
    .then(res => { this.events = res.data })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

