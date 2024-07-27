import { ref } from 'vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useTokenStore } from '@/store/piniaStore'
import useGetToken from '../api/GetTokenApi'

interface formData {
  account: string
  password: string
}

export default function useSignupApi() {
  const tokenStore = useTokenStore()
  const { token } = storeToRefs(tokenStore)
  if (!token.value) {
    useGetToken().getToken()
  }
  const formData = ref<formData>({
    account: '',
    password: ''
  })
  const message = ref<string>('')
  const Signup_URL: string = 'api/auth/register'
  function formatValidation(formData) {
    if (formData.account === '' || formData.password === '') {
      return '請輸入完整資料'
    } else if (formData.account.length < 10) {
      return '帳號不得少於10個字元'
    } else if (
      !/[A-Z]/.test(formData.account) ||
      !/[a-z]/.test(formData.account || !/[0-9]/.test(formData.account))
    ) {
      return '帳號必須包含至少一個大寫字母及一個小寫字母及一個數字'
    } else if (formData.password.length < 10 || formData.password.length >= 15) {
      return '密碼不得少於10個字元且不得多於15個字元'
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password)
    ) {
      return '密碼必須包含至少一個大寫字母及一個小寫字母及一個數字'
    }
    return null
  }

  const postToSignup = async () => {
    const validationMessage = formatValidation(formData.value)
    if (validationMessage) {
      message.value = validationMessage
      return message.value
    }
    try {
      const response = await axios.post(Signup_URL, formData.value, {
        headers: {
          csrfToken: token.value
        }
      })
      message.value = '註冊成功!'
      return response
    } catch (error) {
      message.value = '註冊失敗'
      return error
    }
  }

  return { formData, message, postToSignup }
}
