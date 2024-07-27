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
      message.value = '請輸入完整資料'
      return message.value
    } else if (formData.account.length < 10) {
      message.value = '帳號不得少於10個字元'
      return message.value
    }
    return postToSignup
  }

  const postToSignup = async () => {
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

  return { formData, message, postToSignup, formatValidation }
}
