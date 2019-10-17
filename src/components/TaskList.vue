<template>
    <ul id="tasks">
        <li v-for="(task,index) in tasks" :key="index">
            <p v-text="task.title"/>
            <p><span class='duedate'>{{ task.dueDateTime.substring(0, 10) }}</span></p>
        </li>
    </ul>
</template>

<script>
export default {
  name: "TaskList",
  data () {
    return {
      tasks : []
    }
  },
  created() {
    this.axios.get("/me/planner/tasks")
    .then(res => { this.tasks = res.data })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

