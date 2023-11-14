<template>
  <br>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" @input="(e) => { filterQuery = e.target.value }"
      aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  <TutorialsGrid :filterQuery="filterQuery"></TutorialsGrid>
</template>

<script>
import TutorialsGrid from '../components/TutorialsGrid.vue'
import HomeNavBar from '../components/HomeNavBar.vue'

export default {
  components: { TutorialsGrid, HomeNavBar },
  data() {
    return { 'filterQuery': "" }
  }
}
</script>

<style scoped> form{
  max-width: 250px;
  position: absolute;
  top: 15px;
  right: 100px;
  z-index: 10;
}</style>
