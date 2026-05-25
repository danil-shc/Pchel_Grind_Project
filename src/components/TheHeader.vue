<script setup>
import { Sun, Moon } from 'lucide-vue-next'

const isDark = defineModel('isDark', { type: Boolean, default: false })
</script>

<template>
  <header class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 relative z-50">
    <div class="flex flex-col">
      <span class="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
        Пчелинцев М.И.
      </span>
      <span class="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mt-0.5">
        НИУ Сеченова
      </span>
    </div>

    <button @click="isDark = !isDark"
      class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer text-sm font-medium">
      <Sun v-if="isDark" :size="16" class="text-amber-500" />
      <Moon v-else :size="16" class="text-indigo-500" />
      <span>{{ isDark ? 'Светлая тема' : 'Темная тема' }}</span>
    </button>
  </header>
</template>