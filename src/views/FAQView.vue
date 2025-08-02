<template>
    <div class="faq">
        <HeroSection :title="heroData.title" :background-image="heroData.backgroundImage" object-position="top" />
        <FAQSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FAQSection from '@/components/sections/FAQSection.vue'
import bodyBgImage from '@/assets/body-bg.webp'

const heroData = {
    title: 'FAQs',
    backgroundImage: bodyBgImage
}
</script>

<style>
@media (min-width: 1024px) {
    .faq {
        display: flex;
        flex-direction: column;
    }
}
</style>