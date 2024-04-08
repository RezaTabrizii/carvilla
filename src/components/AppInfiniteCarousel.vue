<template>
  <div ref="infiniteCarousel" class="infinite-carousel">
    <div class="carousel-items w-fit flex justify-center items-center flex-nowrap gap-6">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  items_count: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['item_width'])
const infiniteCarousel = ref<HTMLDivElement | null>(null)
const getWidth = () => {
  if (infiniteCarousel.value) {
    let width = 0
    if (infiniteCarousel.value.offsetWidth < 640) width = infiniteCarousel.value.offsetWidth
    else width = infiniteCarousel.value.offsetWidth / props.items_count

    emit('item_width', width)

    return width
  }
}

function startInfiniteSliding(): void {
  const carousels = document.querySelectorAll('.infinite-carousel')

  carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-items') as HTMLElement
    const carouselContent = Array.from(carouselInner.children)

    carouselContent.forEach((item: Element) => {
      const duplicatedItem = item.cloneNode(true) as Element
      ;(duplicatedItem as HTMLElement).style.width = `${getWidth()}px`
      carouselInner.appendChild(duplicatedItem)
      carouselInner.style.animation = 'move 12s linear infinite'
    })
  })
}

onMounted(() => {
  emit('item_width', getWidth())

  window.addEventListener('resize', getWidth)

  startInfiniteSliding()
})
</script>

<style scoped>
.infinite-carousel {
  max-width: 1500px;
  width: 100%;
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
}
</style>
