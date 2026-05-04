<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    leftDigits: number
    rightDigits: number
    value: number
    offset?: number
  }>(),
  {
    offset: 0,
  },
)

const left = computed(() => Math.floor(props.value / 10))
const right = computed(() => props.value % 10)
</script>

<template>
  <g :transform="`translate(${props.offset}, 0)`">
    <text>{{ left }}</text>
    <text>{{ right }}</text>
  </g>
</template>

<style scoped></style>
