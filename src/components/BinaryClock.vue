<script setup lang="ts">
import { useClock } from '@/composables/clock'
import { computed } from 'vue'
import dayjs from 'dayjs'

const { time } = useClock()
const displayTime = computed(() => dayjs(time.value).format('HH:mm:ss'))
</script>

<template>
  <div class="main-content">
    <div class="clock">s</div>
    <div class="display-time">{{ displayTime }}</div>
  </div>
</template>

<style scoped></style>
