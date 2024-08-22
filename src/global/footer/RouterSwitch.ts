import { createRouter, createWebHistory } from 'vue-router'
import LostList from '@/pages/lostListPage/mainListPage/LostList.vue'
import SignupLogin from '@/pages/signupLoginPage/SignupLogin.vue'
import UploadPage from '@/pages/uploadPage/UploadPage.vue'
import UserSelfListPage from '@/pages/lostListPage/userSelfListPage/UserSelfLostList.vue'
import LostInfoPage from '@/pages/lostInfoPage/LostInfoPage.vue'
import AchievementPage from '@/pages/achievementPage/AchievementPage.vue'

const routes = [
  { path: '/', component: LostList },
  { path: '/signupLogin', component: SignupLogin },
  { path: '/uploadItem', component: UploadPage },
  { path: '/userSelfListPage', component: UserSelfListPage },
  { path: '/lostInfoPage', component: LostInfoPage },
  { path: '/achievementPage', component: AchievementPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
