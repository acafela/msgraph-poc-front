<template>
    <ul id="mailMessages">
        <li v-for="(message,index) in messages" :key="index">
            <p class="mail-sender" v-text="message.sender.emailAddress.name"/>
            <p class="mail-subject" v-text="message.subject"></p>
        </li>
    </ul>
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
      let messageQueryString = "select=subject,sender"
      this.axios.get(url + "?" + messageQueryString)
      .then(res => { this.messages = res.data })
      .catch(e => { console.log("fail", e) })
    })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

