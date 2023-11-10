<script setup lang="ts">
import DefaultHeader from "@/components/DefaultHeader.vue";
</script>

<template>
  <default-header/>
  <main class="layout">
    <router-view/>
  </main>
</template>

<style scoped>
.layout {
  margin: 10px 10% 0 10%;
  padding: 10px 10px 0 10px;
}
</style>