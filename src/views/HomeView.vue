<template>
  <div id="app"></div>
  <main class="notranslate">
    <div id="google_translate_element"></div>
    <div id="content">

      <aside>{{ project.name }}
        <ThumbList :project=project @onSlideSelect="(i) => activeSlide = i" />
      </aside>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="slide in project.slides" class="carousel-item" :class="{ 'active': (slide.num == activeSlide) }">
            <Slide @speakingDone="
                          if (slide.num != project.slides.length - 1) {
              activeSlide++;


            }" :slide="slide" />
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import ThumbList from "../components/ThumbList.vue";
import Slide from "../components/Slide.vue";
export default {
  components: { ThumbList, Slide },
  data() {
    return {
      'project':
      {
        "name": "Tennis Basics",
        "slides": [
          {
            "num": 0,
            'title':"duh",
            "text": "Tennis is a popular racket sport that can be played individually against a single opponent (singles) or in teams of two players each (doubles). The game is played on a rectangular court with a net in the middle."
          },
          {
            "num": 1,
            'title':"duh",
            "text": "The players use tennis rackets strung with cord to hit a hollow rubber ball covered with felt. The objective is to hit the ball over or around the net and into the opponent's court in a way that the opponent cannot return it properly."
          },
          {
            "num": 2,
            'title':"duh",
            "text": "Scoring in tennis is done using a system of points, games, and sets. A player or team must win a set by winning at least six games with a two-game advantage. To win a game, a player must score four points with a two-point advantage."
          },
          {
            "num": 3,
            'title':"duh",
            "text": "Tennis is known for its different playing surfaces, such as grass, clay, and hard court. Each surface influences the speed and bounce of the ball, affecting the playing style and strategy."
          },
          {
            "num": 4,
            'title':"duh",
            "text": "The four major tennis tournaments, known as Grand Slam events, are the Australian Open, French Open, Wimbledon, and the US Open. These tournaments attract the world's best tennis players and have a rich history of competition and tradition."
          },
          {
            "num": 5,
            "text": "In doubles, two players on each team take turns hitting the ball. Communication and teamwork are crucial for success in doubles play. Players need to cover the court efficiently and coordinate their movements."
          },
          {
            "num": 6,
            'title':"duh",
            "text": "Tennis requires a combination of physical fitness, skill, and mental toughness. Players need to be agile, have good hand-eye coordination, and make strategic decisions during the match."
          }
        ]
      }
      ,

      "activeSlide": 0

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
