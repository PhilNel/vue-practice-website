<template>
  <div class="home">
    <HeroSection :title="heroData.title" :subtitle="heroData.subtitle" :description="heroData.description"
      :background-image="heroData.backgroundImage" />
    <TreatmentsOverview />
    <Therapists />
    <SpecialsOverview />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import TreatmentsOverview from '@/components/sections/TreatmentsOverview.vue'
import Therapists from '@/components/sections/Therapists.vue'
import SpecialsOverview from '@/components/sections/SpecialsOverview.vue'
import officeImage from '@/assets/office.jpg'

const heroData = {
  title: 'SKIN THERAPY\nINSIDE AND OUT',
  subtitle: 'Perfection in practice / Excellence in therapy',
  description: 'With almost two decades laser therapy and skin care experience, with <strong>Dr. Len Nel</strong> (Dermatologist) on hand, we offer the full spectrum of anti-ageing treatments.',
  backgroundImage: officeImage
}
</script>
