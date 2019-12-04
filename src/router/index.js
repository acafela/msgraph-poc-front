import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Login from "@/views/Login"
import Reservation from "@/views/Reservation"

Vue.use(Router)

export default new Router({
    routes : [
        {
            name : "Home",
            path : "/",
            component: Home
        },
        {
            name : "Home",
            path : "/login",
            component: Login
        },
        {
            name : "Reservation",
            path : "/reservation",
            component: Reservation
        }
    ]
})