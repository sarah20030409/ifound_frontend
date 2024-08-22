<script setup lang="ts">
import trophy from '@/img/yellow_trophy.png'
import star from '@/img/star.png'
import JSConfetti from 'js-confetti'
import { ref } from 'vue'

interface achievementType {
  id: number
  title: string
  description: string
  amount: number
}

const testAmount = ref<number>(50) // fetch upload amount to replace this
const jsConfetti = new JSConfetti()
const achievemetList = ref<Array<achievementType>>([
  { id: 1, title: '拾獲10件', description: '真是一個好良民', amount: 10 },
  { id: 2, title: '拾獲20件', description: '看來你很擅長找東西', amount: 20 },
  { id: 3, title: '拾獲50件', description: '好人一生平安', amount: 50 },
  { id: 4, title: '拾獲80件', description: '祝你上廁所都有衛生紙', amount: 80 },
  { id: 5, title: '拾獲100件', description: '東西都是你偷的吧..', amount: 100 },
  { id: 6, title: '拾獲200件', description: '遺失物超人', amount: 200 },
  { id: 7, title: '拾獲500件', description: '請你專心走路', amount: 500 },
  { id: 8, title: '拾獲1000件', description: '你撿到的東西是不是可以蓋一間房子了', amount: 1000 }
])

jsConfetti.addConfetti({
  confettiColors: ['#f7b32b', '#ED6E13', '#fff', '#DE4D4A', '#1D6AA2'],
  confettiRadius: 6,
  confettiNumber: 200
})
</script>

<template>
  <div class="flex justify-center">
    <div class="w-full">
      <!-- trophy -->
      <div class="mb-20">
        <div class="flex justify-center">
          <img :src="trophy" />
        </div>
        <p class="pt-15 MediumText text-center">拾獲共{{ testAmount }}件數</p>
      </div>

      <!-- list -->
      <div class="mx-12 mb-24">
        <div
          :class="testAmount >= achievemet.amount ? 'achievementAchieve' : 'achievementNotAchieve'"
          v-for="achievemet in achievemetList"
          :key="achievemet.id"
        >
          <div class="mt-4">
            <p class="DesText">
              {{ achievemet.title }}
            </p>
            <p class="AwardTitle">
              {{ achievemet.description }}
            </p>
          </div>
          <div>
            <img
              :class="testAmount >= achievemet.amount ? 'colorfulStar' : 'grayStar'"
              :src="star"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
