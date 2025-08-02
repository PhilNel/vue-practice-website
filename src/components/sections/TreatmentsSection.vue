<template>
    <section class="treatments-section">
        <div class="container">
            <LoadingSpinner v-if="loading" />
            <div v-else-if="error" class="error-state">
                <p>{{ error }}</p>
            </div>
            <div v-else class="treatments-grid">
                <div v-for="treatment in treatments" :key="treatment.treatmentId" class="treatment-card">
                    <BackgroundSection :background-image="`https://nelskincare.co.za/images/${treatment.treatmentId}/overview.webp`"
                        :image-alt="`${treatment.name} treatment overview`" height="200px"
                        section-class="treatment-image-section" :object-position="'bottom'">
                    </BackgroundSection>
                    <div class="treatment-content">
                        <h3 class="treatment-title">{{ treatment.name.toUpperCase() }}</h3>
                        <p class="treatment-description">{{ treatment.shortDescription }}</p>
                        <p class="treatment-price">{{ calculatePriceDisplay(treatment) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTreatments } from '@/composables/useTreatments'
import BackgroundSection from '@/components/ui/BackgroundSection.vue'
import { calculatePriceDisplay } from '@/utils/pricing'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

const { treatments, loading, error, fetchTreatments } = useTreatments()

onMounted(() => {
    fetchTreatments()
})
</script>

<style scoped>
.treatments-section {
    padding: var(--space-6) 0;
    background-color: var(--color-white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-6);
}

.error-state {
    text-align: center;
    padding: var(--space-12);
}

.error-state p {
    color: var(--color-red-600);
    font-size: var(--text-lg);
}

.treatments-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
}

.treatment-card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-gray-200);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    overflow: hidden;
}

.treatment-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.treatment-image-section {
    border-radius: 0;
}

.treatment-content {
    padding: var(--space-6);
}

.treatment-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-primary);
    margin: 0 0 var(--space-3) 0;
    line-height: var(--leading-tight);
}

.treatment-description {
    color: var(--color-gray-700);
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    margin: 0 0 var(--space-3) 0;
}

.treatment-price {
    color: var(--color-primary);
    font-size: var(--text-lg);
    font-family: var(--font-family-inter);
    margin: 0;
}

.treatment-areas {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
    align-items: center;
    margin-top: var(--space-2);
}

/* Responsive Design */
@media (max-width: 640px) {
    .treatment-image-section {
        height: 180px;
    }

    .treatment-content {
        padding: var(--space-4);
    }

    .treatment-title {
        font-size: var(--text-lg);
    }

    .treatment-description {
        font-size: var(--text-sm);
    }
}

@media (min-width: 768px) {
    .treatments-grid {
        gap: var(--space-6);
        grid-template-columns: repeat(2, 1fr);
    }

    .treatment-image-section {
        height: 220px;
    }

    .treatment-content {
        padding: var(--space-8);
    }
}
</style>