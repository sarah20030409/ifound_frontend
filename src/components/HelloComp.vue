<script setup lang="ts">
// import { ref } from 'vue'
const Props: any = defineProps({
  name: String
})
</script>

<template>
  <h1>Hello! {{ name }}, this is IFound frontend !</h1>
</template>
