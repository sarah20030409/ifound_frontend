<script setup lang="ts">
import './assets/style.css'
import { ref } from 'vue'
import HelloComp from './pages/testPage/components/HelloComp.vue'

const myName = ref('User')
</script>

<template>
  <div class="">
    <HelloComp :name="myName" />
  </div>
</template>
