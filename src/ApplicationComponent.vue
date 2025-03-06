<template>
  <Header />
  <Main>
    <SurveyRoot></SurveyRoot>
  </Main>
</template>

<script setup lang="ts">
import Main from './layouts/MainLayout.vue'
import Header from './components/HeaderComponent.vue'
import SurveyRoot from './components/survey/SurveyRoot.vue'
</script>
