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
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Лаборатория
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none] dark:drop-shadow-md">
                Молекулярная генетика
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal max-w-2xl [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Разработка <span class="text-emerald-700 dark:text-emerald-400 font-semibold">ПЦР-тест-систем</span>, поиск <span class="text-emerald-700 dark:text-emerald-400 font-semibold">генетических маркеров</span>, конструирование панелей и исследования урологических заболеваний в <span class="text-emerald-700 dark:text-emerald-400 font-semibold">Сеченовском Университете</span>.
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
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Биоинформатика
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none] dark:drop-shadow-md">
                Биоинформатика & SNP-анализ
              </h3>
              <div class="space-y-2.5 text-sm sm:text-base text-slate-900 dark:text-slate-300 [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Обработка данных <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">NGS</strong> и <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">GWAS</strong></span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Аннотация вариантов (<span class="text-emerald-700 dark:text-emerald-400">NCBI</span>, <span class="text-emerald-700 dark:text-emerald-400">ClinVar</span>, <span class="text-emerald-700 dark:text-emerald-400">Ensembl</span>)</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Аналитическая биофизика и протоколы (<strong class="text-emerald-700 dark:text-emerald-400 font-semibold">Genotek</strong> / <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">ИБГ РАН</strong>)</span>
                </div>
              </div>
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
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Агробиотех & Проекты
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none] dark:drop-shadow-md">
                Агрогенетика & Менеджмент
              </h3>
              <p class="text-sm sm:text-base text-slate-900 dark:text-slate-300 leading-relaxed font-normal [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                Молекулярно-генетическая оценка дигаплоидных линий рапса в <span class="text-emerald-700 dark:text-emerald-400 font-semibold">ЦРО «Интеграция»</span>, разработка <span class="text-emerald-700 dark:text-emerald-400 font-semibold">маркеров устойчивости</span> и паспортизация культур.
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
            <div class="absolute inset-0 bg-linear-to-t from-slate-50/82 via-slate-50/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div class="relative z-20 self-start inline-block bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-lg">
              Наставничество & Спикерство
            </div>

            <div class="relative z-20 mt-auto flex flex-col justify-end">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none] dark:drop-shadow-md">
                Наука & Олимпиадное движение
              </h3>
              <div class="space-y-2.5 text-sm sm:text-base text-slate-900 dark:text-slate-300 max-w-2xl [text-shadow:0_1px_3px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.75)] dark:[text-shadow:none]">
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Доклады на конгрессах учёных</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Руководство проектными командами в <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">ОЦ «Сириус»</strong></span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)] mt-2"></span>
                  <span>Подготовка резерва <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">сборной Москвы</strong> и победителей <strong class="text-emerald-700 dark:text-emerald-400 font-semibold">ВсОШ</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>