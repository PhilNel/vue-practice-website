<template>
    <button :class="['btn', `btn--${variant}`, { 'btn--disabled': disabled }]" :disabled="disabled"
        @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
interface Props {
    label: string
    variant?: 'primary' | 'secondary' | 'outline'
    disabled?: boolean
}

interface Emits {
    (e: 'click'): void
}

withDefaults(defineProps<Props>(), {
    variant: 'primary',
    disabled: false
})

const emit = defineEmits<Emits>()

const handleClick = () => {
    emit('click')
}
</script>

<style scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid transparent;
    border-radius: var(--radius-lg);
    cursor: pointer;
    transition: all var(--transition-normal);
    text-decoration: none;
    min-height: 44px;
    min-width: 140px;
}

.btn:hover {
    opacity: 0.8;
}

.btn:active {
    transform: translateY(0);
}

.btn--primary {
    background-color: var(--color-white);
    color: var(--color-primary);
    border-color: var(--color-white);
}

.btn--secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
    border-color: var(--color-secondary);
}

.btn--secondary:hover {
    background-color: var(--color-secondary-dark);
    border-color: var(--color-secondary-dark);
    opacity: 1;
}

.btn--outline {
    background-color: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
}

.btn--outline:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    opacity: 1;
}

.btn--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>