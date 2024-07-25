<script setup lang="ts">
import googleIcon from '../../img/google.svg'
</script>

<template>
  <div class="flex justify-center">
    <button
      class="flex justify-center py-3 px-14 border-2 rounded shadow-md duration-300 hover:shadow-lg"
    >
      <img :src="googleIcon" />
      <h1 class="MediumText">使用Google登入</h1>
    </button>
  </div>
</template>
