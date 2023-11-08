<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
setTimeout(() => {
  try {
    document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-TvD9Pc-hSRGPd")[0].remove()
  document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-l4eHX-hSRGPd")[0].remove()
  document.getElementById(':0.container').contentWindow.document.getElementById("options").remove()
  document.getElementById(':0.container').contentWindow.document.getElementById(":0.restore").remove()
  } catch (error) {
    document.getElementById(':1.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-TvD9Pc-hSRGPd")[1].remove()
  document.getElementById(':1.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-l4eHX-hSRGPd")[1].remove()
  document.getElementById(':1.container').contentWindow.document.getElementById("options").remove()
  document.getElementById(':1.container').contentWindow.document.getElementById(":0.restore").remove()
  }
}, 1000);
// document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-TvD9Pc-hSRGPd")[0].remove()
</script>

<template>
  <header>

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>

  <RouterView />
</template>
