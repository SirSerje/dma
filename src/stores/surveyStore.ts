import type { ConfigurationResponse } from '@/models/configurationResponse'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSurveyStore = defineStore('surveyStore', () => {
  const data = ref<ConfigurationResponse | null>(null)
  const loading = ref(true)
  // scoping config value for simplicity without removing
  // original response
  const config = computed(() => data.value?.data?.survey?.config)

  const setConfig = (response: ConfigurationResponse) => {
    data.value = response
    loading.value = false
  }

  return { setConfig, data, loading, config }
})
