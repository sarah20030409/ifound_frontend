import { ref } from 'vue'
import axios from 'axios'

interface FormData {
  account: string
  password: string
  passwordRepeat: string
}
export default function useFormApi() {
  const formData = ref<FormData>({
    account: '',
    password: '',
    passwordRepeat: ''
  })

  const message = ref<string>('')
  const LOGIN_URL = 'http://localhost:8000/api/auth/login'
  const userLogin = async () => {
    try {
      const _response = await axios.post(LOGIN_URL, formData.value)
      message.value = 'Login success'
    } catch (error) {
      message.value = 'Login failed'
      console.log(error)
    }
  }

  return {
    formData,
    message,
    userLogin
  }
}
