<template>
  <div class="notranslate row tutorialsGrid">
    <div v-for="project in projects" class="card tutorialCard" style="width: 18rem;">
      <img src="https://picsum.photos/id/237/200/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <a class="card-text" data-bs-toggle="collapse" :href="'#slides' + project.id" :aria-controls="'slides' + project.id"
          role="button" aria-expanded="false">
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
    return {
      'projects': [
        {
          "name": "Tennis Basics", "id": 0, "slides": [
            {
              "id": 0,
              'title': "duh",
              "text": "Tennis is a popular racket sport that can be played individually against a single opponent (singles) or in teams of two players each (doubles). The game is played on a rectangular court with a net in the middle."
            },
            {
              "id": 1,
              'title': "duh",
              "text": "The players use tennis rackets strung with cord to hit a hollow rubber ball covered with felt. The objective is to hit the ball over or around the net and into the opponent's court in a way that the opponent cannot return it properly."
            },
            {
              "id": 2,
              'title': "duh",
              "text": "Scoring in tennis is done using a system of points, games, and sets. A player or team must win a set by winning at least six games with a two-game advantage. To win a game, a player must score four points with a two-point advantage."
            },
            {
              "id": 3,
              'title': "duh",
              "text": "Tennis is known for its different playing surfaces, such as grass, clay, and hard court. Each surface influences the speed and bounce of the ball, affecting the playing style and strategy."
            },
            {
              "id": 4,
              'title': "duh",
              "text": "The four major tennis tournaments, known as Grand Slam events, are the Australian Open, French Open, Wimbledon, and the US Open. These tournaments attract the world's best tennis players and have a rich history of competition and tradition."
            },
            {
              "id": 5,
              'title': "duh",
              "text": "In doubles, two players on each team take turns hitting the ball. Communication and teamwork are crucial for success in doubles play. Players need to cover the court efficiently and coordinate their movements."
            },
            {
              "id": 6,
              'title': "duh",
              "text": "Tennis requires a combination of physical fitness, skill, and mental toughness. Players need to be agile, have good hand-eye coordination, and make strategic decisions during the match."
            }
          ]

        },
        {
          "name": "Tennis Basics", "id": 1, "slides": [
            {
              "id": 0,
              'title': "duh",
              "text": "Tennis is a popular racket sport that can be played individually against a single opponent (singles) or in teams of two players each (doubles). The game is played on a rectangular court with a net in the middle."
            },
            {
              "id": 1,
              'title': "duh",
              "text": "The players use tennis rackets strung with cord to hit a hollow rubber ball covered with felt. The objective is to hit the ball over or around the net and into the opponent's court in a way that the opponent cannot return it properly."
            },
            {
              "id": 2,
              'title': "duh",
              "text": "Scoring in tennis is done using a system of points, games, and sets. A player or team must win a set by winning at least six games with a two-game advantage. To win a game, a player must score four points with a two-point advantage."
            },
            {
              "id": 3,
              'title': "duh",
              "text": "Tennis is known for its different playing surfaces, such as grass, clay, and hard court. Each surface influences the speed and bounce of the ball, affecting the playing style and strategy."
            },
            {
              "id": 4,
              'title': "duh",
              "text": "The four major tennis tournaments, known as Grand Slam events, are the Australian Open, French Open, Wimbledon, and the US Open. These tournaments attract the world's best tennis players and have a rich history of competition and tradition."
            },
            {
              "id": 5,
              'title': "duh",
              "text": "In doubles, two players on each team take turns hitting the ball. Communication and teamwork are crucial for success in doubles play. Players need to cover the court efficiently and coordinate their movements."
            },
            {
              "id": 6,
              'title': "duh",
              "text": "Tennis requires a combination of physical fitness, skill, and mental toughness. Players need to be agile, have good hand-eye coordination, and make strategic decisions during the match."
            }
          ]
        },
        {
          "name": "Tennis Basics", "id": 2, "slides": [
            {
              "id": 0,
              'title': "duh",
              "text": "Tennis is a popular racket sport that can be played individually against a single opponent (singles) or in teams of two players each (doubles). The game is played on a rectangular court with a net in the middle."
            },
            {
              "id": 1,
              'title': "duh",
              "text": "The players use tennis rackets strung with cord to hit a hollow rubber ball covered with felt. The objective is to hit the ball over or around the net and into the opponent's court in a way that the opponent cannot return it properly."
            },
            {
              "id": 2,
              'title': "duh",
              "text": "Scoring in tennis is done using a system of points, games, and sets. A player or team must win a set by winning at least six games with a two-game advantage. To win a game, a player must score four points with a two-point advantage."
            },
            {
              "id": 3,
              'title': "duh",
              "text": "Tennis is known for its different playing surfaces, such as grass, clay, and hard court. Each surface influences the speed and bounce of the ball, affecting the playing style and strategy."
            },
            {
              "id": 4,
              'title': "duh",
              "text": "The four major tennis tournaments, known as Grand Slam events, are the Australian Open, French Open, Wimbledon, and the US Open. These tournaments attract the world's best tennis players and have a rich history of competition and tradition."
            },
            {
              "id": 5,
              'title': "duh",
              "text": "In doubles, two players on each team take turns hitting the ball. Communication and teamwork are crucial for success in doubles play. Players need to cover the court efficiently and coordinate their movements."
            },
            {
              "id": 6,
              'title': "duh",
              "text": "Tennis requires a combination of physical fitness, skill, and mental toughness. Players need to be agile, have good hand-eye coordination, and make strategic decisions during the match."
            }
          ]
        },
        {
          "name": "Tennis Basics", "id": 3, "slides": [
            {
              "id": 0,
              'title': "duh",
              "text": "Tennis is a popular racket sport that can be played individually against a single opponent (singles) or in teams of two players each (doubles). The game is played on a rectangular court with a net in the middle."
            },
            {
              "id": 1,
              'title': "duh",
              "text": "The players use tennis rackets strung with cord to hit a hollow rubber ball covered with felt. The objective is to hit the ball over or around the net and into the opponent's court in a way that the opponent cannot return it properly."
            },
            {
              "id": 2,
              'title': "duh",
              "text": "Scoring in tennis is done using a system of points, games, and sets. A player or team must win a set by winning at least six games with a two-game advantage. To win a game, a player must score four points with a two-point advantage."
            },
            {
              "id": 3,
              'title': "duh",
              "text": "Tennis is known for its different playing surfaces, such as grass, clay, and hard court. Each surface influences the speed and bounce of the ball, affecting the playing style and strategy."
            },
            {
              "id": 4,
              'title': "duh",
              "text": "The four major tennis tournaments, known as Grand Slam events, are the Australian Open, French Open, Wimbledon, and the US Open. These tournaments attract the world's best tennis players and have a rich history of competition and tradition."
            },
            {
              "id": 5,
              'title': "duh",
              "text": "In doubles, two players on each team take turns hitting the ball. Communication and teamwork are crucial for success in doubles play. Players need to cover the court efficiently and coordinate their movements."
            },
            {
              "id": 6,
              'title': "duh",
              "text": "Tennis requires a combination of physical fitness, skill, and mental toughness. Players need to be agile, have good hand-eye coordination, and make strategic decisions during the match."
            }
          ]
        }]
    }
  },
  methods: {
    goToProject(id) {
      this.$router.push({
        path: 'tutorial/' + id,
      });

    }
  }
}
</script>

<style>
.tutorialCard {
  margin: 20px;
  margin-bottom: auto;
}
.tutorialsGrid{
  justify-content: space-around;
}
</style>
