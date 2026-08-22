<script setup>
import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue'
import { Mail, Send, Globe, ExternalLink, ChevronDown, Check } from 'lucide-vue-next'

const locations = [
  {
    id: 'sechenov',
    label: 'Москва • Сеченовский Университет',
    name: 'Первый МГМУ им. И.М. Сеченова',
    address: 'Москва, ул. Большая Пироговская',
    lng: 37.574665,
    lat: 55.727749,
    zoom: 19,
    mapsUrl: 'https://yandex.ru/maps/org/pervy_mgmu_im_i_m_sechenova_institut_klinicheskoy_meditsiny/122738322701/?ll=37.574665%2C55.727749&z=18.74',
  },
  {
    id: 'l-clinic',
    label: 'Москва • Эль-клиник',
    name: 'Эль-клиник',
    address: 'Москва, Пятницкое ш., 89, д. Юрлово',
    lng: 37.270364,
    lat: 55.899967,
    zoom: 16,
    mapsUrl: 'https://yandex.ru/maps/org/el_klinik/28068506236/?ll=37.270364%2C55.899967&z=16',
  },
]

const selectedLocationId = ref('sechenov')

const selectedLocation = computed(
  () => locations.find((loc) => loc.id === selectedLocationId.value) ?? locations[0],
)

const yandexMapWidgetUrl = computed(() => {
  const { lng, lat, zoom } = selectedLocation.value
  return `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=${zoom}&pt=${lng},${lat},pm2gnm`
})

const isLocationMenuOpen = ref(false)
const locationSelectRef = ref(null)
const isMobileLocationPicker = ref(false)
const isDark = inject('isDark', ref(true))

function updateLocationPickerMode() {
  isMobileLocationPicker.value = window.matchMedia('(max-width: 1023px)').matches

  if (!isMobileLocationPicker.value || !isLocationMenuOpen.value) {
    document.body.style.overflow = ''
  } else if (isLocationMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  }
}

function toggleLocationMenu() {
  isLocationMenuOpen.value = !isLocationMenuOpen.value
}

function closeLocationMenu() {
  isLocationMenuOpen.value = false
}

function selectLocation(id) {
  selectedLocationId.value = id
  isLocationMenuOpen.value = false
}

function handleLocationMenuOutside(event) {
  if (!isLocationMenuOpen.value || isMobileLocationPicker.value) return
  if (locationSelectRef.value && !locationSelectRef.value.contains(event.target)) {
    isLocationMenuOpen.value = false
  }
}

function handleLocationMenuKeydown(event) {
  if (event.key === 'Escape') {
    isLocationMenuOpen.value = false
  }
}

