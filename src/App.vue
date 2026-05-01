<script setup lang="ts">
const { VITE_APP_VERSION: version } = import.meta.env
</script>

<template>
  <header>
    <font-awesome-icon :icon="['fas', 'square-binary']" />
    <h1>Binary Clock</h1>
  </header>
  <main></main>
  <footer>
    <font-awesome-icon :icon="['fas', 'code-merge']" />
    {{ version }}
  </footer>
</template>

<style scoped></style>
