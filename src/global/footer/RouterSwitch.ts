import { createRouter, createWebHistory } from 'vue-router'
import LostList from '@/pages/lostListPage/mainListPage/LostList.vue'
import SignupLogin from '@/pages/signupLoginPage/SignupLogin.vue'
import UploadPage from '@/pages/uploadPage/UploadPage.vue'
import userSelfListPage from '@/pages/lostListPage/userSelfListPage/UserSelfLostList.vue'

const routes = [
  { path: '/', component: LostList },
  { path: '/signupLogin', component: SignupLogin },
  { path: '/uploadItem', component: UploadPage },
  { path: '/userSelfListPage', component: userSelfListPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
