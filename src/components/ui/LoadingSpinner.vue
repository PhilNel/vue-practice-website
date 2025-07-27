<template>
  <div class="loading-spinner-container" :class="containerClass">
    <div class="loading-spinner" :class="sizeClass">
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
      <div class="spinner-ring"></div>
    </div>
    <p v-if="message" class="loading-message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  message?: string
  centered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  centered: true
})

const sizeClass = computed(() => `spinner-${props.size}`)
const containerClass = computed(() => ({
  'centered': props.centered
}))
</script>

<style scoped>
.loading-spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.loading-spinner-container.centered {
  justify-content: center;
  min-height: 200px;
}

.loading-spinner {
  position: relative;
  display: inline-block;
}

.spinner-ring {
  position: absolute;
  border: 3px solid transparent;
  border-top: 3px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner-ring:nth-child(1) {
  animation-delay: -0.45s;
  border-top-color: var(--color-primary);
}

.spinner-ring:nth-child(2) {
  animation-delay: -0.3s;
  border-top-color: var(--color-primary);
}

.spinner-ring:nth-child(3) {
  animation-delay: -0.15s;
  border-top-color: var(--color-secondary);
}

.spinner-ring:nth-child(4) {
  border-top-color: var(--color-secondary-light);
}

/* Size variants */
.spinner-sm {
  width: 24px;
  height: 24px;
}

.spinner-sm .spinner-ring {
  width: 24px;
  height: 24px;
  border-width: 2px;
}

.spinner-md {
  width: 40px;
  height: 40px;
}

.spinner-md .spinner-ring {
  width: 40px;
  height: 40px;
  border-width: 3px;
}

.spinner-lg {
  width: 64px;
  height: 64px;
}

.spinner-lg .spinner-ring {
  width: 64px;
  height: 64px;
  border-width: 4px;
}

.loading-message {
  color: var(--color-gray-600);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  margin: 0;
  text-align: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .loading-spinner-container.centered {
    min-height: 150px;
  }
  
  .loading-message {
    font-size: var(--text-sm);
  }
}
</style> 