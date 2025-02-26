<template>
  <div v-if="store.loading">Loading...</div>
  <SurveyComponent v-else :model="survey" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Model } from 'survey-core';
import { SurveyComponent } from 'survey-vue3-ui';
import * as SurveyTheme from 'survey-core/themes';
import 'survey-core/defaultV2.min.css';
import { useSurveyStore } from '../../stores/surveyStore';

const store = useSurveyStore();

const survey = ref(new Model({}));
survey.value.applyTheme(SurveyTheme.SharpLight);

watch(
  () => store.config,
  (config) => {
    if (config) {
      survey.value = new Model(config);
    }
  },
  { immediate: true }
);

onMounted(() => {
  fetch('/api/getconfig')
    .then(res => res.json())
    .then(value => store.setConfig(value));
});
</script>
