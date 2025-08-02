<template>
    <div class="pricing">
        <HeroSection :title="heroData.title" :background-image="heroData.backgroundImage" />
        <PricingSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import creamImage from '@/assets/cream.webp'

const heroData = {
    title: 'PRICING',
    backgroundImage: creamImage
}
</script>

<style>
@media (min-width: 1024px) {
    .pricing {
        display: flex;
        flex-direction: column;
    }
}
</style>