<script setup>
import { Camera } from 'lucide-vue-next'
</script>

<template>
  <section v-reveal
    class="mt-12 md:mt-20 lg:mt-32 pt-10 md:pt-14 lg:pt-20 border-t border-slate-200/60 dark:border-slate-800/60">
    <div class="flex items-center gap-4 md:gap-6 mb-8 md:mb-14 reveal-item">
      <div class="p-4 rounded-3xl bg-amber-500/10 text-amber-500 shadow-inner border border-amber-500/10">
        <Camera :size="32" stroke-width="1.5" />
      </div>
      <div>
        <span
          class="text-xs font-bold tracking-widest text-amber-500 uppercase bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10">
          Портфолио в кадрах
        </span>
        <h2 class="text-3xl font-black tracking-tight mt-2 sm:text-4xl text-slate-900 dark:text-white">
          Эксперт в действии
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      <div class="reveal-item delay-100">
        <div
          class="group aspect-[3/4] rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/50 shadow-sm transition-all duration-500 hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_37_2026-05-24_20-54-57.webp" alt="Академическая работа"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100">
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end z-10">
            <span
              class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full w-max">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Наука
            </span>
            <h4 class="text-base font-bold text-white mt-3 leading-snug tracking-tight">
              Исследовательская деятельность на базе НИУ Сеченова.
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-200">
        <div
          class="group aspect-[3/4] rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/50 shadow-sm transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_16_2026-05-24_20-54-57.webp" alt="Работа в лаборатории"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter contrast-125">
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end z-10">
            <span
              class="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full w-max">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Лаборатория
            </span>
            <h4 class="text-base font-bold text-white mt-3 leading-snug tracking-tight">
              Работа с клеточными культурами в боксах Neoteric Landystand.
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-300">
        <div
          class="group aspect-[3/4] rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/50 shadow-sm transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_24_2026-05-24_20-54-57.webp" alt="Работа в лаборатории"
            class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter contrast-125">
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end z-10">
            <span
              class="inline-flex items-center gap-1.5 text-[10px] font-bold text-violet-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full w-max">
              <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Анализ
            </span>
            <h4 class="text-base font-bold text-white mt-3 leading-snug tracking-tight">
              Сбор образцов, ведение протоколов и аналитическая биофизика.
            </h4>
          </div>
        </div>
      </div>

      <div class="reveal-item delay-400">
        <div
          class="group aspect-[3/4] rounded-3xl overflow-hidden relative border border-slate-200/60 dark:border-slate-800/50 shadow-sm transition-all duration-500 hover:shadow-amber-500/10 hover:border-amber-500/30 hover:-translate-y-2 transform-gpu bg-slate-900">
          <img src="./assets/images/photo_6_2026-05-24_20-54-57.webp" alt="Преподавание"
            class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 transform-gpu opacity-80 group-hover:opacity-100 filter brightness-95">
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end z-10">
            <span
              class="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full w-max">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Менторство
            </span>
            <h4 class="text-base font-bold text-white mt-3 leading-snug tracking-tight">
              Подготовка олимпиадников и ведение авторских лекториев.
            </h4>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
