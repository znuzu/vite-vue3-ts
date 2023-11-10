<template>
  <main>
    <h1>
      HomeDetail
    </h1>
    {{ props.id }}
  </main>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: 'defaultId',
  }
})
</script>

<style scoped>

</style>