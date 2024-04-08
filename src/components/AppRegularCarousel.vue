<template>
  <div
    :class="`${main_classes} ${transform_classes} ${additional_classes}`"
    :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
    <slot> </slot>
  </div>
  <div
    v-if="have_footer_buttons"
    :class="`w-full flex justify-center items-center ${footer_spacing}`"
  >
    <div
      class="rounded-full border-2 mx-1 cursor-pointer transition-all duration-500"
      :class="`${footer_items_size} ${footer_color_classes} ${index === currentIndex ? `${footer_bg_color_class}` : ''}`"
      v-for="(i, index) in items_count"
      :key="index"
      @click="manualSlide(index)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  items_count: {
    type: Number,
    required: true
  },
  have_auto_slide: {
    type: Boolean,
    required: false,
    default: false
  },
  auto_slide_interval_duration: {
    type: Number,
    required: false,
    default: 10000
  },
  main_classes: {
    type: String,
    required: false,
    default: 'pt-24 flex cursor-grab z-0'
  },
  transform_classes: {
    type: String,
    required: false,
    default: 'transform duration-700 ease-in-out'
  },
  additional_classes: {
    type: String,
    required: false,
    default: ''
  },
  have_footer_buttons: {
    type: Boolean,
    required: false,
    default: false
  },
  footer_color_classes: {
    type: String,
    required: false,
    default: 'hover:bg-blue-600 border-blue-600'
  },
  footer_bg_color_class: {
    type: String,
    required: false,
    default: 'bg-blue-600'
  },
  footer_items_size: {
    type: String,
    required: false,
    default: 'w-2 h-2'
  },
  footer_spacing: {
    type: String,
    required: false,
    default: 'pt-6 lg:pt-12'
  }
})

const currentIndex = ref<number>(0)
const touchStartX = ref<number>(0)
const touchMoveX = ref<number>(0)
function next() {
  currentIndex.value = (currentIndex.value + 1) % props.items_count
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.items_count) % props.items_count
}

function handleTouchStart(event: TouchEvent) {
  touchStartX.value = event.touches[0].clientX
}

function handleTouchMove(event: TouchEvent) {
  touchMoveX.value = event.touches[0].clientX
}

function handleTouchEnd() {
  const deltaX = touchMoveX.value - touchStartX.value
  if (deltaX > 50) {
    prev()
  } else if (deltaX < -50) {
    next()
  }
  touchStartX.value = 0
  touchMoveX.value = 0
}

const startDragX = ref<number>(0)
const endDragX = ref<number>(0)
function handleMouseDown(event: MouseEvent) {
  startDragX.value = event.clientX
}

function handleMouseMove(event: MouseEvent) {
  endDragX.value = event.clientX
}

function handleMouseUp() {
  const deltaX = endDragX.value - startDragX.value
  if (deltaX > 50) {
    prev()
  } else if (deltaX < -50) {
    next()
  }
  startDragX.value = 0
  endDragX.value = 0
}

function manualSlide(index: number) {
  currentIndex.value = index
}

onMounted(() => {
  if (props.have_auto_slide) setInterval(next, props.auto_slide_interval_duration)
})
</script>
