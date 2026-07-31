<script setup>
import { GraduationCap, Trophy, Award, BookOpen, CheckCircle } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Заголовок секции -->
      <div class="mb-8 sm:mb-12 reveal-item">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-wider">
          Бэкграунд и Наставничество
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 mb-4 text-slate-900 dark:text-white">
          Академическая база & Результаты
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Фундаментальное медицинское образование и успехи воспитанников на всероссийском уровне.
        </p>
      </div>

      <!-- Две колонки: Образование и Результаты -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        <!-- Колонка 1: Образование & Квалификация -->
        <div class="reveal-item delay-100">
          <div class="h-full bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            
            <!-- Заголовок колонки -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <GraduationCap :size="20" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white">
                Образование & Квалификация
              </h3>
            </div>

            <!-- Блоки образования -->
            <div class="space-y-6">
              
              <!-- Блок 1: Сеченовский -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-white mb-1">
                    Сеченовский Университет (6 курс)
                  </h4>
                  <p class="text-sm font-semibold text-emerald-400 mb-2">
                    Лечебное дело, специализация «Врач-исследователь»
                  </p>
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Институт клинической медицины. Профильные области: генетика, молекулярная биология, урология.
                  </p>
                </div>
              </div>

              <!-- Блок 2: НГУ -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-white mb-1">
                    НГУ, Цифровая кафедра (2024)
                  </h4>
                  <p class="text-sm font-semibold text-emerald-400 mb-2">
                    Практическая биоинформатика и молекулярная биология
                  </p>
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Диплом программы «Технологии управления свойствами биологических объектов».
                  </p>
                </div>
              </div>

              <!-- Блок 3: Сириус и УрФУ -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-white mb-1">
                    ОЦ «Сириус» и УрФУ (2024)
                  </h4>
                  <p class="text-sm font-semibold text-emerald-400 mb-2">
                    Повышение квалификации
                  </p>
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Курс по основам наставнической деятельности для работы с одарёнными школьниками.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Колонка 2: Результаты учеников -->
        <div class="reveal-item delay-200">
          <div class="h-full bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            
            <!-- Заголовок колонки -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Trophy :size="20" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white">
                Результаты учеников и команд
              </h3>
            </div>

            <!-- Сетка ключевых показателей -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              
              <!-- Карточка A: РСОШ -->
              <div class="bg-slate-950/60 border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/40 transition-all duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <Award :size="16" class="text-emerald-400" />
                  <div class="text-2xl sm:text-3xl font-black text-white tracking-tight">8</div>
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-tight">
                  Победителей и призёров олимпиад из перечня РСОШ
                </p>
              </div>

              <!-- Карточка B: ВсОШ -->
              <div class="bg-slate-950/60 border border-slate-700/50 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <Trophy :size="16" class="text-blue-400" />
                  <div class="text-2xl sm:text-3xl font-black text-white tracking-tight">6 + 2</div>
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-tight">
                  Призёров региона и участников финала ВсОШ
                </p>
              </div>

              <!-- Карточка C: Большие вызовы -->
              <div class="bg-slate-950/60 border border-slate-700/50 rounded-xl p-4 hover:border-violet-500/40 transition-all duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <CheckCircle :size="16" class="text-violet-400" />
                  <div class="text-2xl sm:text-3xl font-black text-white tracking-tight">6</div>
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-tight">
                  Победителей конкурса «Большие вызовы»
                </p>
              </div>

              <!-- Карточка D: Старт в медицину -->
              <div class="bg-slate-950/60 border border-slate-700/50 rounded-xl p-4 hover:border-amber-500/40 transition-all duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <BookOpen :size="16" class="text-amber-400" />
                  <div class="text-2xl sm:text-3xl font-black text-white tracking-tight">3</div>
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-tight">
                  Победителя конференции «Старт в медицину»
                </p>
              </div>

            </div>

            <!-- Текстовый подвал с дополнительной информацией -->
            <div class="bg-slate-950/60 border border-slate-700/50 rounded-xl p-4">
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Куратор группы резерва сборной Москвы по биологии. Наставник-методист 7 проектных лагерей «Иннагрики». Составитель заданий НТО и Всесибирской олимпиады.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
