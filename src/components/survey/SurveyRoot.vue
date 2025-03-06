<template>
  <div v-if="store.loading">Loading...</div>
  <SurveyComponent v-else :model="survey" />
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, watch } from 'vue'
import { Model } from 'survey-core'
import { SurveyComponent } from 'survey-vue3-ui'
import * as SurveyTheme from 'survey-core/themes'
import 'survey-core/defaultV2.min.css'
import "survey-core/survey.i18n";
import { useSurveyStore } from '../../stores/surveyStore'
import { useUserSettingsStore } from '@/stores/userSettings'
import "survey-core/survey.i18n";

const store = useSurveyStore()
const userSettings = useUserSettingsStore()

const survey: Ref<Model> = ref(new Model({}))
survey.value.applyTheme(SurveyTheme.SharpLight)

watch(
  () => store.data,
  (storeData) => {
    const value = storeData?.data?.config;
    if (!value) {
      return
    }
    survey.value = new Model(value)
  },
  { immediate: true },
)

watch(
  () => userSettings.surveyLocale,
  (newLang) => {
    survey.value.locale = newLang;
  }
)

onMounted(() => {
  fetch('/api/getconfig')
    .then((res) => res.json())
    .then(store.setConfig)
})
</script>
