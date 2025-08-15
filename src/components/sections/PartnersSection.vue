<template>
    <section class="partners-section">
        <div class="container">
            <div class="section-header">
                <h2>PARTNERS</h2>
                <p>
                    Dermatologist <strong>Dr. Len Nel</strong> and Pharmacist <strong>Tanya Maingard</strong> bring
                    decades of combined expertise to every treatment. They stay current with the latest research and
                    international developments, ensuring clients receive the safest and most effective anti-aging
                    treatments available.
                </p>
            </div>

            <div class="partners-images">
                <PartnerCard v-for="partner in partners" :key="partner.name" :image-src="partner.imageSrc"
                    :alt-text="partner.altText" :name="partner.name" />
            </div>
        </div>
    </section>
    <LineSeparator />
</template>

<script setup lang="ts">
import PartnerCard from '@/components/ui/PartnerCard.vue'
import LineSeparator from '@/components/ui/LineSeparator.vue'
import drNelImage from '@/assets/dr-nel.webp'
import maingardImage from '@/assets/maingard.webp'

const partners = [
    {
        name: 'DR. LEN NEL',
        imageSrc: drNelImage,
        altText: 'Dr. Len Nel'
    },
    {
        name: 'TANYA MAINGARD',
        imageSrc: maingardImage,
        altText: 'Tanya Maingard'
    }
]
</script>

<style scoped>
.partners-section {
    padding-top: var(--space-0);
    padding-bottom: var(--space-12);
}

.partners-images {
    display: flex;
    gap: var(--space-8);
    justify-content: center;
    align-items: flex-start;
}

/* Responsive Design */
@media (max-width: 768px) {

    .partners-images {
        flex-direction: column;
        gap: var(--space-6);
        align-items: center;
    }
}
</style>