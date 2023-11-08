<template>
    <div class="thumblist">
        <div class="projectThumb" v-for="slide in project.slides" data-bs-target="#slidesCrousel" :data-bs-slide-to="slide.id">
            {{ slide.title }}
        </div>
    </div>
</template>


<script>
export default {
    props: ["project"],
    emits:["onSlideSelect"]
}
</script>

<style scoped>

.thumblist{
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-around;
    overflow: scroll;
}

.projectThumb {
    flex: 1;
    min-width: 200px;
    margin: 10px;

    background-color: aqua;
    border-radius: 0px 20px;

}

.projectThumb:hover{
    cursor: pointer;
}
</style>