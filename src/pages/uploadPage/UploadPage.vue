<script lang="ts" setup>
import useToUploadApi from './UploadApi'

const { postToUpload, uploadData } = useToUploadApi()
</script>

<template>
  <div class="container max-w-[1200px] mx-auto px-6 py-5">
    <form @submit.prevent="postToUpload" class="flex justify-center">
      <div>
        <!-- Image -->
        <div class="pb-7">
          <label for="image" class="MediumText">
            失物圖片<span class="text-ifoundRed text-2xl">*</span>
          </label>
          <input id="image" type="file" class="pl-15" required />
        </div>

        <!-- Name -->
        <div>
          <label for="name" class="MediumText pb-1 block">
            失物名稱<span class="text-ifoundRed text-2xl">*</span> :
          </label>
          <input
            id="name"
            v-model="uploadData.name"
            type="text"
            class="FormInputStyle w-96"
            autocomplete="off"
            required
          />
        </div>

        <!-- tag -->
        <div>
          <label for="tag" class="MediumText pb-1 block"> 類別標籤： </label>
          <input
            id="tag"
            v-model="uploadData.tag"
            type="text"
            class="FormInputStyle w-96"
            autocomplete="off"
          />
        </div>

        <!-- description -->
        <div>
          <label for="description" class="MediumText pb-1 block"> 失物描述： </label>
          <textarea
            id="description"
            v-model="uploadData.description"
            class="FormInputStyle w-96 h-20 py-1"
            autocomplete="off"
          ></textarea>
        </div>

        <!-- location -->
        <div>
          <label for="location" class="MediumText pb-1 block"> 拾獲位置： </label>
          <input
            id="location"
            v-model="uploadData.location"
            type="text"
            class="FormInputStyle w-96"
            autocomplete="off"
          />
        </div>

        <!-- current location -->
        <div>
          <label for="currentLocation" class="MediumText pb-1 block">
            當前位置<span class="text-ifoundRed text-2xl">*</span> :
          </label>
          <input
            id="currentLocation"
            type="text"
            v-model="uploadData.currentLocation"
            class="FormInputStyle w-96"
            autocomplete="off"
            required
          />
        </div>

        <div class="flex flex-col items-center">
          <button class="FormBTNStyle">上傳</button>
        </div>
      </div>
    </form>
  </div>
</template>
