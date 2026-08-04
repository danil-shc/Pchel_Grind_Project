<script setup>
import genetics from './assets/images/photo_20.webp'
import bioinformatics from './assets/images/photo_29.webp'
import agrogenetics from './assets/images/photo_5.webp'
import leader from './assets/images/photo_41.webp'
</script>

<template>
  <section id="directions" class="w-full py-6 sm:py-10 md:py-14 border-t border-slate-200/60 dark:border-slate-800/60">
    <div v-reveal class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 reveal-item">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Направления работы</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-2 text-slate-900 dark:text-white">Направления и экспертиза</h2>
        </div>
        <p class="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl opacity-90 mt-4 md:mt-0">
          Ключевые векторы академической и практической деятельности в действии.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        <div class="reveal-item delay-100 lg:col-span-2">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none min-h-[320px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
            <img 
              :src="genetics" 
              alt="Молекулярная генетика" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-slate-50/12 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Лаборатория
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                Молекулярная генетика
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal max-w-2xl [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] dark:[text-shadow:none]">
                Разработка ПЦР-тест-систем, поиск генетических маркеров, конструирование панелей и исследования урологических заболеваний в Сеченовском Университете.
              </p>
            </div>
          </div>
        </div>

        <div class="reveal-item delay-200 lg:col-span-1">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none min-h-[320px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
            <img 
              :src="bioinformatics" 
              alt="Биоинформатика" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-slate-50/12 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Биоинформатика
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                Биоинформатика & SNP-анализ
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] dark:[text-shadow:none]">
                Обработка данных NGS и GWAS, аннотация вариантов (NCBI, ClinVar, Ensembl), ведение протоколов и аналитическая биофизика (Genotek / ИБГ РАН).
              </p>
            </div>
          </div>
        </div>

        <div class="reveal-item delay-300 lg:col-span-1">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none min-h-[320px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
            <img 
              :src="agrogenetics" 
              alt="Агрогенетика и проекты" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-slate-50/12 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Агробиотех & Проекты
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                Агрогенетика & Менеджмент
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] dark:[text-shadow:none]">
                Молекулярно-генетическая оценка дигаплоидных линий рапса в ЦРО «Интеграция», разработка маркеров устойчивости и паспортизация культур.
              </p>
            </div>
          </div>
        </div>

        <div class="reveal-item delay-400 lg:col-span-2">
          <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none min-h-[320px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
            <img 
              :src="leader" 
              alt="Наука и спикерство" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-slate-50/12 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Наставничество & Спикерство
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight dark:drop-shadow-md">
                Наука & Олимпиадное движение
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal max-w-2xl [text-shadow:0_1px_10px_rgba(255,255,255,0.9)] dark:[text-shadow:none]">
                Доклады на конгрессах учёных, руководство проектными командами в ОЦ «Сириус», подготовка резерва сборной Москвы и победителей ВсОШ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>