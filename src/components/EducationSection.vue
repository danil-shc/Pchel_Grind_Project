<script setup>
import { GraduationCap, Trophy, Award, BookOpen, CheckCircle, Check } from 'lucide-vue-next'

// Фоновые изображения для баннера наставничества и карточек результатов
import imgMentorship from './assets/images/photo_3.webp'
import imgRsosh from './assets/images/photo_25.webp'
import imgVsosh from './assets/images/photo_46.webp'
import imgChallenges from './assets/images/photo_45.webp'
import imgMedicine from './assets/images/photo_22.webp'
import logoSechenov from '@/components/assets/logos/sechenov.png'
import logoSirius from '@/components/assets/logos/sirius.png'

const PARTNER_LINKS = {
  sechenov: 'https://www.sechenov.ru/',
  sirius: 'https://sochisirius.ru/'
}
</script>

<template>
  <section class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Заголовок секции -->
      <div class="mb-8 sm:mb-12 reveal-item">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Бэкграунд и Наставничество
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 mb-4 text-slate-900 dark:text-white">
          Академическая база & Результаты
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Фундаментальное медицинское образование и успехи воспитанников на всероссийском уровне.
        </p>
      </div>

      <!-- Две колонки: Образование и Результаты -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        <!-- Колонка 1: Образование & Квалификация -->
        <div class="reveal-item delay-100">
          <div class="h-full flex flex-col bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none rounded-2xl p-6 sm:p-8">
            
            <!-- Заголовок колонки -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 flex items-center justify-center">
                <GraduationCap :size="20" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Образование & Квалификация
              </h3>
            </div>

            <!-- Блоки образования -->
            <div class="space-y-6">
              
              <!-- Блок 1: Сеченовский -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    <a
                      :href="PARTNER_LINKS.sechenov"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      Сеченовский Университет
                    </a>
                    (6 курс)
                  </h4>
                  <p class="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base mb-2">
                    Лечебное дело, специализация «Врач-исследователь»
                  </p>
                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-1">
                    Институт клинической медицины. Профильные области: генетика, молекулярная биология, урология.
                  </p>
                </div>
              </div>

              <!-- Блок 2: НГУ -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    НГУ, Цифровая кафедра (2024)
                  </h4>
                  <p class="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base mb-2">
                    Практическая биоинформатика и молекулярная биология
                  </p>
                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-1">
                    Диплом программы «Технологии управления свойствами биологических объектов».
                  </p>
                </div>
              </div>

              <!-- Блок 3: Сириус и УрФУ -->
              <div class="relative pl-5 border-l-2 border-emerald-500/40">
                <div class="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <div>
                  <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    <a
                      :href="PARTNER_LINKS.sirius"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      ОЦ «Сириус»
                    </a>
                    и УрФУ (2024)
                  </h4>
                  <p class="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base mb-2">
                    Повышение квалификации
                  </p>
                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-1">
                    Курс по основам наставнической деятельности для работы с одарёнными школьниками.
                  </p>
                </div>
              </div>

            </div>

            <!-- Логотипы внизу карточки -->
            <div class="mt-auto pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-around gap-6">
              <a
                :href="PARTNER_LINKS.sechenov"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer">
                <img 
                  :src="logoSechenov" 
                  class="theme-logo theme-logo--contrast h-14 sm:h-16 w-auto object-contain opacity-90 transition-opacity hover:opacity-100" 
                  alt="Сеченовский Университет" 
                />
              </a>
              <a
                :href="PARTNER_LINKS.sirius"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer">
                <img 
                  :src="logoSirius" 
                  class="h-7 sm:h-8 w-auto object-contain theme-logo opacity-85 transition-opacity hover:opacity-100" 
                  alt="ОЦ Сириус" 
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Колонка 2: Результаты учеников -->
        <div class="reveal-item delay-200">
          <div class="h-full bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none rounded-2xl p-6 sm:p-8">
            
            <!-- Заголовок колонки -->
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                <Trophy :size="20" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Результаты учеников и команд
              </h3>
            </div>

            <!-- Баннер: роли и наставничество -->
            <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900 p-5 sm:p-6 mb-6 group">
              <img
                :src="imgMentorship"
                alt="Наставничество"
                class="absolute inset-0 h-full w-full object-cover object-[center_70%] md:object-[center_62%] lg:object-[center_70%] dark:opacity-70 dark:brightness-105 transition-transform duration-700 ease-out group-hover:scale-105" />
              <div class="absolute inset-0 bg-linear-to-r from-slate-50/75 via-slate-50/35 to-transparent dark:from-slate-950/75 dark:via-slate-950/50 dark:to-slate-950/30 z-10 pointer-events-none"></div>

              <ul class="relative z-20 space-y-3">
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/90 dark:bg-emerald-500/15 border border-emerald-600/60 dark:border-emerald-500/40 shadow-sm flex items-center justify-center">
                    <Check :size="12" class="text-emerald-700 dark:text-emerald-400" />
                  </span>
                  <span class="text-sm sm:text-base text-slate-900 dark:text-slate-200 font-medium leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                    Куратор группы резерва сборной Москвы по биологии
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/90 dark:bg-emerald-500/15 border border-emerald-600/60 dark:border-emerald-500/40 shadow-sm flex items-center justify-center">
                    <Check :size="12" class="text-emerald-700 dark:text-emerald-400" />
                  </span>
                  <span class="text-sm sm:text-base text-slate-900 dark:text-slate-200 font-medium leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                    Наставник-методист 7 проектных лагерей «Иннагрики»
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/90 dark:bg-emerald-500/15 border border-emerald-600/60 dark:border-emerald-500/40 shadow-sm flex items-center justify-center">
                    <Check :size="12" class="text-emerald-700 dark:text-emerald-400" />
                  </span>
                  <span class="text-sm sm:text-base text-slate-900 dark:text-slate-200 font-medium leading-relaxed [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                    Составитель заданий НТО и Всесибирской олимпиады
                  </span>
                </li>
              </ul>
            </div>

            <!-- Сетка ключевых показателей -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <!-- Карточка A: РСОШ -->
              <div class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900 p-5 min-h-40 flex flex-col justify-between group">
                <img
                  :src="imgRsosh"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover dark:opacity-50 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/55 dark:to-slate-950/15 z-10 pointer-events-none"></div>

                <div class="relative z-20 mb-2 flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                    <Award :size="20" class="text-emerald-600 dark:text-emerald-400 sm:w-6 sm:h-6" />
                  </div>
                  <span class="text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">8</span>
                </div>
                <p class="relative text-sm text-slate-900 dark:text-slate-200 font-medium leading-snug z-20 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                  Победителей и призёров олимпиад из перечня <span class="text-emerald-700 dark:text-emerald-400 font-semibold">РСОШ</span>
                </p>
              </div>

              <!-- Карточка B: ВсОШ -->
              <div class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900 p-5 min-h-40 flex flex-col justify-between group">
                <img
                  :src="imgVsosh"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover dark:opacity-50 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/55 dark:to-slate-950/15 z-10 pointer-events-none"></div>

                <div class="relative z-20 mb-2 flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                    <Trophy :size="20" class="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
                  </div>
                  <span class="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">6 + 2</span>
                </div>
                <p class="relative text-sm text-slate-900 dark:text-slate-200 font-medium leading-snug z-20 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                  Призёров региона и участников финала <span class="text-blue-700 dark:text-blue-400 font-semibold">ВсОШ</span>
                </p>
              </div>

              <!-- Карточка C: Большие вызовы -->
              <div class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900 p-5 min-h-40 flex flex-col justify-between group">
                <img
                  :src="imgChallenges"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover dark:opacity-50 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/55 dark:to-slate-950/15 z-10 pointer-events-none"></div>

                <div class="relative z-20 mb-2 flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                    <CheckCircle :size="20" class="text-purple-600 dark:text-purple-400 sm:w-6 sm:h-6" />
                  </div>
                  <span class="text-3xl sm:text-4xl font-extrabold text-purple-700 dark:text-purple-400 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">6</span>
                </div>
                <p class="relative text-sm text-slate-900 dark:text-slate-200 font-medium leading-snug z-20 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                  Победителей конкурса <span class="text-purple-700 dark:text-purple-400 font-semibold">«Большие вызовы»</span>
                </p>
              </div>

              <!-- Карточка D: Старт в медицину -->
              <div class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900 p-5 min-h-40 flex flex-col justify-between group">
                <img
                  :src="imgMedicine"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover dark:opacity-50 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/55 dark:to-slate-950/15 z-10 pointer-events-none"></div>

                <div class="relative z-20 mb-2 flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 inline-flex items-center justify-center shrink-0">
                    <BookOpen :size="20" class="text-amber-600 dark:text-amber-400 sm:w-6 sm:h-6" />
                  </div>
                  <span class="text-3xl sm:text-4xl font-extrabold text-amber-700 dark:text-amber-400 tracking-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">3</span>
                </div>
                <p class="relative text-sm text-slate-900 dark:text-slate-200 font-medium leading-snug z-20 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                  Победителя конференции <span class="text-amber-700 dark:text-amber-400 font-semibold">«Старт в медицину»</span>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
