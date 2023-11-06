<template>
    <div class="slide translate" ref="thisSlide" @click="speak">
        {{ slide.text }}
    </div>
</template>

<script>
export default {
    props: ["slide"],
    methods: {
        speak() {
            let currLanguage = document.getElementsByClassName("goog-te-combo")[0].options[document.getElementsByClassName("goog-te-combo")[0].selectedIndex].text.toLowerCase();
            let utterance = new SpeechSynthesisUtterance(this.$refs.thisSlide.innerText);
            let voiceAvailable = false;
            for (let voice of speechSynthesis.getVoices()) {
                if (voice.name.toLowerCase().includes(currLanguage)) {
                    utterance.voice = voice;
                    voiceAvailable = true;
                }
            }
            if (voiceAvailable) {
                speechSynthesis.speak(utterance);
            }
            else {
                alert("Your browser does not have speech support for " + currLanguage)
            }
        }
    }
}
</script>

<style scoped>
.slide {
    background-color: aqua;
    min-height: 80vh;
    min-width: 65vw;
    margin: 30px;
    border-radius: 5px;
    font-size: 2em;
}
</style>