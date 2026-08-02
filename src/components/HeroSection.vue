<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { User, Send, BookOpen } from 'lucide-vue-next'
import TheHeader from './TheHeader.vue'

// Изображения для слайдера
import photo2 from '@/components/assets/images/photo_2.webp'
import photo10 from '@/components/assets/images/photo_10.webp'
import photo40 from '@/components/assets/images/photo_40.webp'

const SLIDE_DURATION_MS = 5000

const slides = [
  {
    src: photo2,
    position: 'object-center'
  },
  {
    src: photo10,
    // Смещаем фото наверх на мобилках, чтобы лица были над текстом:
    position: 'object-[center_15%] sm:object-center'
  },
  {
    src: photo40,
    position: 'object-center'
  }
]

const isDark = defineModel('isDark', { type: Boolean, default: false })

const currentIndex = ref(0)
const isPaused = ref(false)
const progressKey = ref(0)
const supportsHoverPause = ref(false)

let slideTimer = null
let slideStartedAt = 0
let remainingMs = SLIDE_DURATION_MS

const clearSlideTimer = () => {
  if (slideTimer !== null) {
    clearTimeout(slideTimer)
    slideTimer = null
  }
}

const scheduleSlideAdvance = (delay = SLIDE_DURATION_MS) => {
  clearSlideTimer()
  remainingMs = delay
  slideStartedAt = Date.now()
  slideTimer = window.setTimeout(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, delay)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
  progressKey.value++
}

const goToSlide = (index) => {
  if (index === currentIndex.value) {
    progressKey.value++
    return
  }
  currentIndex.value = index
  progressKey.value++
}

const pauseSlider = () => {
  if (!supportsHoverPause.value || isPaused.value) return
  isPaused.value = true
  clearSlideTimer()
  const elapsed = Date.now() - slideStartedAt
  remainingMs = Math.max(0, remainingMs - elapsed)
}

const resumeSlider = () => {
  if (!supportsHoverPause.value || !isPaused.value) return
  isPaused.value = false
  scheduleSlideAdvance(remainingMs)
}

watch([currentIndex, progressKey], () => {
  scheduleSlideAdvance(SLIDE_DURATION_MS)
})

onMounted(() => {
  supportsHoverPause.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  scheduleSlideAdvance(SLIDE_DURATION_MS)
})

onUnmounted(() => {
  clearSlideTimer()
})

