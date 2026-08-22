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

      <!-- Разделительная линия -->
      <div class="border-t border-slate-200/40 dark:border-slate-800/40"></div>

      <!-- Юридический дисклеймер -->
      <div class="text-[11px] leading-relaxed text-slate-500 max-w-4xl mx-auto text-center space-y-1.5 opacity-80 pt-4">
        <p>
          <strong class="font-normal text-slate-400">Правовая информация:</strong> Данный веб-ресурс является личным академическим портфолио М. И. Пчелинцева, носит исключительно некоммерческий, демонстрационный и информационный характер и не является публичной офертой (ст. 437 ГК РФ).
        </p>
        <p>
          Все товарные знаки, фирменные наименования и логотипы организаций — ФГАОУ ВО Первый МГМУ им. И.М. Сеченова Минздрава России (Сеченовский Университет), ООО «Генотек» (Genotek) и Образовательный Фонд «Талант и успех» (Образовательный центр «Сириус») — принадлежат их законным правообладателям и использованы исключительно с целью информирования об образовании, квалификации и профессиональном опыте автора.
        </p>
      </div>

      <!-- Копирайт -->
      <div class="text-center text-xs text-slate-500 pt-3 pb-6">
        © 2026 Пчелинцев Михаил Игоревич. Все права защищены.
      </div>

    </div>
  </footer>
</template>
