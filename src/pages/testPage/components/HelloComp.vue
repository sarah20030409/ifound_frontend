<script setup lang="ts">
// import { ref } from 'vue'
defineProps<{
  name: String
}>()

const tagsStyle: Array<String> = [
  'TagRed',
  'TagOrange',
  'TagGreen',
  'TagCyan',
  'TagBlue',
  'TagPurple',
  'TagMagenta'
]
</script>

<template>
  <div class="grid grid-cols-2 space-x-2">
    <div class="bg-tagRed border-4 border-tagRedText">
      <h1 class="text-3xl font-bold p-4 mb-[10px] text-tagRedText lg:text-tagOrangeText">
        Hello! {{ name }}, this is IFound frontend ! There are test page.
      </h1>
    </div>

    <div class="outerFrame">
      <div v-for="(tag, index) in tagsStyle" :key="index" :class="tag">
        <p>{{ tagsStyle[index] }}</p>
      </div>
    </div>
  </div>

  <!-- Grid -->
  <div class="grid grid-cols-3 lg:grid-cols-4 mt-20 gap-4">
    <div :class="tagsStyle[5]" class="row-span-2 blur-sm">000</div>
    <div :class="tagsStyle[5]" class="scale-75 skew-y-3">000</div>
    <div :class="tagsStyle[5]" class="col-span-2 drop-shadow-xl grayscale">000</div>
    <div :class="tagsStyle[5]" class="invert">000</div>
    <div :class="tagsStyle[5]">000</div>
  </div>

  <!-- Text area -->
  <div class="mt-20 mx-3">
    <div class="BigTitle">區塊標題 | 30px | #615F5F</div>
    <div class="MediumText">中型文字 | 20px | #615F5F</div>
    <div class="AwardTitle">獎項標題 | 18px | #615F5F</div>
    <div class="NormalText">內文 | 16px | #615F5F</div>
    <div class="DesText">描述文 | 14px | #8D8D8D</div>
  </div>
</template>
