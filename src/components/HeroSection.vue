<script setup>
import { ref, onMounted } from 'vue'
import { User } from 'lucide-vue-next'
import TheHeader from './TheHeader.vue'
import { useAutoSlider } from '@/composables/useAutoSlider'

// Изображения для слайдера (первый слайд — в public/ для preload в index.html)
import photo31 from '@/components/assets/images/photo_31.webp'
import photo40 from '@/components/assets/images/photo_40.webp'

const LCP_HERO_IMAGE = '/images/photo_2.webp'

// Логотипы для карточки "Образование"
import sechenovLogo from '@/components/assets/logos/sechenov.png'
import genotekLogo from '@/components/assets/logos/genotek.png'
import siriusLogo from '@/components/assets/logos/sirius.png'

const PARTNER_LINKS = {
  sechenov: 'https://www.sechenov.ru/',
  genotek: 'https://www.genotek.ru/',
  sirius: 'https://sochisirius.ru/'
}

const SLIDE_DURATION_MS = 5000

const slides = [
  {
    src: LCP_HERO_IMAGE,
    position: 'object-center'
  },
  {
    src: photo31,
    position: 'object-center'
  },
  {
    src: photo40,
    position: 'object-center'
  }
]

const isDark = defineModel('isDark', { type: Boolean, default: false })

const {
  currentIndex,
  isPaused,
  progressKey,
  next: nextSlide,
  prev: prevSlide,
  goTo: goToSlide,
  pause: pauseSliderTimer,
  resume: resumeSliderTimer
} = useAutoSlider(slides.length, SLIDE_DURATION_MS)

const supportsHoverPause = ref(false)
const supportsTouchNavigation = ref(false)

const SWIPE_THRESHOLD_PX = 40
const SWIPE_MAX_ANGLE_RATIO = 1.5

let touchStartX = 0
let touchStartY = 0
let touchActive = false

let logoTouchStartX = 0
let logoTouchStartY = 0
let logoTouchActive = false

const pauseSlider = () => {
  if (!supportsHoverPause.value) return
  pauseSliderTimer()
}

const resumeSlider = () => {
  if (!supportsHoverPause.value) return
  resumeSliderTimer()
}

const isProgressBarTarget = (target) => {
  return target instanceof Element && target.closest('[data-slide-progress]')
}

const onTouchStart = (event) => {
  if (!supportsTouchNavigation.value || isProgressBarTarget(event.target)) return

  const touch = event.touches[0]
  touchStartX = touch.clientX
  touchStartY = touch.clientY
  touchActive = true
}

const onTouchEnd = (event) => {
  if (!touchActive) return
  touchActive = false

  const touch = event.changedTouches[0]
  const deltaX = touch.clientX - touchStartX
  const deltaY = touch.clientY - touchStartY
  const absX = Math.abs(deltaX)
  const absY = Math.abs(deltaY)

  if (absX < SWIPE_THRESHOLD_PX || absY > absX * SWIPE_MAX_ANGLE_RATIO) return

  if (deltaX < 0) {
    nextSlide()
  } else {
    prevSlide()
  }
}

const onTouchCancel = () => {
  touchActive = false
}

// Свайп для слайдера логотипов (планшет/мобилка) — та же логика,
// что и у фото-слайдера выше.
const onLogoTouchStart = (event) => {
  if (!supportsTouchNavigation.value || isProgressBarTarget(event.target)) return

  const touch = event.touches[0]
  logoTouchStartX = touch.clientX
  logoTouchStartY = touch.clientY
  logoTouchActive = true
}

const onLogoTouchEnd = (event) => {
  if (!logoTouchActive) return
  logoTouchActive = false

  const touch = event.changedTouches[0]
  const deltaX = touch.clientX - logoTouchStartX
  const deltaY = touch.clientY - logoTouchStartY
  const absX = Math.abs(deltaX)
  const absY = Math.abs(deltaY)

  if (absX < SWIPE_THRESHOLD_PX || absY > absX * SWIPE_MAX_ANGLE_RATIO) return

  if (deltaX < 0) {
    nextLogoSlide()
  } else {
    prevLogoSlide()
  }
}

const onLogoTouchCancel = () => {
  logoTouchActive = false
}

onMounted(() => {
  const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
  const touchLayoutQuery = window.matchMedia('(max-width: 1023px)')

  supportsHoverPause.value = finePointerQuery.matches
  supportsTouchNavigation.value = touchLayoutQuery.matches || !finePointerQuery.matches
})

const scrollToNext = () => {
  document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' })
}

// Слайдер логотипов в карточке "Образование" (планшет/мобилка) —
// переиспользует ту же логику автопереключения, что и фото-слайдер выше.
const LOGO_SLIDE_DURATION_MS = 3000

