import {
  defineStore
} from 'pinia'
import {
  computed,
  ref
} from 'vue'

export const useSettingStore = defineStore('setting', () => {
  let temp = uni.getStorageSync('setting')

  if (!temp) {
    temp = {
      ip: '127.0.0.1',
      port: 8080
    }
  }

  const setting = ref(temp)

  temp = uni.getStorageSync('text')
  if (!temp) {
    temp = {
      topTitle: '智慧客流',
      leftTitle: '客流分布',
      rightTitle: '近期客流',
      centre: {
        title: '景区人数',
        text: '今日入园'
      },
      bottomTitle: '分时客流'
    }
  }

  const textConfig = ref(temp)

  const updateSetting = (newValue) => {
    if (!newValue) return

    Object.assign(setting.value, newValue)
    uni.setStorageSync('setting', setting.value)
  }


  const updateText = (text_config) => {
    Object.assign(textConfig.value, text_config)
  }

  const baseUrl = computed(() => {
    if (setting.value === undefined) {
      setting.value = {
        ip: '127.0.0.1',
        port: 8080
      }
    }
    return `http://${setting.value.ip}:${setting.value.port}/power-haven`
  })

  return {
    setting,
    textConfig,
    updateText,
    updateSetting,
    baseUrl
  }
})