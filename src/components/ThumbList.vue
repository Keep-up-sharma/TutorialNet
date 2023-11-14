<template>
    <div class="thumblist translate">
        <div class="projectThumb" v-for="slide in project.slides" data-bs-target="#slidesCrousel" :data-bs-slide-to="slide.num">
            {{ slide.title }}
        </div>
    </div>
    <div v-if="(project.creator == username)">
        <button class="btn btn-success notranslate" data-bs-toggle="modal" data-bs-target="#myModal">Add Slide</button>
      </div>
</template>


<script>
export default {
    props: ["project","username"],
    emits:["onSlideSelect"]
}
</script>

<style scoped>

.thumblist{
    max-height: 70vh;
    justify-content: space-around;
    overflow: scroll;
}

.projectThumb {
    flex: 1;
    min-width: 200px;
    max-width: 200px;
    padding: 6px;
    margin: 10px;
    text-align:center;
    max-height: 80px;
    background-color: aqua;
    border-radius: 0px 20px;

}

.projectThumb:hover{
    cursor: pointer;
}
</style>