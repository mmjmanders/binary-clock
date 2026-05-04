<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    numCirclesLeft: number
    numCirclesRight: number
    value: number
    offset?: number
  }>(),
  {
    offset: 0,
  },
)

const max = computed(() => Math.max(props.numCirclesLeft, props.numCirclesRight))
const left = computed(() => Math.floor(props.value / 10))
const right = computed(() => props.value % 10)

const isOn = (index: number, value: number): boolean => Boolean((1 << (index - 1)) & value)
</script>

<template>
  <g :transform="`translate(${props.offset}, 0)`">
    <circle
      v-for="i in numCirclesLeft"
      :key="i"
      r="15"
      cx="40"
      :cy="(max - i) * 54 + 54"
      :class="{ 'is-on': isOn(i, left) }"
    />
    <circle
      v-for="i in numCirclesRight"
      :key="i"
      r="15"
      cx="80"
      :cy="(max - i) * 54 + 54"
      :class="{ 'is-on': isOn(i, right) }"
    />
  </g>
</template>

<style scoped></style>
