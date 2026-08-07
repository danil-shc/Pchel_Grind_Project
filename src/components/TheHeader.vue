<script setup>
import { Sun, Moon } from 'lucide-vue-next'

const isDark = defineModel('isDark', { type: Boolean, default: false })
</script>

<template>
  <header class="shrink-0 w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4 flex items-center justify-between gap-3 border-b border-slate-200/50 dark:border-slate-800/50 relative z-50">
    <div class="flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none min-w-0">
      <div class="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        <img
          src="/favicon.svg"
          alt="Logo"
          class="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div class="flex flex-col justify-center leading-tight min-w-0">
        <span class="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-wide transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400 whitespace-nowrap">
          Пчелинцев М.И.
        </span>
        <span class="text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wider uppercase transition-colors group-hover:text-slate-300 whitespace-nowrap">
          ПЕРВЫЙ МГМУ ИМ. И.М. СЕЧЕНОВА
        </span>
      </div>
    </div>

    <button @click="isDark = !isDark"
      class="whitespace-nowrap shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer font-medium">
      <Sun v-if="isDark" :size="14" class="text-amber-500" />
      <Moon v-else :size="14" class="text-indigo-500" />
      <span>{{ isDark ? 'Светлая тема' : 'Темная тема' }}</span>
    </button>
    </div>
  </header>
</template>