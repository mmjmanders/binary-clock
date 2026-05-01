import { onMounted, onUnmounted, ref } from 'vue'

export const useClock = () => {
  const time = ref(new Date())
  let interval: number

  onMounted(() => {
    interval = setInterval(() => {
      time.value = new Date()
    }, 1000)
  })

  onUnmounted(() => clearInterval(interval))

  return { time }
}
