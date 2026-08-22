<script setup>
import { Send, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <footer class="w-full border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Верхняя часть футера -->
      <div class="py-8 sm:py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        
        <!-- Левая часть: Информация об авторе -->
        <div class="flex-1">
          <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Пчелинцев М.И.
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Методист, ученый, биоинформатик, преподаватель
          </p>
        </div>

        <!-- Правая часть: Ссылки -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
          
          <!-- ORCID -->
          <a 
            href="https://orcid.org/0000-0002-3878-8265" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 transition-all"
          >
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">ORCID: 0000-0002-3878-8265</span>
            <ArrowUpRight :size="14" class="text-slate-500 dark:text-slate-500 group-hover:text-emerald-500 transition-colors" />
          </a>

          <!-- Telegram -->
          <a 
            href="https://t.me/AkellaMP" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all"
          >
            <Send :size="14" class="text-blue-500" />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">@AkellaMP</span>
          </a>

        </div>

      </div>

      <!-- Копирайт -->
      <div class="py-6 border-t border-slate-200/40 dark:border-slate-800/40">
        <p class="text-xs sm:text-sm text-center text-slate-500 dark:text-slate-500 font-medium">
          © 2026 Пчелинцев Михаил Игоревич. Все права защищены.
        </p>
      </div>

    </div>
  </footer>
</template>
