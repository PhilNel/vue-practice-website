<template>
  <div class="about">
    <HeroSection :title="heroData.title" :subtitle="heroData.subtitle" :description="heroData.description"
      :background-image="heroData.backgroundImage" />
    <PartnersSection />
    <TherapistsSection />
    <OurStorySection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import PartnersSection from '@/components/sections/PartnersSection.vue'
import TherapistsSection from '@/components/sections/TherapistsSection.vue'
import OurStorySection from '@/components/sections/OurStorySection.vue'
import clinicImage from '@/assets/clinic.webp'

const heroData = {
  title: "THE CLINIC",
  subtitle: "Founded on Trust / Driven by Professionalism",
  description: "Nel Skin Care Clinic has been Durban's trusted destination for advanced skincare treatments since 2006. Located in Umhlanga, our state-of-the-art laser clinic combines medical expertise with cutting-edge technology to deliver exceptional results for clients from South Africa and beyond.",
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
