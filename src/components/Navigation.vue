<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-brand"
        >
          Office 365 POC
        </router-link>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li> -->
            <li class="nav-item">
              <router-link
                  :to="{ name: 'Home' }"
                  class="nav-link"
                >
                Home
                </router-link>
            </li>
            <li class="nav-item">
              <router-link
                  :to="{ name: 'Reservation' }"
                  class="nav-link"
                >
                Reservation
                </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >My Page</a>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <UserProfile></UserProfile>
      </section>
    </div>
</template>

<script>
import UserProfile from "@/components/UserProfile"

export default {
  name: "Navigation",
  components: {
    UserProfile
  },
  data () {
    return {
      isActive : false,
      selected: undefined
    }
  },
  methods : {
    activeLink(index) {
      console.log(index)
      for(var i=0; i<this.navLinks.length; i++){
        this.navLinks[i] = false
      }
      // this.navLinks[index] = true
      // alert(this.navLinks)
    }
  },
  created() {
    
  },
  mounted(){

  }
};
</script>

<style scoped>

</style>

