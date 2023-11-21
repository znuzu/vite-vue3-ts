<script setup lang="ts">
const emit = defineEmits(["update:modelValue"])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})
const updateValue = (e: Event) => {
  const element = e.target as HTMLInputElement;
  emit('update:modelValue', element.checked);
}

</script>

<template>
  <label class="checkbox">
    <input
        type="checkbox"
        :checked="props.modelValue"
        @change="updateValue"
        :disabled="props.disabled"
    />
    <i/>
    <span v-if="$slots.default"><slot></slot></span>
  </label>
</template>

<style scoped>

</style>