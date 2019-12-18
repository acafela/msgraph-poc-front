<template>
  <div>
    <div class="list-group" id="mailMessages">
      <a href="#" v-for="(message,index) in messages" :key="index" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 mail-subject" v-text="message.subject"></h5>
          <small v-text="message.sentDateTime"></small>
        </div>
        <p class="mb-1" v-text="'보낸사람 : ' + message.sender.emailAddress.name"></p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MailMessageList",
  data () {
    return {
      messages : []
    }
  },
  methods : {
    
  },
  created() {
    let folderQueryString = "filter=displayName eq '받은 편지함' or displayName eq 'Inbox'"
    this.axios.get("/me/mailFolders?" + folderQueryString)
    .then(res => {
      let inboxId = res.data[0].id
      let url = "/me/mailFolders/{folderId}/messages".replace("{folderId}", inboxId)
      let messageQueryString = "select=subject,sender,sentDateTime&top=4"
      this.axios.get(url + "?" + messageQueryString)
      .then(res => { 
        // console.log(JSON.stringify(res))
        this.messages = res.data 
        })
      .catch(e => { console.log("fail", e) })
    })
    .catch(e => { console.log("fail", e) })
  }
};
</script>
<style scoped>
.mail-subject {
  font-weight: 600
}
</style>