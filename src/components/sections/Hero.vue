<template>
  <section class="py-20 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
      Vue 3 Design System
    </h1>
    <p class="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
      A modern, accessible, and customizable design system built with Vue 3, TypeScript, and Tailwind CSS
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <Button variant="primary">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
</script>
