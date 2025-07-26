<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import TreatmentsOverview from '@/components/sections/TreatmentsOverview.vue'
import Therapists from '@/components/sections/Therapists.vue'
import SpecialsOverview from '@/components/sections/SpecialsOverview.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <TreatmentsOverview />
    <Therapists />
    <SpecialsOverview />
    <AppFooter />
  </div>
</template>
