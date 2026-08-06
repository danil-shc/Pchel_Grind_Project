<script setup>
import { Mail, Send, Globe } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-12 sm:py-16 md:py-20 border-t border-slate-200/60 dark:border-slate-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Заголовок секции -->
      <div class="mb-12 sm:mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Контакты и сотрудничество
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4 text-slate-900 dark:text-white">
          Давайте сотрудничать
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Открыт к научно-исследовательским проектам, наставничеству, экспертному рецензированию и лекционным программам.
        </p>
      </div>

      <!-- Контактные карточки -->
      <div class="space-y-4 max-w-xl">

        <!-- Email -->
        <div class="group bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
              <Mail :size="20" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Электронная почта</p>
              <a href="mailto:michaelpchelintsev@mail.ru" class="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all">
                michaelpchelintsev@mail.ru
              </a>
            </div>
          </div>
        </div>

        <!-- Telegram -->
        <div class="group bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
              <Send :size="20" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Telegram</p>
              <a href="https://t.me/AkellaMP" target="_blank" rel="noopener noreferrer" class="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                @AkellaMP
              </a>
            </div>
          </div>
        </div>

        <!-- Локация -->
        <div class="group bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
              <Globe :size="20" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Локация</p>
              <p class="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                Москва • Сеченовский Университет              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
