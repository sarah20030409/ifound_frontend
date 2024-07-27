import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    clearToken() {
      this.token = ''
      localStorage.removeItem('token')
      //logout
    },
    getToken() {
      return this.token
    }
  }
})
