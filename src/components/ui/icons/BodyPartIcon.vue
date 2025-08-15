<template>
    <div class="body-part-icon" :class="iconClass" :style="iconStyle">
        <img :src="imageSrc" :alt="altText" class="body-part-image" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    iconName: string // e.g., 'chest', 'face', 'legs'
    size?: string | number
    backgroundColor?: string
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: '40',
    backgroundColor: 'var(--color-primary)'
})

const imageSrc = computed(() => `/src/assets/icons/${props.iconName}.webp`)
const altText = computed(() => `${props.iconName} treatment icon`)

const iconClass = computed(() => props.class || '')
const iconStyle = computed(() => ({
    width: typeof props.size === 'number' ? `${props.size}px` : props.size,
    height: typeof props.size === 'number' ? `${props.size}px` : props.size,
    backgroundColor: props.backgroundColor
}))
</script>

<style scoped>
.body-part-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}

.body-part-image {
    width: 70%;
    height: 70%;
    object-fit: cover;
    border-radius: 50%;
}
</style>