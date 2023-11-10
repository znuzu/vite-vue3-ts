<template>
  <main class="about">
    <h1>This is an about View</h1>
    <router-view v-slot="{Component}">
      <keep-alive :is="Component">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>
<script setup lang="ts">

</script>

<style scoped>
</style>
