<template>
  <section class="py-20">
    <h2 class="text-3xl font-bold text-secondary-900 mb-12 text-center">Components Showcase</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <!-- Buttons -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Buttons</h3>
        <div class="space-y-3">
          <Button variant="primary" class="w-full text-center">Primary Button</Button>
          <Button variant="secondary" class="w-full text-center">Secondary Button</Button>
          <Button variant="outline" class="w-full text-center">Outline Button</Button>
          <Button variant="ghost" class="w-full text-center">Ghost Button</Button>
        </div>
      </Card>

      <!-- Input -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Forms</h3>
        <div class="space-y-3">
          <Input placeholder="Enter text..." />
          <Input type="email" placeholder="email@example.com" />
          <Input type="password" placeholder="••••••••" />
        </div>
      </Card>

      <!-- Badges -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Badges</h3>
        <div class="flex flex-wrap gap-2">
          <Badge variant="primary">New</Badge>
          <Badge variant="primary">Beta</Badge>
          <Badge variant="secondary">Updated</Badge>
          <Badge variant="secondary">Popular</Badge>
        </div>
      </Card>

      <!-- Colors -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Primary Colors</h3>
        <div class="flex gap-2">
          <div class="w-12 h-12 bg-primary-500 rounded-lg"></div>
          <div class="w-12 h-12 bg-primary-600 rounded-lg"></div>
          <div class="w-12 h-12 bg-primary-700 rounded-lg"></div>
          <div class="w-12 h-12 bg-primary-800 rounded-lg"></div>
        </div>
      </Card>

      <!-- Secondary Colors -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Secondary Colors</h3>
        <div class="flex gap-2">
          <div class="w-12 h-12 bg-secondary-500 rounded-lg"></div>
          <div class="w-12 h-12 bg-secondary-600 rounded-lg"></div>
          <div class="w-12 h-12 bg-secondary-700 rounded-lg"></div>
          <div class="w-12 h-12 bg-secondary-800 rounded-lg"></div>
        </div>
      </Card>

      <!-- Typography -->
      <Card>
        <h3 class="text-lg font-bold mb-4 text-secondary-900">Typography</h3>
        <div class="space-y-2">
          <h4 class="text-lg font-bold">Heading 4</h4>
          <p class="text-base">Body text</p>
          <p class="text-sm text-secondary-600">Small text</p>
        </div>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '../Button.vue'
import Input from '../Input.vue'
import Badge from '../Badge.vue'
import Card from '../Card.vue'
</script>
