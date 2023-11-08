import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App)
app.config.globalProperties.host = 'http://localhost/TutoriaNetBackend/TutorialNetBackend';

app.use(router)
app.use(VueCookies);

app.mount('#app')
