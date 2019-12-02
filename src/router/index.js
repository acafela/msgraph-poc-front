import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Login from "@/views/Login"

Vue.use(Router)

export default new Router({
    routes : [
        {
            name : "home",
            path : "/",
            component: Home
        },
        {
            name : "login",
            path : "/login",
            component: Login
        }
    ]
})