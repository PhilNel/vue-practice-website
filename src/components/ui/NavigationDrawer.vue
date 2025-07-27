<template>
    <div class="navigation-drawer">
        <!-- Hamburger Menu Button -->
        <button @click="toggleDrawer" class="menu-button" aria-label="Toggle navigation menu">
            <div class="hamburger-lines" :class="{ 'open': isOpen }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>

        <!-- Navigation Links (visible on large screens) -->
        <nav class="desktop-nav">
            <RouterLink v-for="route in routes" :key="route.name" :to="route.path" class="nav-link"
                :class="{ 'active': $route.name === route.name }">
                {{ route.label }}
            </RouterLink>
        </nav>

        <!-- Drawer Overlay -->
        <div v-if="isOpen" class="drawer-overlay" @click="closeDrawer"></div>

        <!-- Drawer Content -->
        <div class="drawer" :class="{ 'open': isOpen }">
            <nav class="drawer-nav">
                <RouterLink v-for="route in routes" :key="route.name" :to="route.path" class="drawer-link"
                    :class="{ 'active': $route.name === route.name }" @click="closeDrawer">
                    {{ route.label }}
                </RouterLink>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const isOpen = ref(false)

const routes = [
    { name: 'home', path: '/', label: 'HOME' },
    { name: 'about', path: '/about', label: 'ABOUT' }
]

const toggleDrawer = () => {
    isOpen.value = !isOpen.value
}

const closeDrawer = () => {
    isOpen.value = false
}
</script>

<style scoped>
.navigation-drawer {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-6);
}

/* Menu Button */
.menu-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
    z-index: 1001;
    display: block;
}

.hamburger-lines {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.hamburger-lines span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--color-white);
    transition: all 0.3s ease;
    transform-origin: center;
}

.hamburger-lines.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-lines.open span:nth-child(2) {
    opacity: 0;
}

.hamburger-lines.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Desktop Navigation */
.desktop-nav {
    display: none;
    gap: var(--space-8);
    margin-left: auto;
}

.nav-link {
    color: var(--color-white);
    text-decoration: none;
    font-weight: var(--font-medium);
    font-size: var(--text-sm);
    letter-spacing: 0.05em;
    transition: opacity 0.2s ease;
    opacity: 0.8;
}

.nav-link:hover {
    opacity: 1;
}

.nav-link.active {
    opacity: 1;
    font-weight: var(--font-bold);
}

/* Drawer Overlay */
.drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

/* Drawer */
.drawer {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: var(--color-primary);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 1000;
    padding-top: 6rem;
}

.drawer.open {
    right: 0;
}

.drawer-nav {
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.drawer-link {
    color: var(--color-white);
    text-decoration: none;
    font-weight: var(--font-medium);
    font-size: var(--text-lg);
    letter-spacing: 0.05em;
    padding: var(--space-3);
    border-radius: var(--radius-md);
    transition: background-color 0.2s ease;
}

.drawer-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.drawer-link.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: var(--font-semibold);
}

/* Responsive Design */
@media (min-width: 768px) {
    .desktop-nav {
        display: flex;
    }

    .menu-button {
        display: none;
    }
}

@media (max-width: 767px) {
    .drawer {
        padding-top: 4rem;
    }
}
</style>