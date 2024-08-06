import axios from 'axios'
import { useTokenStore } from '../../store/piniaStore'
import { storeToRefs } from 'pinia'

export default function useGetToken() {
  const tokenStore = useTokenStore()
  const { token } = storeToRefs(tokenStore)

  const getToken = async (): Promise<string> => {
    try {
      const response = await axios.get('auth/getToken', {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache'
        }
      })
      const newtoken = response.data.csrfToken
      tokenStore.setToken(newtoken)
      //   console.log(tokenStore.getToken())

      return newtoken
    } catch (error) {
      console.log(error)
      return ''
    }
  }

  return {
    token,
    getToken
  }
}
