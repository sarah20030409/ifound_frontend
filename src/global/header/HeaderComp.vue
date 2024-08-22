<script setup lang="ts">
//Use setup in vue3 ,you don't need to use 'export default'
import IFlogo from '../../img/IFLogo.svg'
import searchIcon from '../../img/Search.svg'
import awardIcon from '../../img/awardIcon.svg'
import exitIcon from '../../img/exitIcon.svg'
import { computed } from 'vue'
import router from '../footer/RouterSwitch'

const startSearch: () => void = () => {
  //Don't return anything, use () => void for typing
  //API
}

const styleByRouter = computed(() => {
  if (
    router.currentRoute.value.path === '/' ||
    router.currentRoute.value.path === '/lostInfoPage'
  ) {
    return 'searchBar'
  }

  if (
    router.currentRoute.value.path === '/uploadItem' ||
    router.currentRoute.value.path === '/userSelfListPage'
  ) {
    return 'awardBar'
  }
  if (router.currentRoute.value.path === '/achievementPage') {
    return 'noneBar'
  }

  return 'defaultBar'
})

const switchToAchievementPage = () => {
  router.push('/achievementPage')
}
</script>

<template>
  <div v-if="styleByRouter === 'noneBar'" class="p-6 flex justify-end">
    <img class="hover:cursor-pointer" :src="exitIcon" />
  </div>
  <div v-else class="py-5 bg-ifoundGary px-15">
    <div class="flex justify-between">
      <img class="mr-15" :src="IFlogo" />
      <form
        v-if="styleByRouter === 'searchBar'"
        class="flex w-full justify-between"
        @submit.prevent="startSearch"
      >
        <input
          class="flex-1 mr-15 px-4 placeholder:text-ifoundGary tracking-wide rounded-3xl"
          type="text"
          placeholder="尋找..."
        />
        <button type="submit"><img :src="searchIcon" /></button>
      </form>
      <div v-if="styleByRouter === 'awardBar'">
        <img class="mr-15 hover:cursor-pointer" :src="awardIcon" @click="switchToAchievementPage" />
      </div>
    </div>

    <div></div>
  </div>
</template>
