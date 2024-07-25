<script setup lang="ts">
import GoogleBTN from './WithGoogle.vue'
import useFormApi from './SignupLoginApi'
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
const toSwitch = () => {
  isLogin.value = !isLogin.value
}

const { formData, message, userLogin } = useFormApi()
</script>

<template>
  <div class="pt-16 pb-28">
    <div v-if="isLogin">
      <h1 class="text-center BigTitle mb-15">註冊</h1>
      <form @submit.prevent="userLogin" class="flex justify-center">
        <div>
          <label for="account" class="MediumText">帳號：</label>
          <input
            id="account"
            v-model="formData.account"
            class="FromInputStyle"
            type="text"
            required
          />
          <label for="password" class="MediumText">密碼：</label>
          <input
            id="password"
            v-model="formData.password"
            class="FromInputStyle"
            type="password"
            required
          />
          <label for="passwordRepeat" class="MediumText">再重複一次密碼：</label>
          <input
            id="passwordRepeat"
            v-model="formData.passwordRepeat"
            class="FromInputStyle"
            type="password"
            required
          />

          <div class="flex flex-col items-center">
            <button type="submit" class="FromBTNStyle">確定</button>
            <p @click="toSwitch" class="FromMoreBtnStyle">已有帳號？登入吧 >></p>
          </div>
        </div>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>

    <div v-else>
      <h1 class="text-center BigTitle mb-15">登入</h1>
      <form class="flex justify-center">
        <div>
          <label class="MediumText">帳號：</label>
          <input class="FromInputStyle" type="text" required />
          <label class="MediumText">密碼：</label>
          <input class="FromInputStyle" type="password" required />

          <div class="flex flex-col items-center">
            <button class="FromBTNStyle">確定</button>
            <p @click="toSwitch" class="FromMoreBtnStyle">沒有帳號？前往註冊 >></p>
          </div>
        </div>
      </form>
    </div>

    <div class="w-full border-t-2 my-16"></div>
    <div>
      <GoogleBTN />
    </div>
  </div>
</template>
