import { ref } from 'vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useTokenStore } from '@/store/piniaStore'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store/piniaStore'
import useGetToken from '../../global/api/GetTokenApi'

interface formData {
  Account: string
  Password: string
}

export default function useSignupApi() {
  const tokenStore = useTokenStore()
  const { token } = storeToRefs(tokenStore)
  if (!token.value) {
    useGetToken().getToken()
  }
  const formData = ref<formData>({
    Account: '',
    Password: ''
  })
  const message = ref<string>('')
  const Signup_URL: string = 'auth/register'
  function formatValidation(formData) {
    if (formData.Account === '' || formData.Password === '') {
      return '請輸入完整資料'
    } else if (formData.Account.length < 10) {
      return '帳號不得少於10個字元'
    } else if (
      !/[A-Z]/.test(formData.Account) ||
      !/[a-z]/.test(formData.Account || !/[0-9]/.test(formData.Account))
    ) {
      return '帳號必須包含至少一個大寫字母及一個小寫字母及一個數字'
    } else if (formData.Password.length < 10 || formData.Password.length >= 15) {
      return '密碼不得少於10個字元且不得多於15個字元'
    } else if (
      !/[A-Z]/.test(formData.Password) ||
      !/[a-z]/.test(formData.Password) ||
      !/[0-9]/.test(formData.Password)
    ) {
      return '密碼必須包含至少一個大寫字母及一個小寫字母及一個數字'
    }
    return null
  }

  const postToSignup = async () => {
    const validationMessage = formatValidation(formData.value)

    console.log(document.cookie)
    if (validationMessage) {
      message.value = validationMessage
      return message.value
    }
    try {
      const response = await axios.post(Signup_URL, formData.value, {
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': token.value
        }
      })
      message.value = '註冊成功!'
      return response
    } catch (error) {
      message.value = '註冊失敗:' + error
      return error
    }
  }

  return { formData, message, postToSignup }
}

export function useLoginApi() {
  const tokenStore = useTokenStore()
  const { token } = storeToRefs(tokenStore)
  const router = useRouter()
  if (!token.value) {
    useGetToken().getToken()
  }

  const loginFormData = ref<formData>({
    Account: '',
    Password: ''
  })

  const permissionStore = usePermissionStore()
  const loginMessage = ref<string>('')
  const Login_URL: string = 'auth/login'
  const postToLogin = async () => {
    try {
      const response = await axios.post(Login_URL, loginFormData.value, {
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': token.value
        }
      })
      permissionStore.setPermission(response.data.Permission)
      loginMessage.value = '登入成功!'

      //   if (response.data.Permission === 0) {
      //     router.push('/')
      //   }
      return response
    } catch (error) {
      loginMessage.value = '登入失敗,帳號或密碼錯誤'
      return error
    }
  }

  return {
    loginFormData,
    postToLogin,
    loginMessage
  }
}
