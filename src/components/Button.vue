<template>
  <button
    :class="[
      'btn',
      {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-outline': variant === 'outline',
        'btn-ghost': variant === 'ghost',
      },
      {
        'opacity-50 cursor-not-allowed': disabled,
        'text-sm px-3 py-1': size === 'sm',
        'text-lg px-5 py-3': size === 'lg',
      }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})
</script>