const scrollToNext = () => {
  document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative h-auto min-h-0 pb-16 md:pb-20 lg:pb-24 lg:h-dvh lg:max-h-dvh overflow-hidden flex flex-col animate-fade-in-up">
    <TheHeader v-model:isDark="isDark" />

    <div class="flex-1 min-h-0 flex flex-col justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-4 sm:pt-4 lg:pb-8">
      <div class="shrink-0 mb-3 sm:mb-4 max-w-2xl">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
          Академическое портфолио <span class="text-emerald-400">исследователя</span>.
        </h1>
        <p class="text-sm sm:text-base text-slate-300 font-normal mt-0 mb-0 opacity-90 leading-normal">
          Генетика, биотехнологии и разработка ПЦР-систем.
        </p>
      </div>

      <div class="flex-1 min-h-0 flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        <div
          class="min-h-[320px] sm:min-h-[360px] md:min-h-0 md:col-span-2 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/60 dark:border-slate-800/80 shadow-sm overflow-hidden relative flex flex-col justify-between md:flex-row transition-all duration-300 hover:shadow-lg hover:border-emerald-500/20 group w-full h-full">

          <!-- Бейдж "ОБО МНЕ" -->
          <span
            class="absolute top-12 sm:top-4 left-3 sm:left-4 z-30 w-fit h-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 backdrop-blur-md uppercase tracking-wider">
            <User :size="12" />Обо мне
          </span>

          <!-- Фотография как фоновый слой (слайдер) -->
          <div
            class="absolute inset-0 w-full h-full overflow-hidden z-0 md:relative md:w-1/2 md:border-l md:border-slate-100 md:dark:border-slate-800/50"
            @mouseenter="pauseSlider"
            @mouseleave="resumeSlider">
            
            <!-- Слайды с Cross-Fade и Ken Burns эффектом -->
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-0"
              :class="currentIndex === index ? 'opacity-100' : 'opacity-0'">
              <img
                :src="slide.src"
                alt="Михаил Игоревич Пчелинцев"
                class="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-[5000ms] ease-out transform-gpu"
                :class="[
                  slide.position,
                  currentIndex === index ? 'scale-100' : 'scale-105'
                ]" />
            </div>

            <!-- Индикаторы прогресса: вверху на мобилке, внизу на десктопе -->
            <div class="absolute top-3 left-3 right-3 z-30 flex gap-1.5 sm:top-auto sm:bottom-3 sm:gap-2">
              <div
                v-for="(_, index) in slides"
                :key="index"
                @click="goToSlide(index)"
                class="h-1 rounded-full bg-white/30 backdrop-blur-sm overflow-hidden flex-1 cursor-pointer transition-colors duration-300 hover:bg-white/50">
                <div
                  v-if="index < currentIndex"
                  class="h-full w-full bg-emerald-400"
                />
                <div
                  v-else-if="index === currentIndex"
                  :key="`progress-${currentIndex}-${progressKey}`"
                  class="slide-progress-fill h-full bg-emerald-400"
                  :class="{ 'slide-progress-fill--paused': isPaused }"
                  :style="{ animationDuration: `${SLIDE_DURATION_MS}ms` }"
                />
                <div
                  v-else
                  class="h-full w-0 bg-emerald-400"
                />
              </div>
            </div>
          </div>

          <!-- Градиентная подложка для текста (только мобилка) -->
          <div class="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0d131f] via-[#0d131f]/40 to-transparent pointer-events-none z-10 md:hidden"></div>

          <!-- Текстовый блок внизу -->
          <div
            class="relative z-20 mt-auto w-full p-4 sm:p-5 md:p-6 lg:p-8 md:mt-0 md:max-w-[50%] flex flex-col md:justify-between md:bg-white md:dark:bg-[#0d131f] pointer-events-none">

            <div class="relative pointer-events-auto md:order-1">
              <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white md:text-slate-900 md:dark:text-white drop-shadow-md md:drop-shadow-none">
                Пчелинцев <br class="hidden sm:inline"> Михаил Игоревич
              </h2>
            </div>

            <div
              class="relative text-white md:text-slate-700 md:dark:text-slate-300 text-xs sm:text-sm font-medium mt-3 md:mt-4 max-w-full drop-shadow-md md:drop-shadow-none pointer-events-auto space-y-1.5 leading-relaxed md:order-2">
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Стажер-исследователь <span class="font-semibold text-emerald-400 md:text-emerald-500">Первого МГМУ им. И. М. Сеченова</span></span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Стажер компании <span class="font-semibold text-emerald-400 md:text-emerald-500">Genotek</span></span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Педагог <span class="font-semibold text-emerald-400 md:text-emerald-500">АПО</span> и <span class="font-semibold text-emerald-400 md:text-emerald-500">ЦПМ</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row md:flex-col gap-3 sm:gap-4 md:gap-5 shrink-0 h-28 sm:h-32 md:h-full md:min-h-0 md:shrink md:flex-1">
          <div
            class="flex-1 min-h-0 min-w-0 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 bg-white dark:bg-[#0d131f] border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 cursor-pointer group hover:shadow-md">
            <div class="flex justify-between items-start gap-2">
              <div
                class="p-2 sm:p-2.5 rounded-2xl bg-sky-500/10 text-sky-500 transition-transform duration-300 ease-in-out will-change-transform transform-gpu group-hover:scale-110">
                <Send :size="18" class="sm:w-5 sm:h-5" />
              </div>
              <span class="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 shrink-0">Блог</span>
            </div>
            <div>
              <h3 class="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white mb-0.5 sm:mb-1">Telegram Канал</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 hidden sm:block leading-relaxed">Фотки, мысли, заметки с кафедры.</p>
            </div>
          </div>

          <div
            class="flex-1 min-h-0 min-w-0 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 bg-white dark:bg-[#0d131f] border border-slate-200/60 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group hover:shadow-md">
            <div class="flex justify-between items-start gap-2">
              <div
                class="p-2 sm:p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 ease-in-out will-change-transform transform-gpu group-hover:scale-110">
                <BookOpen :size="18" class="sm:w-5 sm:h-5" />
              </div>
              <span class="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shrink-0">Scopus / ВАК</span>
            </div>
            <div>
              <h3 class="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-white mb-0.5 sm:mb-1">Публикации</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 hidden sm:block leading-relaxed">Список научных статей.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Плавающая стрелка скролла -->
    <div 
      @click="scrollToNext"
      class="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center gap-1.5 cursor-pointer select-none group transition-opacity duration-300 hover:opacity-100 opacity-70"
    >
      <span class="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-400 group-hover:text-emerald-400 transition-colors">
        Листать
      </span>
      <svg 
        class="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-y-1 animate-bounce" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.slide-progress-fill {
  width: 100%;
  transform-origin: left center;
  transform: scaleX(0);
  animation-name: slide-progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  will-change: transform;
}

.slide-progress-fill--paused {
  animation-play-state: paused;
}
</style>
