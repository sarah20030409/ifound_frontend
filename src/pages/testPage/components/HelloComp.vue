<script setup lang="ts">
// import { ref } from 'vue'
const _props: any = defineProps({
  name: String
})
</script>

<template>
  <div class="bg-tagRed border-4 border-tagRedText">
    <h1 class="text-3xl font-bold p-4 mb-[10px] text-tagRedText lg:text-tagOrangeText">
      Hello! {{ name }}, this is IFound frontend !
    </h1>
  </div>

  <div class="tagContainer">
    <div class="TagRed">
      <p>Red</p>
    </div>

    <div class="TagOrange">
      <p>Orange</p>
    </div>

    <div class="TagGreen">
      <p>Green</p>
    </div>

    <div class="TagCyan">
      <p>Cyan</p>
    </div>

    <div class="TagBlue">
      <p>Blue</p>
    </div>

    <div class="TagPurple">
      <p>Purple</p>
    </div>

    <div class="TagMagenta">
      <p>Magenta</p>
    </div>

    <div class="TagPink">
      <p>Pink</p>
    </div>
  </div>
</template>
