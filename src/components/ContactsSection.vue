<script setup>
import { ref } from 'vue'
import { Mail, Send, Globe, MessageSquare } from 'lucide-vue-next'

const selectedTopic = ref('collaboration')
</script>

<template>
  <section class="w-full py-12 sm:py-16 md:py-20 border-t border-slate-200/60 dark:border-slate-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Заголовок секции -->
      <div class="mb-12 sm:mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
          Контакты и сотрудничество
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4 text-slate-900 dark:text-white">
          Давайте сотрудничать
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Открыт к научно-исследовательским проектам, наставничеству, экспертному рецензированию и лекционным программам.
        </p>
      </div>

      <!-- Основной контент: Контакты + Форма -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <!-- Левая колонка: Прямые контакты -->
        <div class="space-y-4">
          
          <!-- Email карточка -->
          <div class="group bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                <Mail :size="20" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Электронная почта</p>
                <a href="mailto:michaelpchelintsev@mail.ru" class="text-sm sm:text-base font-medium text-slate-200 hover:text-emerald-400 transition-colors break-all">
                  michaelpchelintsev@mail.ru
                </a>
              </div>
            </div>
          </div>

          <!-- Telegram карточка -->
          <div class="group bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Send :size="20" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Telegram</p>
                <a href="https://t.me/AkellaMP" target="_blank" rel="noopener noreferrer" class="text-sm sm:text-base font-medium text-slate-200 hover:text-blue-400 transition-colors">
                  @AkellaMP
                </a>
              </div>
            </div>
          </div>

          <!-- Аффилиация карточка -->
          <div class="group bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <Globe :size="20" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Локация & База</p>
                <p class="text-sm sm:text-base font-medium text-slate-200">
                  Москва • Сеченовский Университет / Genotek
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Правая колонка: Интерактивная форма -->
        <div class="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8">
          <form @submit.prevent class="space-y-6">
            
            <!-- Выбор темы обращения -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Тема обращения</label>
              <div class="space-y-2">
                <label class="flex items-center gap-3 p-4 rounded-xl border border-slate-800 cursor-pointer hover:border-emerald-500/30 transition-all" :class="selectedTopic === 'collaboration' ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-slate-950/50'">
                  <input type="radio" v-model="selectedTopic" value="collaboration" class="w-4 h-4 text-emerald-500 border-slate-700 focus:ring-emerald-500/20" />
                  <span class="text-sm font-medium text-slate-200">Научное сотрудничество / R&D</span>
                </label>
                <label class="flex items-center gap-3 p-4 rounded-xl border border-slate-800 cursor-pointer hover:border-emerald-500/30 transition-all" :class="selectedTopic === 'mentorship' ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-slate-950/50'">
                  <input type="radio" v-model="selectedTopic" value="mentorship" class="w-4 h-4 text-emerald-500 border-slate-700 focus:ring-emerald-500/20" />
                  <span class="text-sm font-medium text-slate-200">Руководство проектом / Наставничество</span>
                </label>
                <label class="flex items-center gap-3 p-4 rounded-xl border border-slate-800 cursor-pointer hover:border-emerald-500/30 transition-all" :class="selectedTopic === 'consultation' ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-slate-950/50'">
                  <input type="radio" v-model="selectedTopic" value="consultation" class="w-4 h-4 text-emerald-500 border-slate-700 focus:ring-emerald-500/20" />
                  <span class="text-sm font-medium text-slate-200">Консультация / Рецензирование</span>
                </label>
              </div>
            </div>

            <!-- Поля ввода -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Имя</label>
                <input type="text" placeholder="Иван Иванов" class="w-full text-sm px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-200 placeholder:text-slate-600 transition-all" />
              </div>
              <div class="space-y-2">
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email / Telegram</label>
                <input type="text" placeholder="@username или почта" class="w-full text-sm px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-200 placeholder:text-slate-600 transition-all" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Текст сообщения</label>
              <textarea rows="5" placeholder="Расскажите о вашем предложении или вопросе..." class="w-full text-sm px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-200 placeholder:text-slate-600 transition-all resize-none"></textarea>
            </div>

            <!-- Кнопка отправки -->
            <button type="submit" class="w-full h-12 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
              <span>Отправить сообщение</span>
              <Send :size="16" />
            </button>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>