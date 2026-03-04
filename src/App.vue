<template>
  <div class="min-h-screen transition-colors duration-300">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'

import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { useDarkMode } from './utils/composables'

const { isDark } = useDarkMode()

// Watch for dark mode changes
watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// Initialize on mount
onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>
