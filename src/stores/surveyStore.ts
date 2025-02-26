
import type { ConfigurationResponse } from '@/models/configurationResponse';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSurveyStore = defineStore('surveyStore', () => {
  const data = ref({});
  const setConfig = (response: ConfigurationResponse) => {
    console.log('store update', response)
    data.value = response;
  }
  return { setConfig, data }
});
