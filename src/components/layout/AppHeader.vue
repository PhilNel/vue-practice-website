<template>
    <header class="app-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>NEL SKIN SCARE</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
// Simple header - no complex logic needed yet
</script>

<style scoped>
.container {
    margin: 0;
}

.app-header {
    background-color: var(--color-primary);
    padding: var(--space-4) 0;
    margin: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-sm);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
    min-height: 60px;
}

.logo h1 {
    font-size: var(--text-3xl);

    font-weight: var(--font-bold);
    color: var(--color-white);
    margin: 0;
    line-height: 1;
    padding-left: var(--space-16);
}

/* Responsive */
@media (max-width: 768px) {
    .logo h1 {
        font-size: var(--text-xl);
        padding-left: 0;
    }

    .container {
        padding-left: var(--space-6);
    }
}
</style>