<template>
  <div>
    <div class="list-group" id="mailMessages">
      <a href="#" v-for="(message,index) in messages" :key="index" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1" v-text="'보낸사람 : ' + message.sender.emailAddress.name"></h5>
          <small v-text="message.sentDateTime"></small>
        </div>
        <p class="mb-1" v-text="'제목 : ' + message.subject"></p>
        <!-- <small>Donec id elit non mi porta.</small> -->
      </a>
    </div>
      <!-- <a href="#" class="list-group-item list-group-item-action active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a> -->
    
    <!-- <ul id="mailMessages">
        <li v-for="(message,index) in messages" :key="index">
            <p class="mail-sender" v-text="message.sender.emailAddress.name"/>
            <p class="mail-subject" v-text="message.subject"></p>
        </li>
    </ul> -->
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
        console.log(JSON.stringify(res))
        this.messages = res.data 
        })
      .catch(e => { console.log("fail", e) })
    })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

