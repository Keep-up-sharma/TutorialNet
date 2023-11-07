<template>
    <div class="slide translate" ref="thisSlide" @click="speak">
        {{ slide.text }}
    </div>
</template>

<script>
export default {
    props: ["slide"],
    emits: "speakingDone",
    methods: {
        speak() {
            let utterance = new SpeechSynthesisUtterance(this.$refs.thisSlide.innerText);
            try {
                let currLanguage;
                if (document.getElementsByClassName("goog-te-combo").length > 0)
                    currLanguage = document.getElementsByClassName("goog-te-combo")[0].options[document.getElementsByClassName("goog-te-combo")[0].selectedIndex].text.toLowerCase()
                else currLanguage = document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-xl07Ob-lTBxed")[0].innerText.toLowerCase();
                let voiceAvailable = false;
                for (let voice of speechSynthesis.getVoices()) {
                    if (voice.name.toLowerCase().includes(currLanguage)) {
                        utterance.voice = voice;
                        voiceAvailable = true;
                    }
                }

            } catch (error) {
            }
            speechSynthesis.speak(utterance);

            utterance.addEventListener("end", () => this.$emit("speakingDone"));

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