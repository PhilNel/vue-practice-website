<template>
    <div class="social-icons" :class="{ [`social-icons--${variant}`]: variant }">
        <a v-for="social in socialLinks" :key="social.id" :href="social.url" target="_blank" rel="noopener noreferrer"
            class="social-link" :aria-label="social.label">
            <div class="social-icon" v-html="social.icon"></div>
        </a>
    </div>
</template>

<script setup lang="ts">
import { siInstagram, siFacebook } from 'simple-icons'

interface Props {
    variant?: 'default' | 'footer' | 'header'
    iconSize?: number
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    iconSize: 24
})

const socialLinks = [
    {
        id: 'instagram',
        url: 'https://www.instagram.com/nelskincareclinic/',
        label: 'Instagram',
        icon: siInstagram.svg
    },
    {
        id: 'facebook',
        url: 'https://www.facebook.com/nelskin',
        label: 'Facebook',
        icon: siFacebook.svg
    }
]
</script>

<style scoped>
.social-icons {
    display: flex;
    gap: var(--space-4);
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-full);
    color: var(--color-primary);
    transition: all var(--transition-normal);
    text-decoration: none;
    background-color: transparent;
    border: 2px solid var(--color-primary);
}

.social-link:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
}

.social-icon {
    width: v-bind('props.iconSize + "px"');
    height: v-bind('props.iconSize + "px"');
    fill: currentColor;
}

/* Footer variant */
.social-icons--footer .social-link {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--color-white);
}

.social-icons--footer .social-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--color-white);
}

/* Header variant */
.social-icons--header .social-link {
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--color-white);
}

.social-icons--header .social-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--color-white);
}

.social-icons--header {
    gap: var(--space-2);
}

.social-icons--header .social-icon {
    width: 20px;
    height: 20px;
}
</style>