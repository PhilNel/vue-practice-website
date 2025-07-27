<template>
    <BackgroundSection :background-image="creamImage" image-alt="Cream background" height="50vh" min-height="50vh"
        section-class="recommendations-overview">
        <div class="section-header white-text">
            <h2>RECOMMENDATIONS</h2>
            <p>We recommend the following <strong>aesthetic clinics</strong> and <strong>therapists</strong>:</p>
        </div>
        <div class="partners-grid">
            <div v-for="partner in partners" :key="partner.name" class="partner-card">
                <h3>{{ partner.name }}</h3>
                <div class="partner-locations">
                    <div v-for="location in partner.locations" :key="location.area" class="location-item">
                        <span class="location-area">{{ location.area }}</span>
                        <div class="phone-container">
                            <PhoneIcon size="16" color="var(--color-primary)" class="phone-icon" />
                            <a :href="`tel:${location.phone.replace(/\s/g, '')}`" class="location-phone">
                                {{ location.phone }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BackgroundSection>
</template>

<script setup lang="ts">
import BackgroundSection from '@/components/ui/BackgroundSection.vue'
import PhoneIcon from '@/components/ui/icons/PhoneIcon.vue'
import creamImage from '@/assets/cream.jpg'

interface Location {
    area: string
    phone: string
}

interface Partner {
    name: string
    locations: Location[]
}

const partners: Partner[] = [
    {
        name: 'ABSOLUTE HEAVEN',
        locations: [
            { area: 'Umhlanga Rocks', phone: '+27 31 561 2182' },
            { area: 'Berea', phone: '+27 31 312 6156' }
        ]
    },
    {
        name: 'BEAUTY AND BEYOND',
        locations: [
            { area: 'Glenashley', phone: '+27 31 562 0010' }
        ]
    },
    {
        name: "LOUANNA'S HEALTH AND SKINCARE",
        locations: [
            { area: 'Durban North', phone: '+27 31 564 0039' }
        ]
    }
]
</script>

<style scoped>
.recommendations-overview {
    text-align: center;
    padding: 0 var(--space-8);
}

.partners-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    max-width: 800px;
    margin: 0 auto;
}

.partner-card {
    text-align: center;
    padding: var(--space-6);
    background-color: var(--color-gray-50);
    border-radius: var(--radius-xl);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.partner-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.partner-card h3 {
    font-size: var(--text-lg);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    font-weight: var(--font-semibold);
}

.partner-locations {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
}

.location-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--text-sm);
}

.location-area {
    color: var(--color-gray-600);
    font-weight: var(--font-medium);
}

.phone-container {
    display: flex;
    align-items: center;
    gap: var(--space-2);
}

.phone-icon {
    margin-top: var(--space-1);
    flex-shrink: 0;
}

.location-phone {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: var(--font-medium);
    transition: color 0.2s ease;
}

.location-phone:hover {
    color: var(--color-primary-dark, var(--color-primary));
    text-decoration: underline;
}

/* Responsive Design */
@media (min-width: 640px) {
    .partners-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
    .partners-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .location-item {
        flex-direction: column;
        align-items: center;
        gap: var(--space-1);
    }
}
</style>