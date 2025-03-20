<template>
  <div v-if="store.loading">Loading...</div>
  <SurveyComponent v-else :model="survey.value" />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Model as SurveyModel } from 'survey-core'
import { SurveyComponent } from 'survey-vue3-ui'
import * as SurveyTheme from 'survey-core/themes'
import 'survey-core/defaultV2.min.css'
import 'survey-core/survey.i18n'
import { useSurveyStore } from '@/stores/surveyStore'
import { useUserSettingsStore } from '@/stores/userSettings'
import { options } from './utils.ts'

const store = useSurveyStore()
const userSettings = useUserSettingsStore()
const survey = ref<SurveyModel>(new SurveyModel({}))

survey.value.applyTheme(SurveyTheme.SharpLight)

watch(
  () => store.data,
  (storeData) => {
    const value = storeData?.data?.survey?.config
    if (!value) return

    survey.value = new SurveyModel(value)
    survey.value.onComplete.add((sender) => {
      fetch('/api/submit', {
        method: 'POST',
        ...options,
        body: prepareResponse(sender.data),
      }).then(console.log)
    })
  },
  { immediate: true },
)

watch(
  () => userSettings.surveyLocale,
  (newLang) => {
    survey.value.locale = newLang
  },
)

onMounted(() => {
  fetch('/api/getconfig')
    .then((res) => res.json())
    .then(store.setConfig)
})

function prepareResponse(data: unknown) {
  return JSON.stringify(data)
}
</script>
