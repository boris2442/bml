<template>
  <div :class="['card p-6', color && `border-t-4 border-t-${color}-500`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary'
}

defineProps<Props>()
</script>
