<template>
    <div class="slide translate" ref="thisSlide" v-html="slide.content" @click="toggleSpeech">
    </div>
    <div class="btn-group" role="group" aria-label="Text-to-Speech Controls">
        <button class="btn btn-primary" @click="play">Play</button>
        <button class="btn btn-secondary" @click="pause" :disabled="!isSpeaking">Pause</button>
        <button class="btn btn-success" @click="resume" :disabled="!isPaused">Resume</button>
    </div>
    
</template>
  
<script>
export default {
    props: ["slide"],
    data() {
        return {
            isSpeaking: false,
            isPaused: false,
            utterance: null,
        };
    },
    mounted() {
        this.initializeVoices();
    },
    emits: ["speakingDone"],
    methods: {
        initializeVoices() {
            // Fetch and initialize voices when the component is mounted
            speechSynthesis.getVoices();
        },
        play() {
            this.isSpeaking = true;
            this.isPaused = false;
            this.utterance = new SpeechSynthesisUtterance(this.$refs.thisSlide.innerText);
            this.setVoice();
            speechSynthesis.speak(this.utterance);
            this.utterance.addEventListener("end", this.handleEnd);
        },
        pause() {
            if (this.isSpeaking && !this.isPaused) {
                speechSynthesis.pause();
                this.isPaused = true;
            }
        },
        resume() {
            if (this.isSpeaking && this.isPaused) {
                speechSynthesis.resume();
                this.isPaused = false;
            }
        },
        toggleSpeech() {
            if (this.isSpeaking) {
                this.pause();
            } else {
                this.play();
            }
        },
        setVoice() {
            try {
                let currLanguage;
                if (document.getElementsByClassName("goog-te-combo").length > 0)
                    currLanguage = document.getElementsByClassName("goog-te-combo")[0].options[document.getElementsByClassName("goog-te-combo")[0].selectedIndex].text.toLowerCase()
                else currLanguage = document.getElementById(':0.container').contentWindow.document.getElementsByClassName("VIpgJd-ZVi9od-xl07Ob-lTBxed")[0].innerText.toLowerCase();
                let voiceAvailable = false;
                for (let voice of speechSynthesis.getVoices()) {
                    if (voice.name.toLowerCase().includes(currLanguage)) {
                        this.utterance.voice = voice;
                        voiceAvailable = true;
                    }
                }

            } catch (error) {
                console.log(error);
            }
        },
        handleEnd() {
            this.isSpeaking = false;
            this.$emit("speakingDone");
        },
    },
};
</script>
  
<style scoped>
.slide {
    background-color: white;
    border: 1px solid grey;
    min-height: 70vh;
    min-width: 65vw;
    margin: 30px;
    border-radius: 5px;
    font-size: 2em;
}
</style>
  