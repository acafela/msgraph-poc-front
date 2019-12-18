import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Login from "@/views/Login"
import AuthCallback from "@/views/AuthCallback"
import Reservation from "@/views/Reservation"

Vue.use(Router)

export default new Router({
    routes : [
        {
            name : "Home",
            path : "/home",
            component: Home
        },
        {
            name : "AuthCallback",
            path : "/authCallback",
            component: AuthCallback
        },
        {
            name : "Login",
            path : "/",
            component: Login
        },
        {
            name : "Reservation",
            path : "/reservation",
            component: Reservation
        }
    ]
})