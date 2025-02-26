<template>
  <SurveyComponent v-if="survey" :model="survey" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Model } from 'survey-core';
import { SurveyComponent } from 'survey-vue3-ui';
import * as SurveyTheme from 'survey-core/themes';
import 'survey-core/defaultV2.min.css';
import { useSurveyStore } from '../../stores/surveyStore';

const survey = ref<Model | null>(null);
const store = useSurveyStore();

watch(
  () => store.data,
  (newVal) => {
    if (newVal?.data?.survey?.config) {
      const newSurvey = new Model(newVal.data.survey.config);
      newSurvey.applyTheme(SurveyTheme.SharpLight);
      survey.value = newSurvey;
    }
  },
  { deep: true }
);

onMounted(() => {
  fetch('/api/getconfig')
    .then(res => res.json())
    .then(value => store.setConfig(value));
});
</script>
