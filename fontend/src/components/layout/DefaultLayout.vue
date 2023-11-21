<script setup lang="ts">
import DefaultHeader from "@/components/layout/DefaultHeader.vue";
import DefaultGnb from "@/components/layout/DefaultGnb.vue";
</script>

<template>
  <main class="wrap">
    <default-header/>
    <default-gnb />
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

