import axios from 'axios'
import { ref } from 'vue'

export default function useLostInfoApi() {
  const LostInfo_URL = 'xxx/xxx'
  const getLostInfo = async () => {
    try {
      const response = await axios.get('LostInfo_URL')
    } catch (error) {
      //   console.error(error)
      return error
    }
  }

  return {
    getLostInfo
  }
}
