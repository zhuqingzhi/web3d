import { defineStore } from 'pinia'

export default defineStore('useCout', {
  state() {
    return {
      count: 0,
    }
  },
  actions: {
    add() {
      this.count++
    },
  },
})
