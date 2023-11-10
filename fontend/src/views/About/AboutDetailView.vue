<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: 'id',
  }
})
</script>

<template>
  <main>
    <h1>This is About Detail</h1>
    {{ props.id }}
  </main>
</template>

<style scoped>

</style>