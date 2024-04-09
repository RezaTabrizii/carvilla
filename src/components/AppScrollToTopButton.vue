<template>
  <button
    id="scrollToTopBtn"
    class="group text-center fixed bottom-6 right-6 z-10 border-4 border-blue-600 rounded-full text-white bg-blue-600 p-4 hover:bg-transparent hover:text-blue-600 transition-all"
    v-show="showButton"
    @click="scrollToTop"
  >
    <svg
      class="lnr lnr-chevron-up size-4 fill-white group-hover:fill-blue-600 transition-all animate-bounce"
    >
      <use xlink:href="#lnr-chevron-up"></use>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref<boolean>(false)

const handleScroll = (): void => {
  if (window.scrollY > 20) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted((): void => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount((): void => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
