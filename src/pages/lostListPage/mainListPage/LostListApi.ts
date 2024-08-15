import axios from 'axios'
import { ref } from 'vue'

export interface ItemData {
  src: string
  alt: string
  tag: string
}

export default function useGetLostApi() {
  const items = ref<ItemData[]>([])
  const randomData = ref<string>('')

  const lostItemName = async (): Promise<string> => {
    try {
      const response = await axios.get('https://random-tag-api.herokuapp.com/tag')
      randomData.value = response.data
      return 'Success'
    } catch (err) {
      console.error('Failed to fetch tag!!:', err)
      randomData.value = 'Failed to fetch tag!!'
      return randomData.value
    }
  }

  const lostItem = async () => {
    const tags = await Promise.all(
      Array(7)
        .fill(0)
        .map(() => lostItemName())
    )
    items.value = [
      { src: 'https://via.placeholder.com/200x100', alt: 'Image 1', tag: tags[0] },
      { src: 'https://via.placeholder.com/200x350', alt: 'Image 2', tag: tags[1] },
      { src: 'https://via.placeholder.com/300x400', alt: 'Image 3', tag: tags[2] },
      { src: 'https://via.placeholder.com/200x250', alt: 'Image 4', tag: tags[3] },
      { src: 'https://via.placeholder.com/300x650', alt: 'Image 5', tag: tags[4] },
      { src: 'https://via.placeholder.com/200x450', alt: 'Image 6', tag: tags[5] },
      { src: 'https://via.placeholder.com/200x550', alt: 'Image 7', tag: tags[6] }
    ]
  }

  return { lostItem, items }
}
