<template>
    <header class="app-header">
        <div class="header-content">
            <div class="logo" @click="navToHome">
                <img src="@/assets/logo.webp" alt="Nel Skin Care" class="logo-image">
            </div>
            <NavigationDrawer />
        </div>
    </header>
</template>

<script setup lang="ts">
import NavigationDrawer from '@/components/ui/NavigationDrawer.vue'
import { useNavigation } from '@/composables/useNavigation'

const { navToHome } = useNavigation()
</script>

<style scoped>
.container {
    margin: 0;
    padding: 0;
    height: 100%;
}

.app-header {
    background-color: var(--color-primary);
    margin: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    height: 6rem;
    display: flex;
    align-items: center;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 var(--space-8);
}

.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity var(--transition-fast);
}

.logo:hover {
    opacity: 0.8;
}

.logo-image {
    height: 4rem;
    width: auto;
    object-fit: contain;
    display: block;
}

/* Responsive */
@media (max-width: 768px) {
    .app-header {
        height: 4rem;
    }

    .logo-image {
        height: 3rem;
    }

    .header-content {
        padding: 0 var(--space-3);
    }
}
</style>