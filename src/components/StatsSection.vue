<script setup>
import { TrendingUp, Award, Briefcase, Users } from 'lucide-vue-next'

const WIKIPEDIA_LINKS = {
  nafld: 'https://ru.wikipedia.org/wiki/Неалкогольная_жировая_болезнь_печени',
}

// Импорт фоновых изображений
import imgPubs from './assets/images/photo_1.webp'
import imgPatents from './assets/images/photo_16.webp'
import imgExp from './assets/images/photo_27.webp'
import imgStudents from './assets/images/photo_42.webp'
</script>

<template>
  <section id="stats" class="w-full py-6 sm:py-10 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Заголовок секции -->
      <div class="mb-8 sm:mb-12 reveal-item">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Достижения
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">
          В цифрах и фактах
        </h2>
      </div>

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
        
        <!-- Карточка 1: Публикации -->
        <div class="reveal-item delay-100 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgPubs" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0" />
            
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30 z-10 pointer-events-none"></div>
            
            <!-- Верхний блок: Иконка + Цифра -->
            <div class="relative z-20 mb-2 flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                <TrendingUp :size="20" class="text-emerald-600 dark:text-emerald-400 sm:w-6 sm:h-6" />
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-300 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.92),0_0_12px_rgba(0,0,0,0.6)]">21</span>
            </div>
            
            <!-- Нижний блок: Заголовок + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-1 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Публикация
              </h3>
              <p class="text-sm text-slate-900 dark:text-slate-200 font-normal leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Урология, генетика, биоинформатика, агробиотех, вирусология (<span class="text-emerald-700 dark:text-emerald-400 font-semibold">ORCID</span>, <span class="text-emerald-700 dark:text-emerald-400 font-semibold">РИНЦ</span>)
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 2: Патенты -->
        <div class="reveal-item delay-200 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgPatents" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0" />
            
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30 z-10 pointer-events-none"></div>
            
            <!-- Верхний блок: Иконка + Цифра -->
            <div class="relative z-20 mb-2 flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                <Award :size="20" class="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.92),0_0_12px_rgba(0,0,0,0.6)]">3</span>
            </div>
            
            <!-- Нижний блок: Заголовок + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-1 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Патента и разработки
              </h3>
              <p class="text-sm text-slate-900 dark:text-slate-200 font-normal leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                <span class="text-blue-700 dark:text-blue-400 font-semibold">Кавернотом Меньщикова</span>, <span class="text-blue-700 dark:text-blue-400 font-semibold">ПЦР-панели</span> для аквакультуры, УЗ-оценка <a :href="WIKIPEDIA_LINKS.nafld" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-700 dark:text-blue-400 cursor-pointer hover:underline underline-offset-2">НАЖБП</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 3: Опыт -->
        <div class="reveal-item delay-300 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgExp" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0" />
            
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30 z-10 pointer-events-none"></div>
            
            <!-- Верхний блок: Иконка + Цифра -->
            <div class="relative z-20 mb-2 flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                <Briefcase :size="20" class="text-purple-600 dark:text-purple-400 sm:w-6 sm:h-6" />
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-purple-700 dark:text-purple-300 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.92),0_0_12px_rgba(0,0,0,0.6)]">5+</span>
            </div>
            
            <!-- Нижний блок: Заголовок + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-1 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Лет в генетике
              </h3>
              <p class="text-sm text-slate-900 dark:text-slate-200 font-normal leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                <span class="text-purple-700 dark:text-purple-400 font-semibold">Genotek</span>, <span class="text-purple-700 dark:text-purple-400 font-semibold">Сеченовский Университет</span>, <span class="text-purple-700 dark:text-purple-400 font-semibold">ИБГ РАН</span>, <span class="text-purple-700 dark:text-purple-400 font-semibold">ЦРО «Интеграция»</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 4: Ученики -->
        <div class="reveal-item delay-400 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgStudents" alt="" class="absolute inset-0 w-full h-full object-cover object-[center_32%] sm:object-center transition-transform duration-700 ease-out group-hover:scale-105 z-0" />
            
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-900/30 z-10 pointer-events-none"></div>
            
            <!-- Верхний блок: Иконка + Цифра -->
            <div class="relative z-20 mb-2 flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                <Users :size="20" class="text-amber-600 dark:text-amber-400 sm:w-6 sm:h-6" />
              </div>
              <span class="text-3xl sm:text-4xl font-extrabold text-amber-700 dark:text-amber-300 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_6px_rgba(0,0,0,0.92),0_0_12px_rgba(0,0,0,0.6)]">20+</span>
            </div>
            
            <!-- Нижний блок: Заголовок + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-1 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Победителей олимпиад
              </h3>
              <p class="text-sm text-slate-900 dark:text-slate-200 font-normal leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Подготовка учеников <span class="text-amber-700 dark:text-amber-400 font-semibold">ВсОШ</span>, <span class="text-amber-700 dark:text-amber-400 font-semibold">«Большие вызовы»</span>, <span class="text-amber-700 dark:text-amber-400 font-semibold">Перечневых олимпиад</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
