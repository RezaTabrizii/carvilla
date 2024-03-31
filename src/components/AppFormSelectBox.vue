<template>
  <div class="single-model-search" :class="main_class">
    <label :for="name" :class="label_class">{{ label }}</label>
    <div>
      <select :id="name" :name="name" :class="input_class">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array as PropType<string[]>,
    required: true
  },
  main_class: {
    type: String,
    required: false,
    default: 'mb-7'
  },
  label_class: {
    type: String,
    required: false,
    default: 'block mb-4 text-base text-nowrap leading-6 text-slate-600 max-sm:text-sm'
  },
  input_class: {
    type: String,
    required: false,
    default:
      'block text-base w-full px-2 rounded-sm  bg-slate-100 text-slate-400 py-4 max-sm:text-sm lg:w-9/12'
    // default:
    //   'block text-base w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6 max-sm:text-sm'
  }
})
</script>
