<template>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="iconClass" :style="iconStyle">
        <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    size?: string | number
    color?: string
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: '24',
    color: 'currentColor'
})

const iconClass = computed(() => props.class || '')
const iconStyle = computed(() => ({
    width: typeof props.size === 'number' ? `${props.size}px` : props.size,
    height: typeof props.size === 'number' ? `${props.size}px` : props.size,
    fill: props.color
}))
</script>

<style scoped>
svg {
    display: inline-block;
    vertical-align: middle;
}
</style>