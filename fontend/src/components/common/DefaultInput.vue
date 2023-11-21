<script setup lang="ts">
import {computed} from "vue";

const emit = defineEmits(["update:modelValue"])

const props = defineProps({
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const hasValue = computed(() => {
  return !!props.modelValue
})

const clearValue = () => {
  emit('update:modelValue', '');
}

const updateValue = (e: Event) => {
  const element = e.target as HTMLInputElement;
  emit('update:modelValue', element.value);
}
</script>

<template>
  <span
      class="inputText"
      :class="{'isError' : isError, 'hasValue' : hasValue}"
  >
    <input
        :type="props.type"
        :value="props.modelValue"
        @input="updateValue"
        :disabled="props.disabled"
    />
    <button v-if="hasValue" type="button" tabindex="-1" class="btnClear" @click="clearValue"/>
    <div v-if="isError" class="errorText">{{ errorText }}</div>
  </span>
</template>

<style scoped>

</style>