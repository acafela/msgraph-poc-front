
import SockJS from "sockjs-client"
import Stomp from "webstomp-client"
import { API_URL } from "@/common/config"
import { WEB_SOCKET_URL } from "@/common/config"

const MessageService = {

    stompClient : {},
    socket : {},
    connected : false,

    init(user, callback){

      this.socket = new SockJS(WEB_SOCKET_URL);
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
        {},
        frame => {
          this.connected = true;

          this.publishLogin(user)

          this.subscribe()

          if(typeof callback == "function") callback()
        },
        error => {
          console.log(error)
          this.connected = false
          if(typeof callback == "function") callback()
        })
    },

    publishLogin(user){
      const msg = {
        userId : user.userPrincipalName,
        displayName : user.displayName,
        contents : "로그인 했습니다."
      }
      this.stompClient.send("/app/login", JSON.stringify(msg), {})
    },

    publishLogout(){
      const msg = {
        userId : localStorage.getItem("userId"),
        displayName : localStorage.getItem("displayName"),
        contents : "로그아웃 했습니다."
      }
      this.stompClient.send("/app/logout", JSON.stringify(msg), {})
      this.disconnect()
    },

    subscribe() {
      this.stompClient.subscribe("/topic/login", tick => {

        console.log("Subscribe Login", tick);
        const body = JSON.parse(tick.body)

        if(localStorage.getItem("clientToken") != encodeURIComponent(body.userId)){
          this.showToast(body)
        }
      })
      this.stompClient.subscribe("/topic/logout", tick => {

        console.log("Subscribe Logout", tick);
        const body = JSON.parse(tick.body)

        if(localStorage.getItem("clientToken") != encodeURIComponent(body.userId)){
          this.showToast(body)
        }
      })
    },

    showToast(body){

      const toastEle = this.createToastEle(body)
      document.body.insertAdjacentHTML("beforeend", toastEle)

      setTimeout(() => {
          const toastArea = document.getElementById("toast-area")
          toastArea.parentNode.removeChild(toastArea)
      }, 3000);
    }, 

    createToastEle(body) {
      const imgSrc = API_URL + "/users/" + body.userId + "/photo/content?clientToken=" + window.localStorage.getItem("clientToken")

      return `<div id="toast-area" aria-live="polite" aria-atomic="true" style="position: fixed; top:66px; right:10px; min-height: 200px;">
                      <div class="toast-box" role="alert" aria-live="assertive" aria-atomic="true">
                          <div class="toast-header">
                              <img src="`
                              +
                              imgSrc
                              +
                              `" class="rounded mr-2" >
                              <strong class="mr-auto">`
                              +
                              body.displayName
                              +
                              `</strong>
                              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="toast-body">`
                              +
                              body.contents
                              +
                          `</div>
                      </div>
                  </div>`
    },

    disconnect() {
      if (this.stompClient && this.connected) {
        this.stompClient.disconnect()
      }
      this.connected = false;
    },

    tickleConnection() {
      this.connected ? this.disconnect() : this.connect()
    }
};

export default MessageService
