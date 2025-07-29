<template>
    <BackgroundSection :background-image="greeneryImage" image-alt="Greenery background" height="50vh" min-height="50vh"
        section-class="treatments-overview" object-position="top">
        <div class="section-header white-text">
            <h2>TREATMENTS</h2>
            <p>We only use therapies we believe in, signature therapies, that are cutting-edge
                technology, in the
                search for your skin's natural balance and anti ageing rejuvenation.</p>
        </div>
        <div class="treatments-grid">
            <div v-for="treatment in treatments" :key="treatment.id" class="treatment-card">
                <h3>{{ treatment.title }}</h3>
                <p>{{ treatment.description }}</p>
            </div>
        </div>
        <div class="treatments-button">
            <Button label="OUR TREATMENTS" variant="primary" @click="navToTreatments" />
        </div>
    </BackgroundSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import BackgroundSection from '@/components/ui/BackgroundSection.vue'
import { useNavigation } from '@/composables/useNavigation'
import greeneryImage from '@/assets/greenery.jpg'

const { navToTreatments } = useNavigation()

interface Treatment {
    id: number
    title: string
    description: string
}

const treatments = ref<Treatment[]>([
    {
        id: 1,
        title: 'FACIAL COSMETICS',
        description: 'Professional facial treatments for skin rejuvenation'
    },
    {
        id: 2,
        title: 'BOTOX AND FILLERS',
        description: 'Expert anti-aging injectable treatments'
    },
    {
        id: 3,
        title: 'CHEMICAL PEELS',
        description: 'Advanced skin resurfacing treatments'
    },
    {
        id: 4,
        title: 'STATE OF THE ART LASERS',
        description: 'Cutting-edge laser therapy solutions'
    },
    {
        id: 5,
        title: 'PEARL FRACTIONAL',
        description: 'Advanced fractional laser treatments'
    },
    {
        id: 6,
        title: 'HAIR REMOVAL',
        description: 'Professional laser hair removal services'
    }
])
</script>

<style scoped>

.treatments-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    max-width: 800px;
    margin: 0 auto;
}

.treatment-card {
    text-align: center;
    padding: var(--space-6);
    background-color: var(--color-gray-50);
    border-radius: var(--radius-xl);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.treatment-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.treatment-card h3 {
    font-size: var(--text-lg);
    color: var(--color-primary);
    margin-bottom: var(--space-3);
}

.treatment-card p {
    color: var(--color-gray-600);
    font-size: var(--text-sm);
    margin: 0;
}

.treatments-overview {
    text-align: center;
    padding: 0 var(--space-8);
}

.treatments-button {
    margin-top: var(--space-8);
}

/* Responsive Design */
@media (min-width: 640px) {
    .treatments-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
    .treatments-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>