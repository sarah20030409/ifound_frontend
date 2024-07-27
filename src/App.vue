<script setup lang="ts">
import './assets/style.css'
import HeaderComp from './global/header/HeaderComp.vue'
import FooterComp from './global/footer/FooterComp.vue'
import useGetToken from './pages/api/GetTokenApi'
import { onMounted } from 'vue'

const { tokenStore, getToken } = useGetToken()

onMounted(async () => {
  const token: string = await getToken()
  if (token) {
    tokenStore.setToken(token)
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
