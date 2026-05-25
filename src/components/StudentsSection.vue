<script setup>
import { Link2, ArrowUpRight, FileText, Calendar } from 'lucide-vue-next'
</script>

<template>
  <section v-reveal class="mt-12 md:mt-20 lg:mt-32 pt-10 md:pt-14 lg:pt-20 border-t border-slate-200/60 dark:border-slate-800/60">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
      <div>
        <span class="text-xs font-bold tracking-widest text-emerald-500 uppercase">Ресурсы и профили</span>
        <h2 class="text-3xl font-black tracking-tight mt-2 sm:text-4xl">Студентам и коллегам</h2>
      </div>
      <p class="text-slate-500 dark:text-slate-400 max-w-sm text-sm mt-4 md:mt-0">
        Полезные учебные материалы, темы научных работ и официальные академические ID исследователя.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="reveal-item delay-100 lg:col-span-1 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between">
        <div>
          <div class="w-11 h-11 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-6">
            <Link2 :size="20" />
          </div>
          <h3 class="text-lg font-bold mb-2">Научные профили</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-6">Индексы цитирования и публикации в базах данных.</p>
        </div>
        <div class="space-y-3">
          <a href="#" class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-sm font-medium hover:border-emerald-500/40 transition-colors group">
            <span>Google Scholar</span>
            <ArrowUpRight :size="16" class="text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </a>
          <a href="#" class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-sm font-medium hover:border-emerald-500/40 transition-colors group">
            <span>ResearchGate</span>
            <ArrowUpRight :size="16" class="text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </a>
        </div>
      </div>

      <div class="reveal-item delay-200 lg:col-span-2 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 group hover:border-emerald-500/30 transition-all">
          <div>
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <FileText :size="18" />
            </div>
            <h4 class="font-bold text-base mb-1">Темы ВКР и курсовых</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Список актуальных направлений исследований на 2026 учебный год.</p>
          </div>
          <a href="#" class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500 mt-6 group-hover:underline">
            Смотреть список <ArrowUpRight :size="12" />
          </a>
        </div>

        <div class="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 group hover:border-violet-500/30 transition-all">
          <div>
            <div class="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4">
              <Calendar :size="18" />
            </div>
            <h4 class="font-bold text-base mb-1">Консультации</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">График отработок, приёма зачётов и академических часов.</p>
          </div>
          <span class="text-xs font-medium text-slate-400 dark:text-slate-500 mt-6">Четверг: 15:00 – 18:00</span>
        </div>
      </div>
    </div>
  </section>
</template>