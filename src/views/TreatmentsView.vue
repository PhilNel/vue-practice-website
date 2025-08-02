<template>
    <div class="treatments">
        <HeroSection :title="heroData.title" :subtitle="heroData.subtitle"
            :background-image="heroData.backgroundImage" />
        <TreatmentsSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import TreatmentsSection from '@/components/sections/TreatmentsSection.vue'
import treatmentsImage from '@/assets/treatments.webp'

const heroData = {
    title: 'TREATMENTS',
    subtitle: 'We have everything your skin will need',
    backgroundImage: treatmentsImage
}
</script>

<style>
@media (min-width: 1024px) {
    .treatments {
        display: flex;
        flex-direction: column;
    }
}
</style>