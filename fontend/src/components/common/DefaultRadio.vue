<script setup lang="ts">
import {computed} from "vue";

const emit = defineEmits(["update:modelValue"])

const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})
const updateValue = (e: Event) => {
  const element = e.target as HTMLInputElement
  emit('update:modelValue', element.value);
}

const checked = computed(() =>
    props.value == props.modelValue
)

</script>

<template>
  <label class="radio">
    <input
        type="radio"
        :name="props.name"
        :value="props.value"
        :checked="checked"
        @input="updateValue"
        :disabled="props.disabled"
    />
    <i/>
    <span v-if="$slots.default"><slot></slot></span>
  </label>
</template>

<style scoped>

</style>