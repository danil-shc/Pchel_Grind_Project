<script setup>
import { Rocket, FileText, ExternalLink, ShieldCheck, Users, Trophy } from 'lucide-vue-next'

const managementItems = [
  'Планирование этапов и контрольных сроков',
  'Координация команд',
  'Академическое и научное письмо',
  'Подготовка грантовых и патентных заявок',
  'Презентации для научных жюри, инвесторов и партнеров',
]

const publicationTopics = [
  'Урология',
  'Иммуногенетика',
  'Вирусология (SARS-CoV-2, HIV-1)',
  'Агробиология',
]
</script>

<template>
  <section class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Научный менеджмент
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">
            Управление &amp; Проекты &amp; Наука
          </h2>
        </div>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl opacity-90 mt-4 md:mt-0">
          Полный цикл реализации: от руководства командами до стартапа и публикаций.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Карточка 1: Soft скиллы & Коммуникация -->
        <div class="reveal-item delay-100 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1120] p-6 sm:p-8 shadow-sm dark:shadow-none transition-all duration-500 hover:border-emerald-500/40 dark:hover:border-white/30">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:bg-white/10 dark:text-white dark:border-white/20">
            <Users :size="24" />
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
            SOFT Скиллы &amp; Коммуникация
          </h3>

          <div class="space-y-3 text-sm sm:text-base text-slate-600 dark:text-gray-300">
            <div
              v-for="item in managementItems"
              :key="item"
              class="flex items-start gap-3"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Карточка 2: Стартап RARE-ID -->
        <div class="reveal-item delay-200 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 shadow-sm dark:shadow-none transition-all duration-300 hover:border-cyan-500/40 flex flex-col">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
            <Rocket :size="24" class="text-emerald-600 dark:text-emerald-400" />
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            RARE-ID — Платформа диагностики орфанных заболеваний
          </h3>

          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4 flex-1">
            Разработка концепции и ML-алгоритмов для раннего выявления редких иммунопатологий.
          </p>

          <div class="mt-auto space-y-3">
            <div class="rounded-xl border border-amber-500/30 dark:border-amber-500/25 bg-slate-100 dark:bg-slate-800/80 px-4 py-3">
              <div class="flex items-start gap-3">
                <div class="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25">
                  <Trophy :size="18" class="text-amber-600 dark:text-amber-400" />
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-bold text-amber-700 dark:text-amber-400 tracking-tight">
                    ТОП-500 стартапов РФ
                  </p>
                  <p class="mt-0.5 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    По версии Всероссийского рейтинга ТОП-1000 университетских стартапов
                  </p>
                </div>
              </div>
            </div>

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

        <!-- Карточка 3: Научные публикации & ORCID -->
        <div class="reveal-item delay-300 group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 shadow-sm dark:shadow-none transition-all duration-300 hover:border-violet-500/40 flex flex-col">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30">
            <FileText :size="24" class="text-violet-600 dark:text-violet-400" />
          </div>

          <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Научные публикации &amp; ORCID
          </h3>

          <p class="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed font-normal mb-3">
            Работы в рецензируемых журналах по темам:
          </p>

          <div class="space-y-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-6 flex-1">
            <div
              v-for="topic in publicationTopics"
              :key="topic"
              class="flex items-start gap-3"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
              <span>{{ topic }}</span>
            </div>
          </div>

          <a
            href="https://orcid.org/0000-0002-3878-8265"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 hover:border-violet-400/60 hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 group/link mt-auto"
          >
            <span class="text-sm font-bold text-violet-600 dark:text-violet-400 group-hover/link:text-violet-700 dark:group-hover/link:text-violet-300">
              ORCID: 0000-0002-3878-8265
            </span>
            <ExternalLink :size="16" class="text-violet-600 dark:text-violet-400 group-hover/link:text-violet-700 dark:group-hover/link:text-violet-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
