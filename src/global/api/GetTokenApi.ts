import axios from 'axios'
import { useTokenStore } from '../../store/piniaStore'

export default function useGetToken() {
  const tokenStore = useTokenStore()

  const getToken = async (): Promise<string> => {
    try {
      const response = await axios.get('auth/getToken')
      const token = response.data.csrfToken
      tokenStore.setToken(token)
      console.log(tokenStore.getToken())

      return token
    } catch (error) {
      console.log(error)
      return ''
    }
  }

  return {
    tokenStore,
    getToken
  }
}
