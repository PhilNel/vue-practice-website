<template>
    <section :class="['background-section', sectionClass]" :style="{ '--section-height': height, minHeight: height }">
        <div class="background-image-container">
            <img :src="backgroundImage" :alt="imageAlt" class="background-image" :style="{ objectPosition }">
            <div class="background-overlay"></div>
        </div>
        <div class="container content-wrapper">
            <div class="content-inner">
                <slot />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    backgroundImage: string
    imageAlt?: string
    height?: string
    sectionClass?: string
    objectPosition?: string
    minHeight?: string
}

withDefaults(defineProps<Props>(), {
    imageAlt: 'Background image',
    height: '60vh',
    sectionClass: '',
    objectPosition: 'center',
    minHeight: '40vh'
})
</script>

<style scoped>
.background-section {
    position: relative;
    overflow: hidden;
    color: var(--color-white);
}

.background-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: var(--color-primary);
    opacity: 0.5;
}

.content-wrapper {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: var(--space-8) 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: v-bind(minHeight);
}

.content-inner {
    width: 100%;
}
</style>