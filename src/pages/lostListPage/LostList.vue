<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import axios from 'axios'

interface ItemData {
  src: string
  alt: string
}

const items = ref<ItemData[]>([])

items.value = [
  { src: 'https://via.placeholder.com/200x100', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/200x350', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/300x400', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/200x250', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/300x650', alt: 'Image 5' },
  { src: 'https://via.placeholder.com/200x450', alt: 'Image 6' },
  { src: 'https://via.placeholder.com/200x550', alt: 'Image 7' }
]
</script>

<template>
  <div class="container max-w-[1200px] mx-auto px-5">
    <MasonryWall :items="items" :ssr-columns="2" :column-width="200" :gap="20">
      <template v-slot:default="{ item }: { item: ItemData }">
        <div
          class="mb-4 overflow-hidden rounded-lg shadow-sm transition-transform duration-300 hover:shadow-md"
        >
          <img :src="item.src" :alt="item.alt" class="w-full h-auto object-cover" />
        </div>
      </template>
    </MasonryWall>
  </div>
</template>
