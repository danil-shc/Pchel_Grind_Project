<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import DirectionsSection from './components/DirectionsSection.vue'
import GallerySection from './components/GallerySection.vue'
import StudentsSection from './components/StudentsSection.vue'
import ContactsSection from './components/ContactsSection.vue'

const isDark = ref(true)
</script>

<template>
  <div :class="{ 'dark': isDark }" class="min-height-screen transition-colors duration-300">
    <div class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen font-sans antialiased">
      
      <TheHeader v-model:isDark="isDark"/>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <DirectionsSection />
        <GallerySection />
        <StudentsSection />
        <ContactsSection />
      </main>

    </div>
  </div>
</template>