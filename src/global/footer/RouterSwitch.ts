import { createRouter, createWebHistory } from 'vue-router'
import LostList from '../../pages/lostListPage/LostList.vue'
import SignupLogin from '../../pages/signupLoginPage/SignupLogin.vue'

const routes = [
  { path: '/', component: LostList },
  { path: '/signupLogin', component: SignupLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
