<script setup>
import { User, Send, BookOpen, GraduationCap, Calendar } from 'lucide-vue-next'
</script>

<template>
  <section class="animate-fade-in-up">
    <div class="mb-10 max-w-2xl">
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
        Исследования, меняющие взгляд на <span class="text-emerald-500 dark:text-emerald-400">биологию</span>.
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-400">
        Цифровое портфолио и академический профиль преподавателя и исследователя.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
      <div
        class="row-span-2 md:row-span-2 md:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden flex flex-col md:flex-row relative transition-all duration-300 hover:shadow-lg hover:border-emerald-500/20 group w-full h-full min-h-[480px] md:min-h-0">

        <div
          class="p-6 sm:p-10 flex flex-col justify-end md:justify-between flex-1 md:max-w-[50%] z-10 pointer-events-none h-full bg-transparent md:bg-white md:dark:bg-slate-900">
          <div class="pointer-events-auto">
            <span
              class="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-500 dark:text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full mb-4 md:mb-0">
              <User :size="12" />Обо мне
            </span>
            <h2
              class="text-3xl sm:text-4xl md:text-4xl font-extrabold mt-4 md:mt-6 tracking-tight leading-tight text-white md:text-slate-900 md:dark:text-white drop-shadow-md md:drop-shadow-none">
              Пчелинцев <br class="hidden sm:inline"> Михаил Игоревич
            </h2>
          </div>

          <p
            class="text-slate-200 md:text-slate-600 md:dark:text-slate-400 text-sm sm:text-base font-medium mt-4 md:mt-0 max-w-[90%] md:max-w-full drop-shadow-md md:drop-shadow-none pointer-events-auto leading-relaxed">
            Преподаватель кафедры биологии НИУ Сеченова. Исследователь, спикер научных конференций.
          </p>
        </div>

        <div
          class="absolute md:relative inset-0 w-full md:w-1/2 h-full overflow-hidden border-l border-slate-100 dark:border-slate-800/50 z-0">
          <img src="./assets/images/photo_10_2026-05-24_20-54-57.webp" alt="Михаил Игоревич Пчелинцев"
            class="absolute inset-0 h-full w-full object-cover object-top pointer-events-none transition-transform duration-500 group-hover:scale-105 transform-gpu" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent md:hidden"></div>
        </div>

      </div>

      <div
        class="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 cursor-pointer group hover:shadow-md">
        <div class="flex justify-between items-start">
          <div
            class="p-3 rounded-2xl bg-sky-500/10 text-sky-500 transition-transform duration-300 ease-in-out will-change-transform transform-gpu group-hover:scale-110">
            <Send :size="22" />
          </div>
          <span class="text-xs font-medium text-sky-500 bg-sky-500/10 px-2.5 py-0.5 rounded-full">Блог</span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-1">Telegram Канал</h3>
          <p class="text-xs text-slate-500 line-clamp-2">Фотки, мысли, заметки с кафедры.</p>
        </div>
      </div>

      <div
        class="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group hover:shadow-md">
        <div class="flex justify-between items-start">
          <div
            class="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 ease-in-out will-change-transform transform-gpu group-hover:scale-110">
            <BookOpen :size="22" />
          </div>
          <span class="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">Scopus /
            ВАК</span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-1">Публикации</h3>
          <p class="text-xs text-slate-500 line-clamp-2">Список научных статей.</p>
        </div>
      </div>

      <div
        class="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between hover:border-violet-500/50 transition-all duration-300 cursor-pointer group hover:shadow-md">
        <div class="flex justify-between items-start">
          <div
            class="p-3 rounded-2xl bg-violet-500/10 text-violet-500 transition-transform duration-300 ease-in-out will-change-transform transform-gpu group-hover:scale-110">
            <GraduationCap :size="22" />
          </div>
          <span class="text-xs font-medium text-violet-500 bg-violet-500/10 px-2.5 py-0.5 rounded-full">Сеченовка</span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-1">Преподавание</h3>
          <p class="text-xs text-slate-500 line-clamp-2">Материалы для студентов.</p>
        </div>
      </div>

      <div
        class="md:col-span-2 rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between overflow-hidden">
        <div class="flex justify-between items-center mb-2">
          <span
            class="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-500 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
            <Calendar :size="12" />Хронология
          </span>
        </div>
        <div
          class="grid grid-cols-3 gap-4 relative before:absolute before:top-[18px] before:left-4 before:right-4 before:h-[2px] before:bg-slate-100 dark:before:bg-slate-800 before:z-0">
          <div class="relative z-10 group cursor-pointer">
            <div
              class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-white dark:border-slate-900 group-hover:border-amber-500 transition-all duration-300 text-center">
              <span class="text-xs font-bold text-slate-600 group-hover:text-amber-500">24</span>
            </div>
            <h4 class="font-bold text-sm mt-3">Биофизика</h4>
          </div>
          <div class="relative z-10 group cursor-pointer">
            <div
              class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-white dark:border-slate-900 group-hover:border-amber-500 transition-all duration-300 text-center">
              <span class="text-xs font-bold text-slate-600 group-hover:text-amber-500">25</span>
            </div>
            <h4 class="font-bold text-sm mt-3">Scopus Q1</h4>
          </div>
          <div class="relative z-10 group cursor-pointer">
            <div
              class="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 flex items-center justify-center border-2 border-amber-500 text-center transition-all duration-300">
              <span class="text-xs font-bold text-amber-500">26</span>
            </div>
            <h4 class="font-bold text-sm mt-3">Новый курс</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>