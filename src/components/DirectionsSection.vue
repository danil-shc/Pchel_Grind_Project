<script setup>
import { Dna, Microscope, Sparkles, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="directions" class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
      <div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">Направления работы</span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">Чем занимается ученый</h2>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mt-4 md:mt-0 leading-relaxed">
        Основные векторы академической и практической деятельности в Сеченовском Университете.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="reveal-item delay-100">
        <div class="group relative h-full bg-white dark:bg-[#0d131f] p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Dna :size="24" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 flex items-center justify-between text-slate-900 dark:text-white">
            Молекулярная генетика & Диагностика
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Разработка диагностических ПЦР-тест-систем, поиск генетических маркеров фиброзных и урологических заболеваний. Исследования болезни Пейрони и кавернозного фиброза (El Clinic, Сеченовский Университет).
          </p>
        </div>
      </div>

      <div class="reveal-item delay-200">
        <div class="group relative h-full bg-white dark:bg-[#0d131f] p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Microscope :size="24" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 flex items-center justify-between text-slate-900 dark:text-white">
            Биоинформатика & SNP-анализ
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Биоинформатическая обработка данных NGS и GWAS, аннотация вариантов (NCBI, ClinVar, Ensembl) и филогенетический анализ. Визуализация результатов для клинических отчётов в Genotek.
          </p>
        </div>
      </div>

      <div class="reveal-item delay-300">
        <div class="group relative h-full bg-white dark:bg-[#0d131f] p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/80 hover:shadow-xl hover:-translate-y-1">
          <div class="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Sparkles :size="24" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-3 flex items-center justify-between text-slate-900 dark:text-white">
            Агрогенетика & Проектный менеджмент
            <ArrowUpRight :size="16" class="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Руководство проектом по получению и молекулярно-генетической оценке дигаплоидных линий рапса в ЦРО «Интеграция». Разработка маркеров устойчивости и молекулярная паспортизация культур.
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>