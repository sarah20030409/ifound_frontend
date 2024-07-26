<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import axios from 'axios'

interface ItemData {
  src: string
  alt: string
  word: void
}

const items = ref<ItemData[]>([])

const randomData = ref('')
const loadData = async () => {
  try {
    const response = await axios.get('https://random-word-api.herokuapp.com/word')
    randomData.value = response.data
  } catch (err) {
    console.error('Failed to fetch fruit data!!:', err)
    randomData.value = 'Failed to load fruit data'
  }
}

const loadItems = async () => {
  const words = await Promise.all(
    Array(7)
      .fill(0)
      .map(() => loadData())
  )
  items.value = [
    { src: 'https://via.placeholder.com/200x100', alt: 'Image 1', word: words[0] },
    { src: 'https://via.placeholder.com/200x350', alt: 'Image 2', word: words[1] },
    { src: 'https://via.placeholder.com/300x400', alt: 'Image 3', word: words[2] },
    { src: 'https://via.placeholder.com/200x250', alt: 'Image 4', word: words[3] },
    { src: 'https://via.placeholder.com/300x650', alt: 'Image 5', word: words[4] },
    { src: 'https://via.placeholder.com/200x450', alt: 'Image 6', word: words[5] },
    { src: 'https://via.placeholder.com/200x550', alt: 'Image 7', word: words[6] }
  ]
}

onMounted(() => {
  loadItems()
})
</script>

<template>
  <div class="container max-w-[1200px] mx-auto px-5">
    <MasonryWall :items="items" :ssr-columns="2" :column-width="200" :gap="20">
      <template v-slot:default="{ item }: { item: ItemData }">
        <div
          class="mb-4 overflow-hidden rounded-lg shadow-sm transition-transform duration-300 hover:shadow-md"
        >
          <img :src="item.src" :alt="item.alt" class="w-full h-auto object-cover" />
          <h1>{{ item.word }}</h1>
        </div>
      </template>
    </MasonryWall>
  </div>
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue'

const images = ref<Array<{ src: string }>>([
  { src: 'https://via.placeholder.com/200x300' },
  { src: 'https://via.placeholder.com/200x200' },
  { src: 'https://via.placeholder.com/300x400' },
  { src: 'https://via.placeholder.com/200x250' },
  { src: 'https://via.placeholder.com/300x350' },
  { src: 'https://via.placeholder.com/200x450' },
  { src: 'https://via.placeholder.com/200x150' }
])
</script>

<template>
  <MasonryWall :items="images" :column-width="160" :gap="2">
    <div class="flex flex-col justify-center" v-for="(image, index) in images" :key="index">
      <div class="flex justify-center">
        <img class="py-2 max-w-40" :src="image.src" />
      </div>
    </div>
  </MasonryWall>
</template> -->
