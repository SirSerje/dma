<template>
  <header class="header">
    <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    <select v-model="userSettings.language" class="select">
      <option v-for="lang in languageOptions" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </header>
</template>

<script setup lang="ts">
import { useUserSettingsStore, LANGUAGES } from '@/stores/userSettings';

const userSettings = useUserSettingsStore();
const languageOptions = Object.values(LANGUAGES);
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
}

.logo {
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.select {
  margin-right: 32px;
  width: 150px;
}
</style>
