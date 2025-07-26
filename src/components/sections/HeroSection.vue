<template>
    <BackgroundSection :background-image="officeImage" image-alt="Office" height="30vh" min-height="30vh"
        section-class="hero">
        <div class="hero-content">
            <div class="hero-text white-text">
                <h1 class="hero-title">
                    <span class="highlight">SKIN THERAPY</span>
                    <span class="highlight">INSIDE AND OUT</span>
                    <span class="subtitle">Perfection in practice / Excellence in therapy</span>
                </h1>
            </div>
        </div>
    </BackgroundSection>
    <section class="hero-description">
        <div class="container">
            <p class="hero-description-text">
                With almost two decades laser therapy and skin care experience, with <strong>Dr. Len
                    Nel</strong> (Dermatologist) on hand, we offer the full spectrum of anti-ageing treatments.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import BackgroundSection from '@/components/ui/BackgroundSection.vue'
import officeImage from '@/assets/office.jpg'
</script>

<style scoped>
.hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-text {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: var(--text-4xl);
}

.white-text .hero-title,
.white-text .highlight,
.white-text .subtitle {
    color: var(--color-white);
}

.highlight {
    display: block;
    margin-bottom: var(--space-2);
}

.subtitle {
    display: block;
    font-size: var(--text-2xl);
    font-weight: var(--font-normal);
    opacity: 0.9;
    margin-top: var(--space-4);
}

/* Hero Description Section */
.hero-description {
    background-color: var(--color-gray-50);
    padding: var(--space-12) 0;
}

.hero-description-text {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    color: var(--color-gray-700) !important;
}

.hero-description-text strong {
    color: var(--color-gray-900) !important;
    font-weight: var(--font-semibold);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content {
        padding: var(--space-8) var(--space-4);
    }

    .hero-title {
        font-size: var(--text-3xl);
    }

    .subtitle {
        font-size: var(--text-lg);
    }

    .hero-description {
        padding: var(--space-8) 0;
    }

    .hero-description-text {
        font-size: var(--text-base);
    }
}
</style>