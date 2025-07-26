<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>
  <div id="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
