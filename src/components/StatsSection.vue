<script setup>
import { TrendingUp, Award, Briefcase, Users } from 'lucide-vue-next'

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
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
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
          <div class="relative overflow-hidden rounded-2xl border border-slate-800/80 group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgPubs" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            
            <!-- Тёмный градиент для читаемости -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 z-10"></div>
            
            <!-- Верхний блок: Иконка -->
            <div class="flex items-center justify-between mb-6 relative z-20">
              <div class="p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 inline-flex items-center justify-center">
                <TrendingUp :size="20" class="text-emerald-400 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <!-- Нижний блок: Цифра + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <div class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                21
              </div>
              <h3 class="text-base font-semibold text-slate-100 mb-1">
                Публикация
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal opacity-90">
                Урология, иммуногенетика, агробиотех, вирусология (<span class="text-emerald-400 font-medium">ORCID</span>, <span class="text-emerald-400 font-medium">РИНЦ</span>)
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 2: Патенты -->
        <div class="reveal-item delay-200 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-800/80 group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgPatents" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            
            <!-- Тёмный градиент для читаемости -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 z-10"></div>
            
            <!-- Верхний блок: Иконка -->
            <div class="flex items-center justify-between mb-6 relative z-20">
              <div class="p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 inline-flex items-center justify-center">
                <Award :size="20" class="text-blue-400 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <!-- Нижний блок: Цифра + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <div class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                2
              </div>
              <h3 class="text-base font-semibold text-slate-100 mb-1">
                Патента и разработки
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal opacity-90">
                <span class="text-blue-400 font-medium">Кавернотом Меньщикова</span> и <span class="text-blue-400 font-medium">ПЦР-панели</span> для аквакультуры
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 3: Опыт -->
        <div class="reveal-item delay-300 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-800/80 group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgExp" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            
            <!-- Тёмный градиент для читаемости -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 z-10"></div>
            
            <!-- Верхний блок: Иконка -->
            <div class="flex items-center justify-between mb-6 relative z-20">
              <div class="p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 inline-flex items-center justify-center">
                <Briefcase :size="20" class="text-violet-400 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <!-- Нижний блок: Цифра + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <div class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                5+ лет
              </div>
              <h3 class="text-base font-semibold text-slate-100 mb-1">
                Опыта в генетике
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal opacity-90">
                <span class="text-purple-400 font-medium">Genotek</span>, <span class="text-purple-400 font-medium">Сеченовский Университет</span>, <span class="text-purple-400 font-medium">ИБГ РАН</span>, <span class="text-purple-400 font-medium">ЦРО «Интеграция»</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Карточка 4: Ученики -->
        <div class="reveal-item delay-400 h-full">
          <div class="relative overflow-hidden rounded-2xl border border-slate-800/80 group p-6 sm:p-8 h-full w-full flex flex-col justify-between">
            <!-- Фоновое изображение -->
            <img :src="imgStudents" alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
            
            <!-- Тёмный градиент для читаемости -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 z-10"></div>
            
            <!-- Верхний блок: Иконка -->
            <div class="flex items-center justify-between mb-6 relative z-20">
              <div class="p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 inline-flex items-center justify-center">
                <Users :size="20" class="text-amber-400 sm:w-6 sm:h-6" />
              </div>
            </div>
            
            <!-- Нижний блок: Цифра + Текст -->
            <div class="flex flex-col justify-end mt-auto relative z-20">
              <div class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                20+
              </div>
              <h3 class="text-base font-semibold text-slate-100 mb-1">
                Победителей олимпиад
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal opacity-90">
                Подготовка учеников <span class="text-amber-400 font-medium">ВсОШ</span>, <span class="text-amber-400 font-medium">«Большие вызовы»</span>, <span class="text-amber-400 font-medium">НТО</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
