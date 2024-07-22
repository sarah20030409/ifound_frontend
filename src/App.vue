<script setup lang="ts">
import './assets/style.css'
import { ref } from 'vue'
import HeaderComp from './global/header/HeaderComp.vue'
import FooterComp from './global/footer/FooterComp.vue'
</script>

<template>
  <div class="wrapFrame bg-tagBlue h-full lg:mx-[25%]">
    <header class="fixed top-0 w-full lg:w-[50%]">
      <HeaderComp />
    </header>
    <div></div>
    <footer class="fixed bottom-0 w-full lg:w-[50%]">
      <FooterComp />
    </footer>
  </div>
</template>
