<template>

  <ul id="catPills" class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" :class="{ active: selectedCategory == 'all' }" @pointerup="() => selectedCategory = 'all'"
        href="#">all</a>
    </li>
    <li v-for="cat in new Set(projects.map(p => p.category))" class="nav-item">
      <a class="nav-link" @pointerup="() => selectedCategory = cat" :class="{ active: selectedCategory == cat }"
        href="#">{{
          cat }}</a>
    </li>
  </ul>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete this tutorial?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="delId = ''">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="delProject">Yes</button>
        </div>
      </div>
    </div>
  </div>


  <div class="notranslate row tutorialsGrid">
    <div
      v-for="project in projects.filter((project) => ((project.category == selectedCategory) || (selectedCategory == 'all')) && JSON.stringify(project).toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase()))"
      class="card tutorialCard" style="width: 18rem;">
      <div v-if="username == project.creator" class="modifyButtons"><button class="btn primary-btn">✏️</button><button
          data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn primary-btn"
          @click="() => delId = project.id">✖️</button></div>
      <img
        :src="project.thumbnailUrl.length > 0 ? (this.host+'/'+project.thumbnailUrl) : ('https://picsum.photos/200/200?rand=' + Math.random())"
        class="card-img-top" alt="...">
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
      'projects': [],
      'selectedCategory': 'all',
      'loggedIn': document.cookie ? true : false,
      'username': '',
      'delId': '',
    }
  },
  props: ["filterQuery"],
  methods: {
    goToProject(id) {
      this.$router.push({
        path: 'tutorial',
        query: {
          'id': id,
          'title': this.projects.find((p) => p.id == id).title.replace(' ', '-'),
        }
      });
    },

    async delProject() {
      if (this.delId) {
        let res = await fetch(this.host + '/deleteProject.php?id=' + this.delId, { 'credentials': 'include' });
        this.getData()
      }
    },
    async getData() {
      const res = await fetch(this.host + "/getProjectsInfo.php");
      const projects = await res.json();
      this.projects = projects;
      this.username = document.getElementById('username') && document.getElementById('username').innerText;

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

#catPills {
  max-width: 95vw;
  overflow: scroll;
}

.modifyButtons {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0px 0px 0px 20px;
  background-color: rgba(240, 248, 255, 0.642);
  backdrop-filter: blur(10px);
}

.modifyButtons button {
  padding: 10px;
}
</style>
