<script setup>
import { Rocket, FileText, Award, ExternalLink, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Научный и инновационный вклад</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">Проекты, патенты & публикации</h2>
        </div>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl opacity-90 mt-4 md:mt-0">
          Практическая имплементация научных исследований в коммерческие и прикладные решения.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- Главная карточка: Стартап RARE-ID -->
        <div class="reveal-item delay-100 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-emerald-500/40 transition-all duration-300 group">
          <div class="flex flex-col sm:flex-row gap-6">
            <div class="shrink-0">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Rocket :size="28" class="text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div class="flex-1">
              <div class="mb-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                  Стартап & ML-моделирование (2024–2025)
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl lg:text-3xl font-black mb-3 text-slate-900 dark:text-white">
                RARE-ID — Платформа диагностики орфанных заболеваний
              </h3>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                Разработка концепции и ML-алгоритмов для раннего выявления редких иммунопатологий.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300">
                  <ShieldCheck :size="14" class="text-emerald-600 dark:text-emerald-400" />
                  Финалист Sechenov.Tech
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300">
                  <ShieldCheck :size="14" class="text-emerald-600 dark:text-emerald-400" />
                  Финалист «Новаторы Москвы»
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300">
                  <ShieldCheck :size="14" class="text-emerald-600 dark:text-emerald-400" />
                  Финалист акселератора УрФУ
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Нижние две карточки: Патенты + Публикации -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Карточка 2: Патенты -->
          <div class="reveal-item delay-200 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none p-6 rounded-2xl sm:rounded-3xl hover:border-amber-500/40 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-5">
              <Award :size="24" class="text-amber-600 dark:text-amber-400" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-4 text-slate-900 dark:text-white">Патенты и интеллектуальная собственность</h3>
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <div class="flex items-start gap-3">
                  <FileText :size="18" class="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p class="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">Патент № 243759</p>
                    <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Полезная модель «Кавернотом Меньщикова» (урология, хирургический инструмент)
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <div class="flex items-start gap-3">
                  <FileText :size="18" class="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p class="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">Заявка № 2025137491</p>
                    <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      Набор олигонуклеотидных праймеров для генетической диагностики аквакультуры (радужная форель)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Карточка 3: Публикации & ORCID -->
          <div class="reveal-item delay-300 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none p-6 rounded-2xl sm:rounded-3xl hover:border-violet-500/40 transition-all duration-300 flex flex-col">
            <div class="w-12 h-12 rounded-xl bg-linear-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center mb-5">
              <FileText :size="24" class="text-violet-600 dark:text-violet-400" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">Научные публикации</h3>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 flex-1">
              Работы в рецензируемых журналах по урологии, иммуногенетике, вирусологии (SARS-CoV-2, HIV-1) и агробиологии.
            </p>
            <a 
              href="https://orcid.org/0000-0002-3878-8265" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 hover:border-violet-400/60 hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 group/link"
            >
              <span class="text-sm font-bold text-violet-600 dark:text-violet-400 group-hover/link:text-violet-700 dark:group-hover/link:text-violet-300">
                ORCID: 0000-0002-3878-8265
              </span>
              <ExternalLink :size="16" class="text-violet-600 dark:text-violet-400 group-hover/link:text-violet-700 dark:group-hover/link:text-violet-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>