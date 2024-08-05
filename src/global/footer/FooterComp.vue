<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePermissionStore } from '@/store/piniaStore'
import Footer01 from '../../img/footer/footer01.svg'
import Footer02 from '../../img/footer/footer02.svg'
import Footer03 from '../../img/footer/footer03.svg'
import Footer04 from '../../img/footer/footer04.svg'

const permissionStore = usePermissionStore()
const { permission } = storeToRefs(permissionStore)

const userState = computed(() => {
  if (permission.value === 2) return 'guest'
  if (permission.value === 1) return 'admin'
  if (permission.value === 0) return 'user'
  return 'guest'
})
console.log(permission.value)
</script>
<template>
  <div class="grid bg-ifoundBlue h-14 rounded-t">
    <div v-if="userState === 'guest'" class="flex justify-around px-8">
      <RouterLink class="flex" to="/signupLogin"><img :src="Footer01" /> </RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/"><img :src="Footer02" /></RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/signupLogin"><img :src="Footer03" /></RouterLink>
    </div>

    <div v-if="userState === 'user'" class="flex justify-around px-8">
      <RouterLink class="flex" to="/uploadItem"><img :src="Footer01" /> </RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/"><img :src="Footer02" /></RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/signupLogin"><img :src="Footer03" /></RouterLink>
    </div>

    <div v-if="userState === 'admin'" class="flex justify-around px-8">
      <RouterLink class="flex" to="/"><img :src="Footer01" /> </RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/"><img :src="Footer02" /></RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/"><img :src="Footer04" /></RouterLink>
    </div>
  </div>
</template>
