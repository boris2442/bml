<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="input"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
