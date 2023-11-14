<template>
  <EditProjectForm :project="currProject" />
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

  <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Sort
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" @click="sortProjects('date')" href="#">Date (Newest first)</a></li>
      <li><a class="dropdown-item" @click="sortProjects('creator')" href="#">Creator (Ascending)</a></li>
      <li><a class="dropdown-item" @click="sortProjects('name')" href="#">Name (Ascending)</a></li>
    </ul>
  </div>


  <div class="notranslate row tutorialsGrid">
    <div
      v-for="project in projects.filter((project) => ((project.category == selectedCategory) || (selectedCategory == 'all')))"
      class="card tutorialCard" style="width: 18rem;">
      <div v-if="username == project.creator" class="modifyButtons"><button class="btn primary-btn"
          @click="currProject = project" data-bs-toggle="modal" data-bs-target="#projectEditModal">✏️</button><button
          data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn primary-btn"
          @click="() => delId = project.id">✖️</button></div>
      <img
        :src="project.thumbnailUrl.length > 0 ? (this.host + '/' + project.thumbnailUrl) : ('https://th.bing.com/th/id/R.d2ee4e314afa093265091bd73479f158?rik=fMXBIB231vht0g&riu=http%3a%2f%2fwww.kreilkamp.com%2fwp-content%2fuploads%2f2016%2f11%2fthumbnail-placeholder-500x334.jpg&ehk=6mynfmrw2mIh5dlQYM8Tv05IgOruDa3JOaJMJnvs0Yg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1')"
        class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title translate">{{ project.title }}</h5>
        <h6 class="card-text">{{ formatUploadDate(project.uploadDate) }}</h6>
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

  <div class="projectPages" v-if="projects.length > 0">
    <ProjectPages :totalLength="projects[0].total" @page-change="(l, o) => {
      limit = l;
      offset = o;
      getData();
    }" />
  </div>
</template>

<script>
import { offset } from '@popperjs/core';
import EditProjectForm from './EditProjectForm.vue';
import ProjectPages from './ProjectPages.vue';
export default {
  mounted() { this.getData(); },
  data() {
    this.getData();
    return {
      'projects': [],
      'selectedCategory': 'all',
      'loggedIn': document.cookie ? true : false,
      'username': localStorage.getItem('username'),
      'delId': '',
      'currProject': {},
      'limit': 5,
      'offset': 0,
    }
  },
  components: { EditProjectForm, ProjectPages },
  props: ["filterQuery"],
  watch: { filterQuery: 'getData' },
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
    formatUploadDate(uploadDate) {
      const currentDate = new Date();
      const uploadDateTime = new Date(uploadDate);

      // Check if the uploadDate is today
      if (
        uploadDateTime.getDate() === currentDate.getDate() &&
        uploadDateTime.getMonth() === currentDate.getMonth() &&
        uploadDateTime.getFullYear() === currentDate.getFullYear()
      ) {
        // If it's today, display time only
        const hours = uploadDateTime.getHours();
        const minutes = uploadDateTime.getMinutes();
        return `Today, ${hours}:${minutes}`;
      }

      // Check if the uploadDate is yesterday
      const yesterday = new Date(currentDate);
      yesterday.setDate(currentDate.getDate() - 1);
      if (
        uploadDateTime.getDate() === yesterday.getDate() &&
        uploadDateTime.getMonth() === yesterday.getMonth() &&
        uploadDateTime.getFullYear() === yesterday.getFullYear()
      ) {
        // If it's yesterday, display "Yesterday" and time
        const hours = uploadDateTime.getHours();
        const minutes = uploadDateTime.getMinutes();
        return `Yesterday, ${hours}:${minutes}`;
      }

      // If it's neither today nor yesterday, display date and time
      const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
      return uploadDateTime.toLocaleDateString(undefined, options);
    },

    async delProject() {
      if (this.delId) {
        let res = await fetch(this.host + '/deleteProject.php?id=' + this.delId, { 'credentials': 'include' });
        this.getData()
      }
    },
    async getData(sortBy) {
      const res = await fetch(`${this.host}${sortBy !== undefined ? `/getProjectsInfo.php?sortby=${sortBy}&` : '/getProjectsInfo.php?'}limit=${this.limit??10}&offset=${this.offset??5}${this.filterQuery && '&filter=%' + this.filterQuery+'%'}`);
      const projects = await res.json();
      this.projects = projects;

    },
    sortProjects(sortBy) {
      this.getData(sortBy);
    }

  }
}
</script>

<style>
.tutorialCard {
  margin: 20px;
  margin-bottom: auto;
}

.tutorialCard img {
  margin: auto;
  margin-top: 10px;
  border: 1px solid grey;

}

.tutorialsGrid {
  justify-content: space-around;
}

#catPills {
  max-width: 95vw;
  overflow: scroll;
  flex-wrap: nowrap;
  scrollbar-width: none;
}


#catPills::-webkit-scrollbar {
  display: none;
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

.nav-item {
  margin: 10px;
  white-space: nowrap;
}

.projectPages{
  max-width: fit-content;
  margin: auto;
}
</style>
