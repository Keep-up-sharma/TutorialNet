<template>
  <div v-if="(project.creator == username)">
    <button data-bs-toggle="modal" data-bs-target="#myModal">Add Slide</button>
  </div>
  <AddSlideForm :id="project.id"
    :num="(project.slides.length < 1) ? 1 : (project.slides[project.slides.length - 1].num+1)" />
  <main v-if="project.title" class="notranslate">
    <div id="content">
      <aside>
        <div>
          <div id="projectThumb" v-if="project.thumbnailUrl"><img :src="this.host + '/' + project.thumbnailUrl"
              alt="thumbnail"></div>
          {{ project.title }}
        </div>
        <ThumbList :project=project @onSlideSelect="(i) => activeSlide = i" />
      </aside>

      <div id="slidesCrousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="slide in project.slides" class="carousel-item" :class="{ 'active': (slide.num == activeSlide) }"
            data-bs-interval="100000">
            <Slide @speakingDone="if (slide.num != project.slides.length) {
              activeSlide++;
            }" :slide="slide" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
  
<script>
import Slide from "../components/Slide.vue";
import ThumbList from "../components/ThumbList.vue";
import HomeNavBar from '../components/HomeNavBar.vue'
import AddSlideForm from '../components/AddSlideForm.vue'
export default {
  components: { ThumbList, Slide, HomeNavBar, AddSlideForm },
  mounted() {
    $('.summernote').summernote();
  },
  data() {
    this.getData();
    return {
      'project':
      {
      },
      'username': '',
      "activeSlide": 1

    }
  },
  methods: {
    async getData() {
      const res = await fetch(this.host + "/getProject.php?id=" + this.$route.query.id);
      const project = await res.json();
      if (!project['id'] || project['title'] != this.$route.query.title.replace('-', ' ')) {
        this.$router.push('/404')
      }
      this.project = project;
      this.username = window.username;
    },
  }

}
</script>
  
<style>
#content {
  display: flex;
  max-width: 100%;
  justify-content: space-around;
}

aside {
  min-width: max-content;
}

#projectThumb img {
  max-width: 150px;
}
</style>
  