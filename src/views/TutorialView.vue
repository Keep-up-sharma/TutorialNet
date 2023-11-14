<template>
  <AddSlideForm :id="project.id"
    :num="(project.slides.length < 1) ? 1 : (project.slides[project.slides.length - 1].num+1)" />
  <main v-if="project.title" class="notranslate">
    <div id="content">
      <aside>
        <div>
          <div id="projectThumb" v-if="project.thumbnailUrl"><img :src="this.host + '/' + project.thumbnailUrl"
              alt="thumbnail"></div>
          <div id="title">{{ project.title }}</div>
        </div>
        <ThumbList :project=project @onSlideSelect="(i) => activeSlide = i" :username="username" />
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
  data() {
    this.getData();
    return {
      'project':
      {
      },
      'username': localStorage.getItem('username'),
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
  text-align: center;
  margin-block: 20px;
  min-width: max-content;
}

aside img{
  min-width: 100%;
  max-height: 100px;
  border-radius: 20px 20px 0px 0px;
}

aside #title{
  background-color:rgba(137, 43, 226, 0.307);
  padding: 5px;
}

#projectThumb img {
  max-width: 150px;
}
</style>
  