watch(isLocationMenuOpen, (open) => {
  if (!isMobileLocationPicker.value) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  updateLocationPickerMode()
  window.addEventListener('resize', updateLocationPickerMode)
  document.addEventListener('click', handleLocationMenuOutside)
  document.addEventListener('keydown', handleLocationMenuKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLocationPickerMode)
  document.removeEventListener('click', handleLocationMenuOutside)
  document.removeEventListener('keydown', handleLocationMenuKeydown)
  document.body.style.overflow = ''
})
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
          <div class="group bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
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
          <div class="group bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <Globe :size="20" />
              </div>
              <div ref="locationSelectRef" class="flex-1 min-w-0 relative">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Локация</p>

                <button
                  type="button"
                  class="location-select-trigger w-full flex items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm sm:text-base font-medium transition-all duration-300 ease-out cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50"
                  :class="isLocationMenuOpen
                    ? 'border-emerald-500/40 bg-emerald-500/5 text-slate-800 dark:text-white shadow-[0_0_0_1px_rgba(16,185,129,0.15)]'
                    : 'border-slate-200/80 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-800/40 text-slate-700 dark:text-slate-200 hover:border-emerald-500/30 hover:bg-emerald-500/5 dark:hover:border-emerald-500/25 dark:hover:bg-emerald-500/10'"
                  :aria-expanded="isLocationMenuOpen"
                  aria-haspopup="listbox"
                  @click.stop="toggleLocationMenu"
                >
                  <span class="leading-snug lg:truncate">{{ selectedLocation.label }}</span>
                  <ChevronDown
                    :size="16"
                    class="shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-300 ease-out"
                    :class="{ 'rotate-180 text-emerald-500 dark:text-emerald-400': isLocationMenuOpen }"
                  />
                </button>

                <!-- Desktop dropdown -->
                <Transition name="location-menu">
                  <ul
                    v-if="isLocationMenuOpen && !isMobileLocationPicker"
                    role="listbox"
                    class="location-select-menu absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-700/90 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/10 dark:shadow-black/40 p-1.5"
                  >
                    <li
                      v-for="location in locations"
                      :key="location.id"
                      role="option"
                      :aria-selected="selectedLocationId === location.id"
                    >
                      <button
                        type="button"
                        class="location-select-option w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm sm:text-base font-medium transition-all duration-200 ease-out cursor-pointer outline-none"
                        :class="selectedLocationId === location.id
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'"
                        @click.stop="selectLocation(location.id)"
                      >
                        <span class="truncate">{{ location.label }}</span>
                        <Check
                          v-if="selectedLocationId === location.id"
                          :size="16"
                          class="shrink-0 text-emerald-500 dark:text-emerald-400 transition-transform duration-200 scale-100"
                        />
                      </button>
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>
          </div>

        </div>

        <!-- Mobile / tablet bottom sheet -->
        <Teleport to="body">
          <Transition name="location-sheet">
            <div
              v-if="isLocationMenuOpen && isMobileLocationPicker"
              :class="{ dark: isDark }"
              class="fixed inset-0 z-50 flex items-end justify-center"
              role="dialog"
              aria-modal="true"
              aria-label="Выбор локации"
            >
              <button
                type="button"
                class="absolute inset-0 bg-slate-900/55 backdrop-blur-[2px] dark:bg-black/70"
                aria-label="Закрыть выбор локации"
                @click="closeLocationMenu"
              />

              <div
                class="location-sheet-panel relative z-10 w-full max-w-lg rounded-t-3xl border border-slate-200/80 shadow-2xl shadow-black/30 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] dark:border-white/10 dark:shadow-black/50"
                :style="{ backgroundColor: isDark ? '#0B1120' : '#ffffff' }"
              >
                <div class="mx-auto mb-4 h-1 w-10 rounded-full bg-slate-300/80 dark:bg-white/20" />

                <div class="mb-4 px-1">
                  <p class="text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400">Локация</p>
                  <p class="mt-1 text-sm text-slate-600 dark:text-slate-500">Выберите место на карте</p>
                </div>

                <ul role="listbox" class="space-y-2">
                  <li
                    v-for="location in locations"
                    :key="location.id"
                    role="option"
                    :aria-selected="selectedLocationId === location.id"
                  >
                    <button
                      type="button"
                      class="location-select-option w-full flex items-start justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 ease-out cursor-pointer outline-none"
                      :class="selectedLocationId === location.id
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 shadow-[0_0_0_1px_rgba(16,185,129,0.12)] dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-400 dark:shadow-[0_0_0_1px_rgba(16,185,129,0.2)]'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500/25 hover:bg-emerald-500/5 dark:border-slate-800 dark:bg-[#0d131f] dark:text-slate-200 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10'"
                      @click="selectLocation(location.id)"
                    >
                      <span class="text-sm sm:text-base font-medium leading-snug">{{ location.label }}</span>
                      <Check
                        v-if="selectedLocationId === location.id"
                        :size="18"
                        class="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        </Teleport>

        <!-- Правая колонка: интерактивная карта -->
        <div class="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#0B1120] h-full min-h-95 flex flex-col justify-between p-6 shadow-sm dark:shadow-none pointer-events-none">
          <!-- Светлая интерактивная карта (без инверсии) -->
          <iframe
            :key="selectedLocationId"
            :src="yandexMapWidgetUrl"
            class="map-iframe absolute inset-0 w-full h-full border-0 rounded-3xl pointer-events-auto transition-all duration-300"
            allowfullscreen
            loading="lazy"
            :title="`Карта: ${selectedLocation.name}`"
          />

          <!-- Градиентная виньетка по краям карты -->
          <div class="absolute inset-0 bg-linear-to-t from-white via-transparent to-white/40 dark:from-[#0B1120] dark:via-transparent dark:to-[#0B1120]/60 pointer-events-none" />

          <!-- Нижний информационный блок и ссылка -->
          <div class="relative z-10 space-y-3 mt-auto pointer-events-auto">
            <div class="flex items-center gap-3 rounded-2xl bg-white/95 dark:bg-[#0B1120]/90 p-4 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5 dark:shadow-2xl">
              <span class="relative flex h-3.5 w-3.5 shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <div>
                <p class="text-xs text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">{{ selectedLocation.name }}</p>
                <p class="text-sm font-semibold text-slate-800 dark:text-white">{{ selectedLocation.address }}</p>
              </div>
            </div>

            <a
              :href="selectedLocation.mapsUrl"
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

.location-select-trigger:active {
  transform: scale(0.985);
}

.location-select-option:active {
  transform: scale(0.98);
}

.location-menu-enter-active,
.location-menu-leave-active {
  transition:
    opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.location-menu-enter-from,
.location-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.97);
}

.location-menu-enter-to,
.location-menu-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.location-sheet-enter-active,
.location-sheet-leave-active {
  transition: opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.location-sheet-enter-active .location-sheet-panel,
.location-sheet-leave-active .location-sheet-panel {
  transition: transform 0.32s cubic-bezier(0.32, 0.72, 0, 1);
}

.location-sheet-enter-from,
.location-sheet-leave-to {
  opacity: 0;
}

.location-sheet-enter-from .location-sheet-panel,
.location-sheet-leave-to .location-sheet-panel {
  transform: translateY(100%);
}

.location-sheet-enter-to .location-sheet-panel,
.location-sheet-leave-from .location-sheet-panel {
  transform: translateY(0);
}
</style>
