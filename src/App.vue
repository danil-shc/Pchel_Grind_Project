<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import DirectionsSection from './components/DirectionsSection.vue'
import GallerySection from './components/GallerySection.vue'
import StudentsSection from './components/StudentsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import FooterSection from './components/FooterSection.vue'

const isDark = ref(true)
</script>

<template>
  <div :class="{ 'dark': isDark }" class="min-height-screen transition-colors duration-300 overflow-x-hidden">
    <div class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen font-sans antialiased overflow-x-hidden">

      <main class="w-full">
        <HeroSection v-model:isDark="isDark" />
        <StatsSection />
        <DirectionsSection />
        <GallerySection />
        <StudentsSection />
        <EducationSection />
        <ContactsSection />
      </main>

      <FooterSection />

    </div>
  </div>
</template>
