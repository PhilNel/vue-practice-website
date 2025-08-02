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
import officeImage from '@/assets/office.webp'

const heroData = {
  title: 'SKIN THERAPY\nINSIDE AND OUT',
  subtitle: 'Perfection in practice / Excellence in therapy',
  description: 'With nearly two decades of laser therapy and skincare expertise, <strong>Dr. Len Nel (Dermatologist)</strong> and our team offer the complete spectrum of anti-aging treatments.',
  backgroundImage: officeImage
}
</script>
