<script setup lang="ts">
import './assets/style.css'
import HeaderComp from './global/header/HeaderComp.vue'
import FooterComp from './global/footer/FooterComp.vue'
import useGetToken from './global/api/GetTokenApi'
import useGetPermission from './global/api/GetPermissionApi'
import { onMounted, ref } from 'vue'

const { token, getToken } = useGetToken()
const { getPermission, permission } = useGetPermission()
const tokenSet = ref<boolean>(false)

onMounted(async () => {
  {
    if (!tokenSet.value) {
      await getToken()
      await getPermission()
      tokenSet.value = true
    } else {
      await getPermission()
    }
    console.log('permission:' + permission.value)
  }
})
</script>

<template>
  <div class="wrapFrame h-full lg:mx-[25%]">
    <header class="fixed top-0 w-full lg:w-[50%]">
      <HeaderComp />
    </header>
    <div class="mt-24">
      <RouterView />
    </div>
    <footer class="fixed bottom-0 w-full lg:w-[50%]">
      <FooterComp />
    </footer>
  </div>
</template>
