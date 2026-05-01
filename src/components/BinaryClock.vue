<script setup lang="ts">
import { useClock } from '@/composables/clock'

const { time } = useClock()
</script>

<template>
  <div>
    {{ time }}
  </div>
</template>

<style scoped>
@reference '../main.css';

div {
  @apply font-mono text-sm;
}
</style>
