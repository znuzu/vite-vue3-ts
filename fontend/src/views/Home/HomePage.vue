<script setup lang="ts">
  import {ref} from "vue";
  const count = ref(0);
</script>

<template>
  <main>
    <h1>This is Home Page</h1>
    {{ count }}
    <button @click="count++">count up</button>
  </main>
</template>

<style scoped>

</style>