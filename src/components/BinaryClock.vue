<script setup lang="ts">
import ClockItem from './ClockItem.vue'
import { useClock } from '@/composables/clock'
import { computed } from 'vue'
import dayjs from 'dayjs'

const { time } = useClock()
const displayTime = computed(() => dayjs(time.value).format('HH:mm:ss'))
const hours = computed(() => time.value.getHours() % 12 || 12)
const minutes = computed(() => time.value.getMinutes())
const seconds = computed(() => time.value.getSeconds())
</script>

<template>
  <div class="main-content">
    <div class="clock">
      <svg viewBox="0 0 360 270" preserveAspectRatio="xMidYMid meet">
        <ClockItem :leftDigits="2" :rightDigits="4" :value="hours" />
        <ClockItem :leftDigits="3" :rightDigits="4" :offset="120" :value="minutes" />
        <ClockItem :leftDigits="3" :rightDigits="4" :offset="240" :value="seconds" />
      </svg>
    </div>
    <div class="display-time">{{ displayTime }}</div>
  </div>
</template>

<style scoped></style>
