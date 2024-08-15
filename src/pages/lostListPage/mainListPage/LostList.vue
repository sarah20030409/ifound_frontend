<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import useGetLostApi from './LostListApi'
import type { ItemData } from './LostListApi'
import 'animate.css'

const { lostItem, items } = useGetLostApi()
const loading = ref<boolean>(true)

onMounted(async () => {
  try {
    loading.value = true
    await lostItem()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container max-w-[1200px] mx-auto px-5 pb-12">
    <div v-if="loading" class="text-center font-bold py-20 text-ifoundBlue">
      <p class="text-2xl animate__animated animate__bounce">載入中...</p>
    </div>
    <MasonryWall v-else :items="items" :ssr-columns="2" :column-width="200" :gap="20">
      <template #default="slotProps">
        <div class="mb-4 overflow-hidden transition-transform duration-300 hover:cursor-pointer">
          <img
            :src="(slotProps.item as ItemData).src"
            :alt="(slotProps.item as ItemData).alt"
            class="w-full h-auto object-cover rounded-md hover:shadow-lg"
          />
          <div>
            <p class="TagCyan inline-block">{{ (slotProps.item as ItemData).tag }}</p>
            <p class="TagOrange inline-block">排版測試</p>
            <p class="inline-block">...</p>
          </div>
        </div>
      </template>
    </MasonryWall>
  </div>
</template>
