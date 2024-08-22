import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      // Use 'tokenStore.setToken(tokenData)' to set token
    },
    clearToken() {
      this.token = ''
      //Use 'tokenStore.clearToken()' to clear token
    },
    getToken(): string {
      return this.token
      // Use 'tokenStore.getToken()' to get token
    }
  }
})

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    permission: 2 // 0 for normal user, 1 for admin ,2 for guest
  }),
  actions: {
    setPermission(permission: number) {
      this.permission = permission
    },
    clearPermission() {
      this.permission = 2
    }
  },
  getters: {
    getPermission(): number {
      return this.permission
    }
  }
})
