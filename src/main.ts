import { createApp } from 'vue'
import App from './App.vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import router from './global/footer/RouterSwitch'

const app = createApp(App)

app.use(MasonryWall)
app.use(router)
app.mount('#app')
