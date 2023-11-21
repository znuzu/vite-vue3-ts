<script setup lang="ts">
import {ref} from "vue";
import { SelectBox } from "@/components/type/common"

import DefaultInput from "@/components/common/DefaultInput.vue";
import DefaultCheckBox from "@/components/common/DefaultCheckBox.vue";
import DefaultRadio from "@/components/common/DefaultRadio.vue";
import DefaultSelectBox from "@/components/common/DefaultSelectBox.vue";

const inputModel = ref('');
const checkModel1 = ref(true);
const checkModel2 = ref(true);

const radioModel = ref('Y');

const selectBoxModel = ref("");
const selectBoxOptions : SelectBox[] = [
  {
    label: "Old Man's War",
    value: 1,
  },
  {
    label: "The Lock Artist",
    value: 2,
  },
  {
    label: "HTML5",
    value: 3,
  },
  {
    label: "Right Ho Jeeves",
    value: 4,
  },
  {
    label: "The Code of the Wooster",
    value: 5,
  },
];
</script>

<template>
  <main class="containerInner">
    <h1>This is About Page</h1>
    <div>
      <br>
      <h1> INPUT MODEL : {{ inputModel }}</h1>
      <default-input v-model="inputModel"/>
    </div>
    <div>
      <br>
      <h1> CHECK MODEL </h1>
      <div>
        <default-check-box v-model="checkModel1">
          <template #default>: {{ checkModel1 }}</template>
        </default-check-box>
      </div>
      <div>
        <default-check-box v-model="checkModel2">
          <template #default>: {{ checkModel2 }}</template>
        </default-check-box>
      </div>
    </div>
    <div>
      <br>
      <h1> RADIO MODEL : {{ radioModel }} </h1>
      <div>
        <default-radio v-model="radioModel" name="radio" value="Y">
          <template #default>: Y</template>
        </default-radio>
      </div>
      <div>
        <default-radio v-model="radioModel" name="radio" value="N">
          <template #default>: N</template>
        </default-radio>
      </div>
    </div>
    <div>
      <br>
      <h1> SELECT MODEL : {{ selectBoxModel }} </h1>
      <div>
        <default-select-box v-model="selectBoxModel" :options="selectBoxOptions"></default-select-box>
      </div>
    </div>


  </main>
</template>

<style scoped>

</style>