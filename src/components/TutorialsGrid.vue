<template>
  <div class="notranslate row tutorialsGrid">
    <div v-for="project in projects.filter((project) => JSON.stringify(project).toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase()))"
      class="card tutorialCard" style="width: 18rem;">
      <img :src="'https://picsum.photos/200/200?rand=' + Math.random()" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <a class="card-text" data-bs-toggle="collapse" :href="'#slides' + project.id"
          :aria-controls="'slides' + project.id" role="button" aria-expanded="false">
          {{ project.slides.length }} Sildes
        </a>
      </div>
      <ul class="list-group list-group-flush collapse" :id="'slides' + project.id">
        <li v-for="slide in project.slides" class="list-group-item">{{ slide.title }}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link btn btn-primary" @click="() => goToProject(project.id)">View</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    this.getData();
    return {
      'projects': []
    }
  },
  props: ["filterQuery"],
  methods: {
    goToProject(id) {
      this.$router.push({
        path: 'tutorial/' + id,
      });
    },
    async getData() {
      const res = await fetch(this.host + "/getProjectsInfo.php");
      const projects = await res.json();
      this.projects = projects;
      console.log(projects);
    }
  }
}
</script>

<style>
.tutorialCard {
  margin: 20px;
  margin-bottom: auto;
}

.tutorialsGrid {
  justify-content: space-around;
}
</style>
