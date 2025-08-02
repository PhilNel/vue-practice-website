<template>
    <section class="pricing-section">
        <div class="container">
            <div class="pricing-content">
                <div v-if="isLoading" class="loading-state">
                    <LoadingSpinner />
                </div>
                <div v-else class="pricing-menu">
                    <div v-for="category in categories" :key="category.name" class="category-section">
                        <h2 class="category-title">{{ category.displayName }}</h2>
                        <div class="treatments-list">
                            <div v-for="treatment in category.treatments" :key="treatment.treatmentId"
                                class="treatment-group">
                                <h3 class="treatment-name">{{ treatment.name }}</h3>
                                <div class="services-list">
                                    <div v-for="service in treatment.services" :key="service.serviceId"
                                        class="service-item">
                                        <span class="service-name">{{ service.description }}</span>
                                        <span class="service-price">{{ formatServicePrice(service) }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="error" class="error-state">
                    <p class="error-message">{{ error }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTreatmentsStore } from '@/stores/treatments'
import type { Treatment, TreatmentService } from '@/types/treatment'
import { formatCurrency } from '@/utils/pricing'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

const treatmentsStore = useTreatmentsStore()

const isLoading = computed(() => treatmentsStore.loading)
const error = computed(() => treatmentsStore.error)
const treatments = computed(() => treatmentsStore.getAllTreatments)

const categoryMap: Record<string, string> = {
    'laser': 'Laser Treatments',
    'skin-resurfacing': 'Skin Resurfacing',
    'chemical-peels': 'Chemical Peels',
    'light-therapy': 'Light Therapy'
}

const categories = computed(() => {
    const grouped = new Map<string, Treatment[]>()

    treatments.value.forEach(treatment => {
        if (!grouped.has(treatment.category)) {
            grouped.set(treatment.category, [])
        }
        grouped.get(treatment.category)!.push(treatment)
    })

    const categoryOrder = ['laser', 'skin-resurfacing', 'chemical-peels', 'light-therapy']

    return categoryOrder
        .filter(category => grouped.has(category))
        .map(category => ({
            name: category,
            displayName: categoryMap[category] || category,
            treatments: grouped.get(category)!.sort((a, b) => a.name.localeCompare(b.name))
        }))
})

// Format service price based on type using existing utility
const formatServicePrice = (service: TreatmentService): string => {
    if (service.type === 'variable' && service.priceRangeMin && service.priceRangeMax) {
        return `${formatCurrency(service.priceRangeMin)} - ${formatCurrency(service.priceRangeMax)}`
    } else if (service.price) {
        return formatCurrency(service.price)
    }

    return 'Price on consultation'
}

onMounted(() => {
    treatmentsStore.fetchTreatments()
})
</script>

<style scoped>

h3 {
    margin-bottom: 0;
}

.pricing-section {
    padding: 0;
    background-color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    padding-top: 1rem;

    margin-bottom: 1rem;
}

.pricing-content {
    max-width: 800px;
    margin: 0 auto;
}

.pricing-menu {
    text-align: left;
}

.category-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--color-primary-light);
    padding: 1rem;
}

.treatments-list {
    margin-left: 0;
}

.treatment-name {
    font-weight: var(--font-weight-bold);
    margin-left: 1rem;
    padding-top: 1rem;
}

.treatment-group:last-child {
    margin-bottom: 1rem;
}

.services-list {
    margin-left: 2rem;
}

.service-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--color-primary);
}

.service-item:last-child {
    border-bottom: none;
}

.service-name {
    font-size: 0.95rem;
    color: #2c3e50;
    flex-grow: 1;
}

.service-price {
    font-size: 0.95rem;
    font-weight: 500;
    color: #2c3e50;
    margin-left: 1rem;
}

.loading-state,
.error-state {
    padding: 4rem 0;
    text-align: center;
}

.error-message {
    color: #e74c3c;
    font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .pricing-section {
        padding: 0;
    }

    .category-title {
        font-size: 1.5rem;
    }

    .services-list {
        margin-left: 1rem;
    }

    .service-price {
        margin-left: 0;
        font-weight: 600;
    }

    .treatment-group {
        padding: 0 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0;
    }

    .category-title {
        font-size: 1.3rem;
    }

    .treatment-name {
        margin-left: 0;
    }

    .services-list {
        margin-left: 0.5rem;
    }
}
</style>