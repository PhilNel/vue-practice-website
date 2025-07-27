<template>
    <BackgroundSection :background-image="roomImage" image-alt="Room background" height="30vh" min-height="50vh"
        section-class="specials" object-position="top">
        <div class="section-header white-text">
            <h2>SPECIALS</h2>
            <p>Discover our exclusive monthly offers and special treatment packages designed to
                give you the best
                value for premium skin care.</p>
            <div class="specials-button">
                <Button label="OUR SPECIALS" variant="primary" @click="navToSpecials" />
            </div>
        </div>
    </BackgroundSection>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import BackgroundSection from '@/components/ui/BackgroundSection.vue'
import { useNavigation } from '@/composables/useNavigation'
import roomImage from '@/assets/room.jpg'

const { navToSpecials } = useNavigation()
</script>

<style scoped>
.section-header {
    padding: 0 var(--space-6);
}

.section-header p {
    margin-bottom: var(--space-8);
    max-width: 500px;
}

.specials-button {
    margin-top: var(--space-8);
}
</style>