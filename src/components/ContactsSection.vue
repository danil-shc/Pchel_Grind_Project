<script setup>
import { Mail, Send, Globe, ExternalLink } from 'lucide-vue-next'

const yandexMapsUrl = 'https://yandex.ru/maps/-/CDuV5K9D'
const yandexMapWidgetUrl =
  'https://yandex.ru/map-widget/v1/?ll=37.573200%2C55.729700&z=15&pt=37.573200,55.729700,pm2gnm'
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

      <!-- Сетка: контакты + карта -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

        <!-- Левая колонка: карточки контактов -->
        <div class="space-y-4 flex flex-col">

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
                  Москва • Сеченовский Университет
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Правая колонка: интерактивная карта -->
        <div class="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B1120] h-full min-h-95 flex flex-col justify-between p-6 shadow-sm dark:shadow-none pointer-events-none">
          <!-- Светлая интерактивная карта (без инверсии) -->
          <iframe
            :src="yandexMapWidgetUrl"
            class="map-iframe absolute inset-0 w-full h-full border-0 rounded-3xl pointer-events-auto transition-all duration-300"
            allowfullscreen
            loading="lazy"
            title="Карта: Первый МГМУ им. И.М. Сеченова"
          />

          <!-- Градиентная виньетка по краям карты -->
          <div class="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/40 dark:from-[#0B1120] dark:via-transparent dark:to-[#0B1120]/60 pointer-events-none" />

          <!-- Верхняя плашка-статус -->
          <div class="relative z-10 flex items-center gap-2 self-start rounded-full bg-white/90 dark:bg-[#0B1120]/80 px-3.5 py-1.5 text-xs text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-white/15 backdrop-blur-md shadow-sm dark:shadow-none pointer-events-auto">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </span>
            <span class="font-medium">Основная локация</span>
          </div>

          <!-- Нижний информационный блок и ссылка -->
          <div class="relative z-10 space-y-3 mt-auto pointer-events-auto">
            <div class="flex items-center gap-3 rounded-2xl bg-white/95 dark:bg-[#0B1120]/90 p-4 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5 dark:shadow-2xl">
              <span class="relative flex h-3.5 w-3.5 shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <div>
                <p class="text-xs text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">Первый МГМУ им. И.М. Сеченова</p>
                <p class="text-sm font-semibold text-slate-800 dark:text-white">Москва, ул. Большая Пироговская</p>
              </div>
            </div>

            <a
              :href="yandexMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between w-full rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 dark:text-emerald-400 dark:border dark:border-emerald-500/40 dark:shadow-none px-4 py-3.5 text-sm font-medium backdrop-blur-md transition-all duration-300 group"
            >
              <span>Открыть в Яндекс.Картах</span>
              <ExternalLink
                :size="16"
                class="text-white/90 dark:text-emerald-400 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.map-iframe {
  filter: saturate(0.85) contrast(1.02);
  opacity: 0.95;
}

:global(.dark) .map-iframe {
  filter: saturate(0.75) contrast(1.05);
  opacity: 0.9;
}
</style>
