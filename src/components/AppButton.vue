<template>
  <button
    :type="type"
    :class="`${size_classes} ${color_classes} ${base_classes} ${additional_classes} ${hover_classes}`"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    required: false,
    default: 'button'
  },
  size_classes: {
    type: String,
    required: false,
    default: 'py-4 px-12'
  },
  color_classes: {
    type: String,
    required: false,
    default: 'text-slate-100 bg-blue-600'
  },
  base_classes: {
    type: String,
    required: false,
    default: 'inline-block rounded-sm text-nowrap transition-all ease-in-out'
  },
  additional_classes: {
    type: String,
    required: false,
    default: ''
  },
  hover_classes: {
    type: String,
    required: false,
    default: 'hover:bg-blue-700'
  }
})

const emit = defineEmits(['customSubmit'])
</script>
