
<template>
  <div>
    <h2>Proxy Tester</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="(item, index) in data" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { domain } from '../utils/api'
const data = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(`${domain}/api/test-endpoint`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

