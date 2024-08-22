<script setup lang="ts">
import locationIcon from '@/img/locationIcon.svg'
import { onMounted, ref } from 'vue'
import useLostInfoApi from '@/pages/lostInfoPage/LostInfoApi'
import axios from 'axios'

const isLoading = ref<boolean>(false)
const TestSrc = ref<string>('https://picsum.photos/550/300')
// const { getLostInfo } = useLostInfoApi()

onMounted(async () => {
  try {
    isLoading.value = true
    await axios.get('https://picsum.photos')
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div v-if="isLoading" class="text-center font-bold py-20 text-ifoundBlue">
    <p class="text-2xl animate__animated animate__bounce">載入中...</p>
  </div>
  <div v-else class="-mt-5 mb-16">
    <!-- Image -->
    <div class="w-full max-h-96 overflow-hidden flex justify-center bg-gray-200">
      <img class="object-contain" :src="TestSrc" alt="" />
    </div>

    <div class="mt-20 mx-20">
      <!-- Title -->
      <div class="flex justify-between">
        <h1 class="AwardTitle">排版測試</h1>
        <p class="DesText">UserID#PostID</p>
      </div>

      <!-- Tags -->
      <div class="mt-3 h-full">
        <p class="TagCyan">Test</p>
        <p class="TagMagenta">TestTestTestTestTest</p>
        <p class="TagGreen">Test</p>
        <p class="TagBlue">Test</p>
        <p class="TagYellow">Test</p>
        <p class="TagRed">Test</p>
      </div>

      <!-- Description -->
      <div class="mt-3 bg-gray-100 rounded-lg">
        <p class="DesText px-15 py-15 pb-11 leading-6 tracking-tighter">
          測試文字被稱為「Lorem
          Ipsum」，是一篇常用於排版設計領域的拉丁文文章，主要目的是測試文章、或是文字在不同排版下看起來的效果，中文則被稱為「亂數假文」，因為英文排版跟中文不一樣，閱讀的感覺也跟中文完全不同。
        </p>
      </div>

      <!-- Location -->
      <div class="mt-20">
        <img :src="locationIcon" alt="location" class="inline-block pb-1" />
        <p class="NormalText inline-block ml-2">拾獲位置：</p>
        <p class="NormalText inline-block ml-2">地址API丟這裡測試測試測試</p>
      </div>

      <!-- current location -->
      <div class="mt-2">
        <img :src="locationIcon" alt="location" class="inline-block pb-1" />
        <p class="NormalText inline-block ml-2">當前位置：</p>
        <p class="NormalText inline-block ml-2">
          地址API丟這裡測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試
        </p>
      </div>
    </div>
  </div>
</template>
