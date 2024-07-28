import { createApp } from 'vue'
import App from './App.vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import router from './global/footer/RouterSwitch'
import { createPinia } from 'pinia'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

axios.defaults.baseURL = 'http://localhost:8000/api'
// axios.defaults.xsrfCookieName = 'csrfToken'
// axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
// axios.defaults.withCredentials = true

app.use(pinia)
app.use(MasonryWall)
app.use(router)
app.mount('#app')
