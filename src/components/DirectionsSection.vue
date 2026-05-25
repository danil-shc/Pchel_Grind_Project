<script setup>
import { Dna, Microscope, Sparkles, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section v-reveal class="mt-12 md:mt-20 lg:mt-32 pt-10 md:pt-14 lg:pt-20 border-t border-slate-200/60 dark:border-slate-800/60">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
      <div>
        <span class="text-xs font-bold tracking-widest text-emerald-500 uppercase">Направления работы</span>
        <h2 class="text-3xl font-black tracking-tight mt-2 sm:text-4xl">Чем занимается ученый</h2>
      </div>
      <p class="text-slate-500 dark:text-slate-400 max-w-sm text-sm mt-4 md:mt-0">
        Основные векторы академической и практической деятельности в Сеченовском Университете.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="reveal-item delay-100">
        <div class="group relative h-full bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Dna :size="24" />
          </div>
          <h3 class="text-xl font-bold mb-3 flex items-center justify-between">
            Молекулярная биология
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Исследование клеточных механизмов, генетических маркеров и молекулярных структур.
          </p>
        </div>
      </div>

      <div class="reveal-item delay-200">
        <div class="group relative h-full bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Microscope :size="24" />
          </div>
          <h3 class="text-xl font-bold mb-3 flex items-center justify-between">
            Лаборатория
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Ведение высокотехнологичных практических занятий для студентов медицинских специальностей.
          </p>
        </div>
      </div>

      <div class="reveal-item delay-300">
        <div class="group relative h-full bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Sparkles :size="24" />
          </div>
          <h3 class="text-xl font-bold mb-3 flex items-center justify-between">
            Популяризация науки
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Выступления на открытых лекториях и создание контента о сложной биологии.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>