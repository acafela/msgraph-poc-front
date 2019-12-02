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
    this.axios.get("/me/calendar/events")
    .then(res => { this.events = res.data })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

