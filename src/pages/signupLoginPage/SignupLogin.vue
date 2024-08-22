<script setup lang="ts">
import GoogleBTN from './WithGoogle.vue'
import useSignupApi, { useLoginApi } from './SignupLoginApi'
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
const setPasswordRepeat = ref<string>('')
const toSwitch = () => {
  isLogin.value = !isLogin.value
}

const { formData, message, postToSignup } = useSignupApi()
const { loginFormData, postToLogin, loginMessage } = useLoginApi()
const clearMessage = () => {
  message.value = ''
}

const postToSwitchLogin = () => {
  if (message.value === '註冊成功!') {
    isLogin.value = !isLogin.value
  }
}
</script>

<template>
  <div class="pt-16 pb-28">
    <div v-if="!isLogin">
      <h1 class="text-center BigTitle mb-15">註冊</h1>
      <form @submit.prevent="postToSignup" class="flex justify-center">
        <div>
          <label for="account" class="MediumText">帳號：</label>
          <input
            id="account"
            v-model="formData.Account"
            :class="/[帳號]/.test(message) ? 'FormInputStyle bg-red-100' : 'FormInputStyle'"
            @focus="clearMessage"
            type="email"
            autocomplete="off"
            required
          />
          <label for="password" class="MediumText">密碼：</label>
          <input
            id="password"
            v-model="formData.Password"
            :class="/[密碼]/.test(message) ? 'FormInputStyle bg-red-100' : 'FormInputStyle'"
            @focus="clearMessage"
            type="password"
            required
          />
          <label for="passwordRepeat" class="MediumText">再重複一次密碼：</label>
          <input
            id="passwordRepeat"
            v-model="setPasswordRepeat"
            :class="/[密碼]/.test(message) ? 'FormInputStyle bg-red-100' : 'FormInputStyle'"
            @focus="clearMessage"
            type="password"
            required
          />

          <div class="flex flex-col items-center">
            <button
              :disabled="
                formData.Password === '' ||
                setPasswordRepeat === '' ||
                formData.Password !== setPasswordRepeat
              "
              :class="
                formData.Password === '' ||
                setPasswordRepeat === '' ||
                formData.Password !== setPasswordRepeat
                  ? 'FormBTNDisabledStyle'
                  : 'FormBTNStyle'
              "
              @click="postToSwitchLogin"
              type="submit"
            >
              確定
            </button>
            <p @click="toSwitch" class="FormMoreBtnStyle">已有帳號？登入吧 >></p>
          </div>
        </div>
      </form>
      <div class="px-9 pt-5">
        <p class="FormWarningStyle" v-if="formData.Password !== setPasswordRepeat">⚠密碼不一致</p>
        <p class="FormWarningStyle" v-if="message">{{ message }}</p>
      </div>
    </div>

    <div v-else>
      <h1 class="text-center BigTitle mb-15">登入</h1>
      <form @submit.prevent="postToLogin" class="flex justify-center">
        <div>
          <label for="account" class="MediumText">帳號：</label>
          <input
            id="account"
            v-model="loginFormData.Account"
            class="FormInputStyle"
            type="email"
            autocomplete="off"
            required
          />
          <label for="password" class="MediumText">密碼：</label>
          <input
            id="password"
            v-model="loginFormData.Password"
            class="FormInputStyle"
            type="password"
            required
          />

          <div class="flex flex-col items-center">
            <button class="FormBTNStyle">確定</button>
            <p @click="toSwitch" class="FormMoreBtnStyle">沒有帳號？前往註冊 >></p>
            <p class="FormWarningStyle" v-if="loginMessage">{{ loginMessage }}</p>
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
