<template>
    <section class="partners-section">
        <div class="container">
            <h2 class="partners-title">PARTNERS</h2>
            <p class="partners-description">
                Dermatologist <strong>Dr. Len Nel</strong> and Pharmacist <strong>Tanya Maingard</strong> stay current
                with cutting-edge research and attend international conferences to bring the most advanced anti-aging
                treatments to their practice. Their expertise and commitment to excellence ensure that clients receive
                the safest, most effective treatments available.
            </p>

            <div class="partners-images">
                <PartnerCard v-for="partner in partners" :key="partner.name" :image-src="partner.imageSrc"
                    :alt-text="partner.altText" :name="partner.name" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import PartnerCard from '@/components/ui/PartnerCard.vue'
import drNelImage from '@/assets/dr-nel.png'
import wallpaperImage from '@/assets/wallpaper.jpg'

const partners = [
    {
        name: 'DR. LEN NEL',
        imageSrc: drNelImage,
        altText: 'Dr. Len Nel'
    },
    {
        name: 'TANYA MAINGARD',
        imageSrc: wallpaperImage,
        altText: 'Tanya Maingard'
    }
]
</script>

<style scoped>
.partners-section {
    padding: var(--space-12) 0 0 0;
}

.partners-title {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    text-align: center;
    margin-bottom: var(--space-8);
    color: var(--color-gray-900);
    letter-spacing: 0.05em;
}

.partners-description {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    text-align: center;
    max-width: 800px;
    margin: 0 auto var(--space-10) auto;
    color: var(--color-gray-700);
}

.partners-images {
    display: flex;
    gap: var(--space-8);
    justify-content: center;
    align-items: flex-start;
}

/* Responsive Design */
@media (max-width: 768px) {

    .partners-title {
        font-size: var(--text-2xl);
        margin-bottom: var(--space-6);
    }

    .partners-description {
        font-size: var(--text-base);
        margin-bottom: var(--space-8);
    }

    .partners-images {
        flex-direction: column;
        gap: var(--space-6);
        align-items: center;
    }
}
</style>