const logos = [
  {
    src: sechenovLogo,
    alt: 'Сеченовский Университет',
    href: PARTNER_LINKS.sechenov,
    // Логотип вертикальный с мелким текстом под гербом — увеличенная высота
    // и contrast-125 нужны, чтобы детали оставались читаемыми в слайдере.
    class: 'theme-logo theme-logo--contrast h-20 sm:h-24 md:h-28 w-auto object-contain opacity-90'
  },
  {
    src: genotekLogo,
    alt: 'Genotek',
    href: PARTNER_LINKS.genotek,
    class: 'theme-logo h-8 sm:h-10 md:h-11 w-auto object-contain opacity-90'
  },
  {
    src: siriusLogo,
    alt: 'Сириус',
    href: PARTNER_LINKS.sirius,
    class: 'theme-logo h-9 sm:h-11 md:h-12 w-auto object-contain opacity-90'
  }
]

const {
  currentIndex: activeLogoIndex,
  isPaused: isLogoPaused,
  progressKey: logoProgressKey,
  next: nextLogoSlide,
  prev: prevLogoSlide,
  goTo: goToLogoSlide,
  pause: pauseLogoSlider,
  resume: resumeLogoSlider
} = useAutoSlider(logos.length, LOGO_SLIDE_DURATION_MS)
</script>

