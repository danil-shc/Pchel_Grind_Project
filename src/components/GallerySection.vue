<script setup>
import { Camera, Presentation, Microscope, Binary, Users } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-14 reveal-item">
      <div class="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-amber-500/10 text-amber-500 shadow-inner border border-amber-500/20">
        <Camera :size="24" class="sm:w-8 sm:h-8" stroke-width="1.5" />
      </div>
      <div>
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 uppercase tracking-wider">
          Портфолио в кадрах
        </span>
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mt-1.5 sm:mt-2 text-slate-900 dark:text-white">
          Эксперт в действии
        </h2>
      </div>
    </div>

    <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">

      <div class="reveal-item delay-100">
        <div
          class="group w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_37_2026-05-24_20-54-57.webp" alt="Наука и спикерство"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100">
          <div class="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20">
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-medium shadow-md">
              <Presentation class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" stroke-width="2" />
              Наука & Спикерство
            </span>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-2.5 sm:p-4 lg:p-6 flex flex-col justify-end z-10">
            <h4 class="text-[11px] leading-tight sm:text-sm lg:text-base font-bold text-slate-100 sm:text-white tracking-tight">
              Исследовательская деятельность в Сеченовском Университете, доклады на III Конгрессе молодых учёных и финал Sechenov.Tech.
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-200">
        <div
          class="group w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_16_2026-05-24_20-54-57.webp" alt="Лаборатория"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter contrast-125">
          <div class="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20">
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-medium shadow-md">
              <Microscope class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" stroke-width="2" />
              Лаборатория
            </span>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-2.5 sm:p-4 lg:p-6 flex flex-col justify-end z-10">
            <h4 class="text-[11px] leading-tight sm:text-sm lg:text-base font-bold text-slate-100 sm:text-white tracking-tight">
              Молекулярно-генетические исследования, конструирование ПЦР-панелей и работа с клеточными культурами в боксах.
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-300">
        <div
          class="group w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:shadow-violet-500/10 hover:border-violet-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_24_2026-05-24_20-54-57.webp" alt="Биоинформатика и анализ"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter contrast-125">
          <div class="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20">
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-medium shadow-md">
              <Binary class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" stroke-width="2" />
              Биоинформатика & Анализ
            </span>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-2.5 sm:p-4 lg:p-6 flex flex-col justify-end z-10">
            <h4 class="text-[11px] leading-tight sm:text-sm lg:text-base font-bold text-slate-100 sm:text-white tracking-tight">
              Обработка данных NGS, анализ SNP-вариантов, ведение протоколов и аналитическая биофизика (Genotek / ИБГ РАН).
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-400">
        <div
          class="group w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-all duration-500 hover:shadow-amber-500/10 hover:border-amber-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_6_2026-05-24_20-54-57.webp" alt="Наставничество"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter brightness-95">
          <div class="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 z-20">
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-medium shadow-md">
              <Users class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" stroke-width="2" />
              Наставничество
            </span>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-2.5 sm:p-4 lg:p-6 flex flex-col justify-end z-10">
            <h4 class="text-[11px] leading-tight sm:text-sm lg:text-base font-bold text-slate-100 sm:text-white tracking-tight">
              Руководство проектными командами в ОЦ «Сириус», подготовка резерва сборной Москвы и олимпиадников ВсОШ.
            </h4>
          </div>
        </div>
      </div>

    </div>
    </div>
  </section>
</template>
