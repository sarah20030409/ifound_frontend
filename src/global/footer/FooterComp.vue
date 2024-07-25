<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Footer01 from '../../img/footer/footer01.svg'
import Footer02 from '../../img/footer/footer02.svg'
import Footer03 from '../../img/footer/footer03.svg'
</script>
<template>
  <div class="grid bg-ifoundBlue h-14 rounded-t">
    <div class="flex justify-around px-8">
      <RouterLink class="flex" to="/"><img :src="Footer01" /> </RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/"><img :src="Footer02" /></RouterLink>
      <div class="w-[1px] bg-white mx-0"></div>
      <RouterLink class="flex" to="/signupLogin"><img :src="Footer03" /></RouterLink>
    </div>
  </div>
</template>
