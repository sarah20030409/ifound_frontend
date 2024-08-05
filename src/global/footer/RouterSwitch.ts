import { createRouter, createWebHistory } from 'vue-router'
import LostList from '@/pages/lostListPage/LostList.vue'
import SignupLogin from '@/pages/signupLoginPage/SignupLogin.vue'
import UploadPage from '@/pages/uploadPage/UploadPage.vue'

const routes = [
  { path: '/', component: LostList },
  { path: '/signupLogin', component: SignupLogin },
  { path: '/uploadItem', component: UploadPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
