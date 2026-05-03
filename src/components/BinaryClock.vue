<script setup lang="ts">
import { useClock } from '@/composables/clock'
import { computed } from 'vue'
import dayjs from 'dayjs'

const { time } = useClock()
const displayTime = computed(() => dayjs(time.value).format('HH:mm:ss'))
</script>

<template>
  <div class="main-content">
    <div class="clock">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet">
        <rect width="1600" height="900" />
      </svg>
    </div>
    <div class="display-time">{{ displayTime }}</div>
  </div>
</template>

<style scoped></style>
