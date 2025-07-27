<template>
    <div class="special-card">
        <div class="special-header">
            <h3 class="special-title">{{ special.title }}</h3>
            <div class="savings-badge">
                <span class="percentage">{{ special.percentageSavings }}%</span>
                <span class="off-text">OFF</span>
            </div>
        </div>

        <p class="special-short-description">{{ special.shortDescription }}</p>

        <div class="special-price">
            <span class="current-price">{{ special.currency }}{{ special.price }}</span>
            <span class="original-price">{{ special.currency }}{{ special.originalPrice.toFixed(2) }}</span>
        </div>

        <button @click="toggleExpanded" class="read-more-btn">
            {{ isExpanded ? 'Read Less' : 'Read More' }}
        </button>

        <div v-if="isExpanded" class="special-details">
            <p v-for="paragraph in formattedDescription" :key="paragraph" class="detail-paragraph" v-html="paragraph">
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Special } from '@/types/special'

interface Props {
    special: Special
}

const props = defineProps<Props>()
const isExpanded = ref(false)

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
}

const formattedDescription = computed(() => {
    return props.special.fullDescription.split('\n\n').filter(p => p.trim())
})
</script>

<style scoped>
.special-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    box-shadow: var(--shadow-md);
    transition: var(--transition-fast);
    border: 1px solid var(--color-gray-200);
    width: 100%;
    max-width: none;
    box-sizing: border-box;
}

.special-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.special-header {
    position: relative;
    margin-bottom: var(--space-4);
    padding-right: var(--space-16);
    /* Space for the circular badge */
}

.special-title {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    color: var(--color-primary);
    margin: 0;
    line-height: 1.3;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.savings-badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-bold);
}

.percentage {
    font-size: var(--text-base);
    line-height: 1;
    margin-bottom: 1px;
}

.off-text {
    font-size: var(--text-xs);
    line-height: 1;
    letter-spacing: 0.5px;
}

.special-short-description {
    color: var(--color-gray-600);
    font-size: var(--text-base);
    line-height: 1.6;
    margin: 0 0 var(--space-5) 0;
}

.special-price {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}

.current-price {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--color-primary);
}

.original-price {
    font-size: var(--text-lg);
    color: var(--color-gray-500);
    text-decoration: line-through;
}

.read-more-btn {
    background: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.read-more-btn:hover {
    background: var(--color-primary-dark);
}

@keyframes expandIn {
    0% {
        opacity: 0;
        max-height: 0;
        padding-top: 0;
        margin-top: 0;
    }
    100% {
        opacity: 1;
        max-height: 500px;
        padding-top: var(--space-6);
        margin-top: var(--space-6);
    }
}

.special-details {
    margin-top: var(--space-6);
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-gray-200);
    animation: expandIn 0.3s ease-out;
    overflow: hidden;
}

.detail-paragraph {
    margin-bottom: var(--space-4);
    font-size: var(--text-base);
    line-height: 1.6;
}

.detail-paragraph:last-child {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .special-header {
        padding-right: var(--space-12);
        /* Smaller space on mobile */
    }

    .special-title {
        font-size: var(--text-lg);
    }
    .special-card {
        padding: var(--space-4);
    }

    .savings-badge {
        width: 45px;
        height: 45px;
    }

    .percentage {
        font-size: var(--text-sm);
    }

    .off-text {
        font-size: 10px;
    }

    .current-price {
        font-size: var(--text-xl);
    }

    .original-price {
        font-size: var(--text-base);
    }
}
</style>