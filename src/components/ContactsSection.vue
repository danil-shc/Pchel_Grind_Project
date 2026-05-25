<script setup>
import { Mail, Send } from 'lucide-vue-next'
</script>

<template>
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <section v-reveal class="mt-12 md:mt-20 lg:mt-32 pt-10 md:pt-14 lg:pt-20 border-t border-slate-200/60 dark:border-slate-800/60 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start w-full">
        
        <div class="lg:col-span-2 reveal-item w-full">
          <span class="text-xs font-bold tracking-widest text-emerald-500 uppercase">Обратная связь</span>
          <h2 class="text-3xl font-black tracking-tight mt-2 sm:text-4xl mb-4 text-slate-900 dark:text-white">
            Давайте сотрудничать
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Открыт для совместных научных проектов, рецензирования публикаций, выступлений на форумах и лекториях.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                <Mail :size="16" />
              </div>
              <span class="font-medium break-all">pchelintsev_mi@sechenov.ru</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                <Send :size="16" />
              </div>
              <span class="font-medium">@pchelintsev_biotech</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm rounded-3xl p-6 sm:p-8 reveal-item delay-100 w-full">
          <form @submit.prevent class="space-y-5 w-full">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <div class="space-y-2">
                <label class="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-left">Ваше имя</label>
                <input type="text" placeholder="Иван Иванов" class="w-full text-sm px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 dark:text-white transition-all" />
              </div>
              <div class="space-y-2">
                <label class="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-left">Email / Telegram</label>
                <input type="text" placeholder="@username или почта" class="w-full text-sm px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 dark:text-white transition-all" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-left">Сообщение</label>
              <textarea rows="4" placeholder="Предложение о сотрудничестве или вопрос по учебе..." class="w-full text-sm px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 dark:text-white transition-all resize-none"></textarea>
            </div>
            
            <div class="flex justify-start pt-2 w-full">
              <button type="submit" class="w-full sm:w-auto h-11 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm">
                <span>Отправить запрос</span>
                <Send :size="14" />
              </button>
            </div>

          </form>
        </div>
        
      </div>

      <div class="mt-12 md:mt-24 pt-8 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium w-full">
        <span>© 2026 Пчелинцев М.И. Все права защищены.</span>
        <span>НИУ Сеченова • Кафедра биологии</span>
      </div>
    </section>

  </div>
</template>