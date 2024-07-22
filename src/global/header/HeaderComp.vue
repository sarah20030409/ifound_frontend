<script setup lang="ts">
//Use setup in vue3 ,you don't need to use 'export default'
import IFlogo from '../../img/IFLogo.svg'
import searchIcon from '../../img/Search.svg'

const startSearch: () => void = () => {
  //Don't return anything, use () => void for typing
  //API
}
</script>

<template>
  <div class="py-5 bg-ifoundGary px-15">
    <div class="flex justify-between">
      <img class="mr-15" :src="IFlogo" />
      <form class="flex w-full justify-between" @submit.prevent="startSearch">
        <input
          class="flex-1 mr-15 px-4 placeholder:text-ifoundGary tracking-wide rounded-3xl"
          type="text"
          placeholder="尋找..."
        />
        <button type="submit"><img :src="searchIcon" /></button>
      </form>
    </div>

    <div></div>
  </div>
</template>
