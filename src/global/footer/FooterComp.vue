<script setup lang="ts">
import Footer01 from '../../img/footer/footer01.svg'
import Footer02 from '../../img/footer/footer02.svg'
import Footer03 from '../../img/footer/footer03.svg'
</script>
<template>
  <div class="grid bg-ifoundBlue h-14 rounded-t">
    <div class="flex justify-around px-8">
      <button><img :src="Footer01" /></button>
      <div class="w-[1px] bg-white mx-0"></div>
      <button><img :src="Footer02" /></button>
      <div class="w-[1px] bg-white mx-0"></div>
      <button><img :src="Footer03" /></button>
    </div>
  </div>
</template>
