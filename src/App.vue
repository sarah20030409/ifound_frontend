<script setup lang="ts">
import { ref } from 'vue'
import HelloComp from './components/HelloComp.vue'

const myName = ref('User')
</script>

<template>
  <HelloComp :name="myName" />
</template>
