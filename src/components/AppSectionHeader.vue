<template>
  <div class="relative text-center text-gray-700 font-poppins select-none">
    <p v-if="paragraph_content != null" class="capitalize mb-2" v-html="paragraph_content"></p>
    <h2 class="relative font-semibold text-4xl pb-9 capitalize" v-html="header_content"></h2>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

defineProps({
  header_content: {
    type: String,
    required: true
  },
  paragraph_content: {
    type: String as PropType<string | null>,
    required: false
  }
})
</script>

<style scoped>
h2:before {
  position: absolute;
  content: '';
  width: 80px;
  height: 2px;
  bottom: 0;
  left: 50%;
  margin-left: -42px;
  background: #4e4ffa;
}
.section-header h2 span,
.section-header p span {
  text-transform: lowercase;
}
</style>
