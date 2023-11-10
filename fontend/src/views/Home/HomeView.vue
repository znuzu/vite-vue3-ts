<template>
  <router-view v-slot="{Component, route}">
    <keep-alive>
      <Component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
</script>
