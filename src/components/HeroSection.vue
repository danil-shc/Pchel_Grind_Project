<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { User, Send, BookOpen } from 'lucide-vue-next'
import TheHeader from './TheHeader.vue'

// Изображения для слайдера
import photo2 from '@/components/assets/images/photo_2.webp'
import photo10 from '@/components/assets/images/photo_10.webp'
import photo40 from '@/components/assets/images/photo_40.webp'

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

// Логика слайдера
const currentIndex = ref(0)
const isPaused = ref(false)
let timer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetTimer()
}

const startTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 5000)
}

const resetTimer = () => {
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
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
            class="absolute top-4 left-4 z-20 w-fit h-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 backdrop-blur-md uppercase tracking-wider">
            <User :size="12" />Обо мне
          </span>

          <!-- Фотография как фоновый слой (слайдер) -->
          <div
            class="absolute inset-0 w-full h-full overflow-hidden z-0 md:relative md:w-1/2 md:border-l md:border-slate-100 md:dark:border-slate-800/50"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false">
            
            <!-- Слайды с Cross-Fade и Ken Burns эффектом -->
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
              :class="currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'">
              <img
                :src="slide.src"
                alt="Михаил Игоревич Пчелинцев"
                class="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-[5000ms] ease-out transform-gpu"
                :class="[
                  slide.position,
                  currentIndex === index ? 'scale-100' : 'scale-105'
                ]" />
            </div>

            <!-- Индикаторы прогресса -->
            <div class="absolute bottom-4 left-4 right-4 z-20 flex gap-2">
              <div
                v-for="(_, index) in slides"
                :key="index"
                @click="goToSlide(index)"
                class="h-1 rounded-full bg-slate-900/60 backdrop-blur-md overflow-hidden flex-1 cursor-pointer transition-all duration-300 hover:bg-slate-900/80">
                <div
                  class="h-full bg-emerald-500 transition-all ease-linear"
                  :style="{
                    width: currentIndex === index && !isPaused ? '100%' : currentIndex > index ? '100%' : '0%',
                    transitionDuration: currentIndex === index && !isPaused ? '5000ms' : '300ms'
                  }">
                </div>
              </div>
            </div>
          </div>

          <!-- Текстовый блок внизу с градиентом -->
          <div
            class="relative z-10 mt-auto w-full p-4 sm:p-5 md:p-6 lg:p-8 md:mt-0 md:max-w-[50%] flex flex-col md:justify-between md:bg-white md:dark:bg-[#0d131f] pointer-events-none">
            
            <!-- Градиент для мобильных устройств -->
            <div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#0d131f] via-[#0d131f]/90 to-transparent pt-12 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 md:hidden"></div>

            <div class="relative z-10 pointer-events-auto md:order-1">
              <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white md:text-slate-900 md:dark:text-white drop-shadow-md md:drop-shadow-none">
                Пчелинцев <br class="hidden sm:inline"> Михаил Игоревич
              </h2>
            </div>

            <div
              class="relative z-10 text-white md:text-slate-700 md:dark:text-slate-300 text-xs sm:text-sm font-medium mt-3 md:mt-4 max-w-full drop-shadow-md md:drop-shadow-none pointer-events-auto space-y-1.5 leading-relaxed md:order-2">
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
