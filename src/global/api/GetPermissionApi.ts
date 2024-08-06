import axios from 'axios'
import { usePermissionStore } from '@/store/piniaStore'
import { useTokenStore } from '@/store/piniaStore'
import { storeToRefs } from 'pinia'

export default function useGetPermission() {
  const tokenStore = useTokenStore()
  const { token } = storeToRefs(tokenStore)

  const permissionStore = usePermissionStore()
  const { permission } = storeToRefs(permissionStore)

  const PermissionApi_URL: string = 'auth/getPermission'
  const getPermission = async () => {
    if (permission.value !== 2) {
      console.log('had permission')
      return permission.value
    }
    try {
      const response = await axios.get(PermissionApi_URL, {
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': token.value
        }
      })

      //   console.log(response.data.Permission)
      permissionStore.setPermission(response.data.Permission)
      return response.data
    } catch (error) {
      console.error(error)
      return 2
    }
  }

  return {
    getPermission,
    permission
  }
}
