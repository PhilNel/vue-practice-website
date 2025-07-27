<template>
    <section class="specials-section">
        <div class="container">
            <LoadingSpinner v-if="loading" />

            <div v-else-if="error" class="error-state">
                <p>{{ error }}</p>
            </div>

                  <div v-else class="specials-list">
        <SpecialCard v-for="special in specials" :key="special.id" :special="special" />
      </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SpecialCard from '@/components/ui/SpecialCard.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { useSpecials } from '@/composables/useSpecials'

const { specials, loading, error, fetchSpecials } = useSpecials()

onMounted(() => {
    fetchSpecials()
})
</script>

<style scoped>
.specials-section {
    align-self: center;
    padding-bottom: var(--space-12);
}

.container {
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--space-8);
}

.section-subtitle {
    font-size: var(--text-lg);
    color: var(--color-gray-600);
    margin: 0 0 var(--space-12) 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.specials-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.error-state {
    text-align: center;
    padding: var(--space-12);
}

.error-state p {
    font-size: var(--text-lg);
    color: var(--color-error);
}

@media (max-width: 768px) {

    .section-subtitle {
        font-size: var(--text-base);
    }

      .specials-list {
    gap: var(--space-6);
  }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--space-4);
    }

      .specials-list {
    gap: var(--space-4);
  }
}
</style>