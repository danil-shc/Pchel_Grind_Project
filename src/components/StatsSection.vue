<script setup>
import { TrendingUp, Award, Briefcase, Users } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-6 sm:py-10 border-t border-slate-200/60 dark:border-slate-800/60">
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
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- Карточка 1: Публикации -->
        <div class="reveal-item delay-100">
          <div class="group relative h-full bg-white dark:bg-[#0d131f] p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp :size="20" class="sm:w-6 sm:h-6" />
            </div>
            <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              21
            </div>
            <h3 class="text-sm sm:text-base font-bold mb-2 text-slate-900 dark:text-slate-100">
              Публикация
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Урология, иммуногенетика, агробиотех, вирусология (ORCID, РИНЦ)
            </p>
          </div>
        </div>

        <!-- Карточка 2: Патенты -->
        <div class="reveal-item delay-200">
          <div class="group relative h-full bg-white dark:bg-[#0d131f] p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award :size="20" class="sm:w-6 sm:h-6" />
            </div>
            <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              2
            </div>
            <h3 class="text-sm sm:text-base font-bold mb-2 text-slate-900 dark:text-slate-100">
              Патента и разработки
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Кавернотом Меньщикова и ПЦР-панели для аквакультуры
            </p>
          </div>
        </div>

        <!-- Карточка 3: Опыт -->
        <div class="reveal-item delay-300">
          <div class="group relative h-full bg-white dark:bg-[#0d131f] p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-violet-500/30 dark:hover:border-violet-500/30 hover:shadow-lg hover:-translate-y-1">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Briefcase :size="20" class="sm:w-6 sm:h-6" />
            </div>
            <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              5+ лет
            </div>
            <h3 class="text-sm sm:text-base font-bold mb-2 text-slate-900 dark:text-slate-100">
              Опыта в генетике
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Genotek, Сеченовский Университет, ИБГ РАН, ЦРО «Интеграция»
            </p>
          </div>
        </div>

        <!-- Карточка 4: Ученики -->
        <div class="reveal-item delay-400">
          <div class="group relative h-full bg-white dark:bg-[#0d131f] p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:shadow-lg hover:-translate-y-1">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users :size="20" class="sm:w-6 sm:h-6" />
            </div>
            <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
              20+
            </div>
            <h3 class="text-sm sm:text-base font-bold mb-2 text-slate-900 dark:text-slate-100">
              Победителей олимпиад
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Подготовка учеников ВсОШ, «Большие вызовы», НТО
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
