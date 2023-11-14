<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-TvD9Pc-hSRGPd")[0].remove()

</script>

<script>
import HomeNavBar from './components/HomeNavBar.vue'
export default {
  components: { HomeNavBar },
  methods: {
    async setUserData() {

      const res = await fetch(this.host + '/getUserInfo.php', { 'credentials': 'include' });
      const json = await res.json();
      this.name = json.name;
      this.email = json.email;
      this.username = json.username;
      this.loggedIn = true;
      localStorage.setItem('username', this.username)
    }
  },
  data() {
    if (document.cookie) this.setUserData();
    return {
      'loggedIn': false,
      'name': '',
      'username': '',
      'email': '',

    }
  }
}
</script>
<template>
  <header>

    <HomeNavBar :name="name" :email="email" :username="username" :loggedIn="loggedIn" @login="setUserData" />
  </header>
  <br />
  <br />
  <br />

  <RouterView />
</template>
