<template>
  <header
    class="fixed w-full text-slate-100 transition-all duration-500 ease-in-out overflow-hidden z-10 lg:py-4 lg:flex lg:justify-around lg:overflow-visible lg:max-h-16"
    :class="`${header_class} ${static_header_class}`"
  >
    <button
      class="group border-2 rounded-sm border-blue-600 p-1 m-0 absolute left-4 top-3.5 transition-all hover:bg-blue-300 hover:bg-opacity-40 lg:hidden"
      type="button"
      @click="toggleNavbar()"
    >
      <svg class="size-6 fill-blue-600 group-hover:fill-white" :class="btn_toggle_class">
        <use :xlink:href="btn_toggle_xlink_href"></use>
      </svg>
    </button>

    <div class="text-center">
      <a class="text-2xl font-rufina tracking-widest lg:text-3xl" href="index.html">CARVILLA</a>
    </div>

    <div class="lg:flex lg:justify-center lg:items-center px-3">
      <ul
        class="font-poppins font-semibold text-lg text-slate-100 bg-black border-t-2 border-gray-700 mt-4 lg:bg-transparent lg:flex lg:space-x-5 lg:mt-0 lg:border-none lg:text-base lg:font-normal"
      >
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#home">HOME</a>
        </li>
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#service">SERVICE</a>
        </li>
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#featured-cars">FEATURED CARS</a>
        </li>
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#new-cars">NEW CARS</a>
        </li>
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#brand">BRANDS</a>
        </li>
        <li
          class="py-3 px-3 hover:bg-slate-100 hover:bg-opacity-10 hover:text-blue-600 hover:cursor-pointer transition-all duration-300 lg:hover:bg-transparent lg:duration-500"
        >
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const is_navbar_closed = ref<boolean>(true)
const is_static_header = ref<boolean | null>(null)

const header_class = computed(() => {
  return is_navbar_closed.value === true ? 'h-16 pt-4' : 'h-96 pt-4'
})

const btn_toggle_class = computed(() => {
  return is_navbar_closed.value === true ? 'lnr-men' : 'lnr-cross'
})

const btn_toggle_xlink_href = computed(() => {
  return is_navbar_closed.value === true ? '#lnr-menu' : '#lnr-cross'
})

const static_header_class = computed(() => {
  return is_static_header.value === true ? 'bg-black' : 'bg-transparent px-6'
})

function toggleNavbar() {
  is_navbar_closed.value = !is_navbar_closed.value
}

const handleScroll = () => {
  if (window.innerWidth < 1024) is_static_header.value = true
  else if (window.scrollY >= 100) is_static_header.value = true
  else is_static_header.value = false
}

const handleResize = () => {
  if (window.innerWidth < 1024) is_static_header.value = true
  else if (window.scrollY >= 100) is_static_header.value = true
  else is_static_header.value = false
}

onMounted(() => {
  if (window.innerWidth < 1024) is_static_header.value = true
  else if (window.scrollY >= 100) is_static_header.value = true
  else is_static_header.value = false

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
