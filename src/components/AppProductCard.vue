<template>
  <div
    class="group max-w-80 bg-slate-100 rounded-sm shadow-lg ring-2 ring-opacity-40 select-none transition-all duration-500 hover:ring-4 hover:shadow-xl"
    :class="`${card_color_classes} ${card_additional_classes}`"
  >
    <div class="flex justify-center items-center h-56 shadow-md">
      <img
        class="w-3/4 transition-all duration-500 group-hover:scale-110"
        :src="product_image"
        :alt="product_title"
      />
    </div>
    <div class="p-4">
      <h2 class="text-lg font-medium capitalize text-slate-600 mb-2 truncate">
        <a :href="product_link">{{ product_title }}</a>
      </h2>
      <h3 class="text-slate-600 font-semibold mb-2">${{ product_price }}</h3>
      <p class="text-slate-500 text-sm mb-4 truncate-lines-3">
        {{ product_description }}
      </p>
      <div
        class="flex flex-wrap capitalize text-xs text-slate-600 font-light tracking-wide h-12 overflow-hidden"
      >
        <span
          v-for="tag in product_tags"
          :key="tag"
          :class="tags_color_classes"
          class="px-1 mr-1 mt-1 h-5 rounded-full border-2 hover:text-white transition-all ease-in-out"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

defineProps({
  product_title: {
    type: String,
    required: true
  },
  product_link: {
    type: String,
    required: true
  },
  product_image: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  product_tags: {
    type: Array as PropType<string[]>,
    required: true
  },
  card_additional_classes: {
    type: String,
    required: false,
    default: ''
  },
  card_color_classes: {
    type: String,
    required: false,
    default: 'ring-blue-600'
  },
  tags_color_classes: {
    type: String,
    required: false,
    default: 'border-blue-400 hover:bg-blue-400'
  }
})
</script>
