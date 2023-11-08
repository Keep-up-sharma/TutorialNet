<template>
  <HomeNavBar @search="(value) => filterQuery = value" />
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

<style></style>
