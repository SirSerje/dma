import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import App from './App.vue'
import Application from './Application.vue'

//const app = createApp(App)
const app = createApp(Application)
app.use(createPinia())

app.mount('#app')
