<template>
  <div id="app">{{ id }} lol</div>
  <main class="notranslate">
    <div id="google_translate_element"></div>
    <div id="content">

      <aside>{{ project.title }}
        <ThumbList :project=project @onSlideSelect="(i) => activeSlide = i" />
      </aside>

      <div id="slidesCrousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="slide in project.slides" class="carousel-item" :class="{ 'active': (slide.num == activeSlide) }"
            data-bs-interval="100000">
            <Slide @speakingDone="if (slide.id != project.slides.length - 1) {
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
export default {
  components: { ThumbList, Slide },
  props: ['id'],
  methods: {
    async getData() {
      const res = await fetch(this.host + "/getProject.php?id=" + this.id);
      const project = await res.json();
      this.project = project;
      console.log(project);
    }
  },
  data() {
    this.getData();
    return {
      'project':
      {
      }
      ,

      "activeSlide": 1

    }
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
</style>
  