<template>
    <div class="contact-info">
        <div v-for="contact in contactItems" :key="contact.id" class="contact-item">
            <div class="contact-details">
                <span class="contact-service">{{ contact.service }}</span>
                <a :href="contact.href" class="contact-number-link">
                    <div class="contact-icon">
                        <component :is="contact.icon" color="var(--color-white)" size="16" />
                    </div>
                    <span class="contact-number">{{ contact.number }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface ContactItem {
    id: string
    service: string
    number: string
    href: string
    icon: Component
}

interface Props {
    contactItems: ContactItem[]
}

defineProps<Props>()
</script>

<style scoped>
.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
}

.contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--text-md);
    color: var(--color-white);
    margin-bottom: var(--space-4);
}

.contact-item:last-child {
    margin-bottom: 0;
}

.contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    text-align: center;
}

.contact-number-link {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none;
    color: var(--color-white);
    transition: opacity var(--transition-normal);
}

.contact-number-link:hover {
    opacity: 0.8;
}

.contact-icon {
    flex-shrink: 0;
    color: var(--color-white);
    width: 20px;
    height: 20px;
    fill: currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-service {
    font-size: var(--text-md);
    color: var(--color-white);
    opacity: 0.8;
}

.contact-number {
    font-size: var(--text-md);
    color: var(--color-white);
    font-weight: var(--font-medium);
}

.contact-link {
    text-decoration: none;
    transition: opacity var(--transition-normal);
}

.contact-link:hover {
    opacity: 0.8;
}
</style>