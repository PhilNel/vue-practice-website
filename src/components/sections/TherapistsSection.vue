<template>
    <section class="therapists-section">
        <div class="container">
            <div class="section-header">
                <h2>THERAPISTS</h2>
                <p>
                    Our experienced team of laser therapists, led by <strong>Tanya Gafney</strong>, provides professional care with the
                    confidence that comes from years of specialized training.
                </p>
                <p>
                    You're in expert hands with our dedicated therapists!
                </p>
            </div>

            <div class="therapists-images">
                <PartnerCard v-for="therapist in therapists" :key="therapist.name" :image-src="therapist.imageSrc"
                    :alt-text="therapist.altText" :name="therapist.name" />
            </div>
        </div>
    </section>
    <LineSeparator />
</template>

<script setup lang="ts">
import PartnerCard from '@/components/ui/PartnerCard.vue'
import LineSeparator from '@/components/ui/LineSeparator.vue'
import gafneyImage from '@/assets/gafney.webp'
import pretoriusImage from '@/assets/pretorius.webp'
import frostImage from '@/assets/frost.webp'
import shepardImage from '@/assets/shepard.webp'

const therapists = [
    {
        name: 'TANYA GAFNEY',
        imageSrc: gafneyImage,
        altText: 'Tanya Gafney'
    },
    {
        name: 'MANDY PRETORIUS',
        imageSrc: pretoriusImage,
        altText: 'Mandy Pretorius'
    },
    {
        name: 'DAWN FROST',
        imageSrc: frostImage,
        altText: 'Dawn Frost'
    },
    
    {
        name: 'KATE SHEPARD',
        imageSrc: shepardImage,
        altText: 'Kate Shepard'
    }
]
</script>

<style scoped>
.therapists-section {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
}

.therapists-images {
    display: flex;
    gap: var(--space-8);
    justify-content: center;
    align-items: flex-start;
}

/* Responsive Design */
@media (max-width: 1024px) {

    .therapists-images {
        flex-direction: column;
        gap: var(--space-6);
        align-items: center;
    }
}
</style>