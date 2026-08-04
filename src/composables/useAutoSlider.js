import { ref, watch, onMounted, onUnmounted } from 'vue'

/**
 * Общая логика автопереключения слайдов: таймер с автоповтором,
 * пауза/резюм с сохранением остатка времени, переключение вперёд/назад
 * и переход по индексу. Используется как основным фото-слайдером в Hero,
 * так и слайдером логотипов в карточке "Образование".
 */
export function useAutoSlider(itemsCount, durationMs) {
  const currentIndex = ref(0)
  const isPaused = ref(false)
  const progressKey = ref(0)

  let timer = null
  let startedAt = 0
  let remainingMs = durationMs

  const clearTimer = () => {
    if (timer !== null) {
      clearTimeout(timer)
      timer = null
    }
  }

  const scheduleAdvance = (delay = durationMs) => {
    clearTimer()
    remainingMs = delay
    startedAt = Date.now()
    timer = window.setTimeout(() => {
      if (!isPaused.value) {
        next()
      }
    }, delay)
  }

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % itemsCount
    progressKey.value++
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + itemsCount) % itemsCount
    progressKey.value++
  }

  const goTo = (index) => {
    if (index === currentIndex.value) {
      progressKey.value++
      return
    }
    currentIndex.value = index
    progressKey.value++
  }

  const pause = () => {
    if (isPaused.value) return
    isPaused.value = true
    clearTimer()
    const elapsed = Date.now() - startedAt
    remainingMs = Math.max(0, remainingMs - elapsed)
  }

  const resume = () => {
    if (!isPaused.value) return
    isPaused.value = false
    scheduleAdvance(remainingMs)
  }

  watch([currentIndex, progressKey], () => {
    scheduleAdvance(durationMs)
  })

  onMounted(() => {
    scheduleAdvance(durationMs)
  })

  onUnmounted(() => {
    clearTimer()
  })

  return {
    currentIndex,
    isPaused,
    progressKey,
    next,
    prev,
    goTo,
    pause,
    resume
  }
}
