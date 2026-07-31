<script setup>
import { Sun, Moon } from 'lucide-vue-next'

const isDark = defineModel('isDark', { type: Boolean, default: false })
</script>

<template>
  <header class="shrink-0 w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4 flex items-center justify-between gap-3 border-b border-slate-200/50 dark:border-slate-800/50 relative z-50">
    <div class="flex flex-col min-w-0 flex-1">
      <span class="text-sm sm:text-base md:text-lg font-bold text-white">
        Пчелинцев М.И.
      </span>
      <span class="text-[10px] sm:text-xs text-slate-400 tracking-wide font-medium uppercase mt-0.5">
        Первый МГМУ им. И.М. Сеченова
      </span>
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