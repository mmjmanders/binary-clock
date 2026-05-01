<script setup lang="ts">
import BinaryClock from '@/components/BinaryClock.vue'

const { VITE_APP_VERSION: version } = import.meta.env
</script>

<template>
  <header>
    <font-awesome-icon :icon="['fas', 'square-binary']" />
    <h1>Binary Clock</h1>
  </header>
  <main>
    <BinaryClock />
  </main>
  <footer>
    <font-awesome-icon :icon="['fas', 'code-merge']" />
    {{ version }}
  </footer>
</template>

<style scoped></style>
