<script setup lang="ts">
import GoogleBTN from './WithGoogle.vue'
import useSignupApi from './SignupLoginApi'
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
const setPasswordRepeat = ref<string>('')
const toSwitch = () => {
  isLogin.value = !isLogin.value
}

const { formData, message, postToSignup, formatValidation } = useSignupApi()
</script>

<template>
  <div class="pt-16 pb-28">
    <div v-if="isLogin">
      <h1 class="text-center BigTitle mb-15">註冊</h1>
      <form @submit.prevent="formatValidation" class="flex justify-center">
        <div>
          <label for="account" class="MediumText">帳號(10字以上)：</label>
          <input
            id="account"
            v-model="formData.account"
            class="FormInputStyle"
            type="email"
            required
          />
          <label for="password" class="MediumText">密碼：</label>
          <input
            id="password"
            v-model="formData.password"
            class="FormInputStyle"
            type="password"
            required
          />
          <label for="passwordRepeat" class="MediumText">再重複一次密碼：</label>
          <input
            id="passwordRepeat"
            v-model="setPasswordRepeat"
            class="FormInputStyle"
            type="password"
            required
          />
          <p class="FormWarningStyle" v-if="message">⚠{{ message }}⚠</p>
          <p class="FormWarningStyle" v-if="formData.account.length < 10">⚠帳號低於10字⚠</p>
          <p class="FormWarningStyle" v-if="formData.password !== setPasswordRepeat">
            ⚠密碼不一致
          </p>

          <div class="flex flex-col items-center">
            <button
              :disabled="
                formData.account.length > 10 ||
                formData.password === '' ||
                setPasswordRepeat === '' ||
                formData.password !== setPasswordRepeat
              "
              :class="[
                formData.account.length > 10 ||
                formData.password === '' ||
                setPasswordRepeat === '' ||
                formData.password !== setPasswordRepeat
                  ? 'FormBTNDisabledStyle'
                  : 'FormBTNStyle'
              ]"
              type="submit"
            >
              確定
            </button>
            <p @click="toSwitch" class="FormMoreBtnStyle">已有帳號？登入吧 >></p>
          </div>
        </div>
      </form>
    </div>

    <div v-else>
      <h1 class="text-center BigTitle mb-15">登入</h1>
      <form class="flex justify-center">
        <div>
          <label class="MediumText">帳號：</label>
          <input class="FormInputStyle" type="text" required />
          <label class="MediumText">密碼：</label>
          <input class="FormInputStyle" type="password" required />

          <div class="flex flex-col items-center">
            <button class="FormBTNStyle">確定</button>
            <p @click="toSwitch" class="FormMoreBtnStyle">沒有帳號？前往註冊 >></p>
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
