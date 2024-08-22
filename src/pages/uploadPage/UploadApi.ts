import axios from 'axios'
import { ref } from 'vue'

interface uploadData {
  image: File | null
  name: string
  description?: string
  tag?: string
  location?: string
  currentLocation: string
}

export default function useToUploadApi() {
  const uploadData = ref<uploadData>({
    image: null,
    name: '',
    description: '',
    tag: '',
    location: '',
    currentLocation: ''
  })
  const upload_URL = 'xxx/xxx'
  const postToUpload = async () => {
    try {
      const response = await axios.post(upload_URL)
      console.log(response.data)
      return 'upload success'
    } catch (error) {
      return error
    }
  }

  return {
    postToUpload,
    uploadData
  }
}
