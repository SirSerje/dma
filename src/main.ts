import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Application from './ApplicationComponent.vue'

const app = createApp(Application)
app.use(createPinia())

app.mount('#app')
