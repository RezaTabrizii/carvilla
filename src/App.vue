<template>
  <app-header />

  <router-view />

  <app-scroll-to-top-button></app-scroll-to-top-button>
  <app-footer></app-footer>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppScrollToTopButton from './components/AppScrollToTopButton.vue'
</script>
