<script setup lang="ts">
import VueSelect from "vue-select"
import {SelectBox} from "@/components/type/common"

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  options: {
    type: Array<SelectBox>,
    required: true,
  },
  isError: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "::SELECT PLEASE::",
  },
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
  tabindex: {
    type: Number,
    default: 0,
  }
})

const updateValue = (selected: SelectBox) => {
  // emit('update:modelValue', selected.value)
}

</script>

<template>
  <span class="selectBox" :class="{'isError' : isError}">
    <vue-select :clearable="false"
                :searchable="false"
                :options="options"
                :tabindex="tabindex"
                :placeholder="placeholder"
                :closeOnSelect="closeOnSelect"
                :reduce="(v) => {console.log(v)}"
                :transition="v => {console.log(v)}"
    />
    <div v-if="isError" class="errorText">{{ errorText }}</div>
  </span>
</template>

<style scoped>

</style>