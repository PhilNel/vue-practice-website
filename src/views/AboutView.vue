<template>
  <div class="about">
    <HeroSection :title="heroData.title" :background-image="heroData.backgroundImage" />
    <PartnersSection />
    <Therapists />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import Therapists from '@/components/sections/Therapists.vue'
import clinicImage from '@/assets/clinic.jpg'

const heroData = {
  title: 'THE CLINIC',
  backgroundImage: clinicImage
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
  }
}
</style>
