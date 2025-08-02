<template>
    <HeroSection :title="heroData.title" :background-image="heroData.backgroundImage" object-position="top"
        :description="heroData.description" />
    <SpecialsList />
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import clinicImage from '@/assets/skin-care-model.webp'
import SpecialsList from '@/components/sections/SpecialsList.vue'

const heroData = {
    title: 'SPECIALS',
    backgroundImage: clinicImage,
    description: "Take advantage of our limited-time offers and save on premium treatments."
}
</script>