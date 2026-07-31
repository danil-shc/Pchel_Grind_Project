<script setup>
import { Link2, ArrowUpRight, FileText, Calendar } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-t border-slate-200/60 dark:border-slate-800/60">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
      <div>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">Ресурсы и профили</span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">Студентам и коллегам</h2>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mt-4 md:mt-0 leading-relaxed">
        Полезные учебные материалы, темы научных работ и официальные академические ID исследователя.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="reveal-item delay-100 lg:col-span-1 bg-white dark:bg-[#0d131f] p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between">
        <div>
          <div class="w-11 h-11 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-6">
            <Link2 :size="20" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">Научные профили</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Индексы цитирования и публикации в базах данных.</p>
        </div>
        <div class="space-y-3">
          <a href="#" class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 text-sm font-medium hover:border-emerald-500/40 transition-colors group">
            <span class="text-slate-900 dark:text-white">Google Scholar</span>
            <ArrowUpRight :size="16" class="text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </a>
          <a href="#" class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 text-sm font-medium hover:border-emerald-500/40 transition-colors group">
            <span class="text-slate-900 dark:text-white">ResearchGate</span>
            <ArrowUpRight :size="16" class="text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </a>
        </div>
      </div>

      <div class="reveal-item delay-200 lg:col-span-2 bg-white dark:bg-[#0d131f] p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/40 dark:border-slate-800/80 group hover:border-emerald-500/30 transition-all">
          <div>
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <FileText :size="18" />
            </div>
            <h4 class="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">Темы ВКР и курсовых</h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Список актуальных направлений исследований на 2026 учебный год.</p>
          </div>
          <a href="#" class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 mt-6 group-hover:underline">
            Смотреть список <ArrowUpRight :size="12" />
          </a>
        </div>

        <div class="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/40 dark:border-slate-800/80 group hover:border-violet-500/30 transition-all">
          <div>
            <div class="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4">
              <Calendar :size="18" />
            </div>
            <h4 class="font-bold text-base sm:text-lg mb-1 text-slate-900 dark:text-white">Консультации</h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">График отработок, приёма зачётов и академических часов.</p>
          </div>
          <span class="text-xs font-medium text-slate-400 dark:text-slate-500 mt-6">Четверг: 15:00 – 18:00</span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>