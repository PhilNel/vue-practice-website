<template>
    <div class="partner-card">
        <img :src="imageSrc" :alt="altText" class="partner-image">
        <p class="partner-name">{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    imageSrc: string
    altText: string
    name: string
}

defineProps<Props>()
</script>

<style scoped>
.partner-card {
    text-align: center;
    max-width: 300px;
}

.partner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--radius-xl);
}

.partner-name {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--color-gray-900);
    margin-top: var(--space-4);
}

/* Responsive Design */
@media (max-width: 768px) {
    .partner-card {
        max-width: 250px;
    }

    .partner-image {
        height: 250px;
    }
}
</style>