<template>
    <section class="faq-section">
        <div class="container">
            <div class="faq-list">
                <div v-for="faq in faqs" :key="faq.id" class="faq-item">
                    <h3 class="faq-question">{{ faq.question }}</h3>
                    <p class="faq-answer">{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
    id: number
    question: string
    answer: string
}

const faqs = ref<FAQ[]>([
    {
        id: 1,
        question: "WILL LIMELIGHT MAKE ME MORE SUN SENSITIVE AFTER THE TREATMENT?",
        answer: "For the first week after treatment, we recommend avoiding direct sun exposure. After that, you can resume normal activities while using sunscreen daily to maintain your results."
    },
    {
        id: 2,
        question: "DOES A SKIN PEEL MAKE MY SKIN THINNER?",
        answer: "No. When performed correctly, skin peels actually strengthen your collagen and elastin."
    },
    {
        id: 3,
        question: "WHICH TREATMENT HAS THE MOST IMPACT?",
        answer: "Every skin type is different with unique requirements. We've found that a consistent routine combining different treatments provides the best results for maintaining healthy, youthful skin."
    },
    {
        id: 4,
        question: "HOW CAN I IMPROVE ACNE SCARRING?",
        answer: "Acne scarring requires a personalized treatment program rather than a single procedure. After individual assessment, we may recommend Dermapen, Limelight, Tixel, Fractionated Laser, or dermal fillers like Juvederm or Teosyal."
    },
    {
        id: 5,
        question: "WHAT AGE CAN YOU START HAIR REMOVAL?",
        answer: "Hair removal treatments typically begin after puberty. However, if unwanted hair is a concern at any age, we can assess and treat accordingly."
    },
    {
        id: 6,
        question: "WHICH TREATMENT WILL GIVE YOU AN INSTANT GLOW?",
        answer: "We offer two excellent options for immediate radiance: the Easy Droxy (Skin Tech Peel) or the Dermaceutic Milk Peel."
    },
    {
        id: 7,
        question: "WHAT DOES A TRIAD FACIAL MEAN?",
        answer: "This comprehensive facial combines three effective treatments in one session: microdermabrasion, laser toning, and chemical peeling. It instantly energizes and stimulates the skin, providing immediate results with long-term dermatological benefits for both men and women."
    }
])
</script>

<style scoped>
.faq-section {
    padding: var(--space-16) 0;
    background: var(--color-white);
    align-self: center;
    text-align: center;
}

.container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-8);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    margin-bottom: var(--space-10);
    padding-bottom: var(--space-8);
    border-bottom: 1px solid var(--color-gray-200);
}

.faq-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.faq-question {
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--color-primary);
    margin: 0 0 var(--space-4) 0;
    line-height: 1.4;
}

.faq-answer {
    font-size: var(--text-base);
    color: var(--color-gray-700);
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 768px) {
    .faq-section {
        padding: var(--space-12) 0;
    }

    .container {
        padding: 0 var(--space-8);
    }

    .faq-item {
        margin-bottom: var(--space-8);
        padding-bottom: var(--space-6);
    }

    .faq-question {
        font-size: var(--text-base);
    }

    .faq-answer {
        font-size: var(--text-sm);
    }
}
</style>