<template>
  <section class="relative h-auto min-h-0 pb-16 md:pb-20 lg:pb-24 lg:h-dvh lg:max-h-dvh overflow-hidden flex flex-col animate-fade-in-up">
    <TheHeader v-model:isDark="isDark" />

    <div class="flex-1 min-h-0 flex flex-col justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-4 sm:pt-4 lg:pb-8">
      <div class="shrink-0 mb-3 sm:mb-4 max-w-2xl">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
          Академическое портфолио <span class="text-emerald-600 dark:text-emerald-400">исследователя</span>.
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal mt-0 mb-0 opacity-90 leading-normal">
          Генетика, биотехнологии и разработка ПЦР-систем.
        </p>
      </div>

      <div class="flex-1 min-h-0 flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        <div
          class="min-h-[320px] sm:min-h-[360px] md:min-h-0 md:col-span-2 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0d131f] border border-slate-200/60 dark:border-slate-800/80 shadow-sm overflow-hidden relative flex flex-col justify-between md:flex-row transition-all duration-300 hover:shadow-lg hover:border-emerald-500/20 group w-full h-full touch-pan-y"
          @touchstart.passive="onTouchStart"
          @touchend="onTouchEnd"
          @touchcancel="onTouchCancel">

          <!-- Бейдж "ОБО МНЕ" -->
          <span
            class="absolute top-12 sm:top-6 left-3 sm:left-4 z-30 w-fit h-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/85 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 backdrop-blur-md uppercase tracking-wider">
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
                :fetchpriority="index === 0 ? 'high' : 'auto'"
                :loading="index === 0 ? 'eager' : 'lazy'"
                decoding="async"
                class="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-[5000ms] ease-out transform-gpu"
                :class="[
                  slide.position,
                  currentIndex === index ? 'scale-100' : 'scale-105'
                ]" />
            </div>

            <!-- Индикаторы прогресса: вверху на мобилке, внизу на десктопе -->
            <div
              data-slide-progress
              class="absolute top-3 left-3 right-3 z-30 flex gap-1.5 sm:top-auto sm:bottom-3 sm:gap-2">
              <button
                v-for="(_, index) in slides"
                :key="index"
                type="button"
                :aria-label="`Слайд ${index + 1}`"
                @click.stop="goToSlide(index)"
                class="group/progress relative flex-1 cursor-pointer touch-manipulation py-2 -my-2">
                <span
                  class="block h-1 rounded-full bg-white/30 backdrop-blur-sm overflow-hidden transition-colors duration-300 group-hover/progress:bg-white/50 group-active/progress:bg-white/60">
                  <span
                    v-if="index < currentIndex"
                    class="block h-full w-full bg-emerald-400"
                  />
                  <span
                    v-else-if="index === currentIndex"
                    :key="`progress-${currentIndex}-${progressKey}`"
                    class="slide-progress-fill block h-full bg-emerald-400"
                    :class="{ 'slide-progress-fill--paused': isPaused }"
                    :style="{ animationDuration: `${SLIDE_DURATION_MS}ms` }"
                  />
                  <span
                    v-else
                    class="block h-full w-0 bg-emerald-400"
                  />
                </span>
              </button>
            </div>
          </div>

          <!-- Градиентная подложка для текста (только мобилка) -->
          <div class="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#0d131f] dark:via-[#0d131f]/40 pointer-events-none z-10 md:hidden"></div>

          <!-- Текстовый блок внизу -->
          <div
            class="relative z-20 mt-auto w-full p-4 sm:p-5 md:p-6 lg:p-8 md:mt-0 md:max-w-[50%] flex flex-col md:justify-between md:bg-white md:dark:bg-[#0d131f] pointer-events-none">

            <div class="relative pointer-events-auto md:order-1">
              <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white dark:drop-shadow-md">
                Пчелинцев <br class="hidden sm:inline"> Михаил Игоревич
              </h2>
            </div>

            <div
              class="relative text-slate-700 dark:text-slate-200 md:dark:text-slate-300 text-xs sm:text-sm font-medium mt-3 md:mt-4 max-w-full dark:drop-shadow-md pointer-events-auto space-y-1.5 leading-relaxed md:order-2">
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Стажер-исследователь <a :href="PARTNER_LINKS.sechenov" target="_blank" rel="noopener noreferrer" class="font-semibold text-emerald-600 dark:text-emerald-400 cursor-pointer hover:underline underline-offset-2">Первого МГМУ им. И. М. Сеченова</a></span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Стажер компании <a :href="PARTNER_LINKS.genotek" target="_blank" rel="noopener noreferrer" class="font-semibold text-emerald-600 dark:text-emerald-400 cursor-pointer hover:underline underline-offset-2">Genotek</a></span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mt-1.5"></span>
                <span class="leading-snug">Педагог <span class="font-semibold text-emerald-600 dark:text-emerald-400">АПО</span> и <span class="font-semibold text-emerald-600 dark:text-emerald-400">ЦПМ</span></span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="min-h-[160px] sm:min-h-[180px] md:min-h-0 md:h-full shrink-0 md:shrink relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-[#0B1120] px-3.5 sm:px-5 lg:px-8 pb-3.5 sm:pb-5 lg:pb-8 pt-3.5 sm:pt-6 lg:pt-8 flex flex-col justify-between group hover:border-emerald-500/20 dark:hover:border-white/30 hover:shadow-lg dark:hover:bg-white/[0.02] transition-all duration-300 shadow-sm dark:shadow-2xl"
          @mouseenter="pauseLogoSlider"
          @mouseleave="resumeLogoSlider">

          <!-- Desktop (lg и выше): компактный вертикальный ряд по центру, гарантированно вмещается по высоте -->
          <div class="hidden lg:flex flex-col items-center justify-center my-auto gap-6 xl:gap-8 w-full">
            <!-- Сеченовский Университет -->
            <a
              :href="PARTNER_LINKS.sechenov"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-full cursor-pointer">
              <img
                :src="sechenovLogo"
                class="theme-logo theme-logo--contrast h-16 xl:h-19 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                alt="Сеченовский Университет" />
            </a>

            <div class="w-16 xl:w-20 h-[1px] bg-slate-200 dark:bg-white/10"></div>

            <!-- Genotek -->
            <a
              :href="PARTNER_LINKS.genotek"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-full cursor-pointer">
              <img
                :src="genotekLogo"
                class="theme-logo h-7 xl:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                alt="Genotek" />
            </a>

            <div class="w-16 xl:w-20 h-[1px] bg-slate-200 dark:bg-white/10"></div>

            <!-- Сириус -->
            <a
              :href="PARTNER_LINKS.sirius"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-full cursor-pointer">
              <img
                :src="siriusLogo"
                class="theme-logo h-8 xl:h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                alt="Сириус" />
            </a>
          </div>

          <!-- Планшет и мобилка (< lg): слайдер логотипов -->
          <div
            class="flex lg:hidden flex-1 min-h-0 flex-col justify-between w-full touch-pan-y"
            @touchstart.passive="onLogoTouchStart"
            @touchend="onLogoTouchEnd"
            @touchcancel="onLogoTouchCancel">
            <div class="relative flex-1 min-h-0 flex items-center justify-center">
              <transition name="logo-fade" mode="out-in">
                <a
                  :key="activeLogoIndex"
                  :href="logos[activeLogoIndex].href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cursor-pointer">
                  <img
                    :src="logos[activeLogoIndex].src"
                    :class="logos[activeLogoIndex].class"
                    :alt="logos[activeLogoIndex].alt" />
                </a>
              </transition>
            </div>

            <!-- Лампово-белые полосы прогресса снизу с эффектом "наливания" -->
            <div
              data-slide-progress
              class="flex gap-2 mt-3 w-full shrink-0">
              <button
                v-for="(logo, idx) in logos"
                :key="idx"
                type="button"
                :aria-label="`Логотип ${idx + 1}`"
                @click.stop="goToLogoSlide(idx)"
                class="group/logo-progress relative flex-1 cursor-pointer touch-manipulation py-2 -my-2">
                <span
                  class="block h-1 rounded-full bg-slate-200 dark:bg-white/20 overflow-hidden transition-colors duration-300 group-hover/logo-progress:bg-slate-300 dark:group-hover/logo-progress:bg-white/30 group-active/logo-progress:bg-slate-400 dark:group-active/logo-progress:bg-white/40">
                  <span
                    v-if="idx < activeLogoIndex"
                    class="block h-full w-full bg-slate-900 dark:bg-white/90 dark:shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  />
                  <span
                    v-else-if="idx === activeLogoIndex"
                    :key="`logo-progress-${activeLogoIndex}-${logoProgressKey}`"
                    class="slide-progress-fill block h-full bg-slate-900 dark:bg-white/90 dark:shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    :class="{ 'slide-progress-fill--paused': isLogoPaused }"
                    :style="{ animationDuration: `${LOGO_SLIDE_DURATION_MS}ms` }"
                  />
                  <span
                    v-else
                    class="block h-full w-0 bg-slate-900 dark:bg-white/90"
                  />
                </span>
              </button>
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
      <span class="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        Листать
      </span>
      <svg 
        class="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-y-1 animate-bounce" 
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

.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: opacity 0.4s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
}
</style>
