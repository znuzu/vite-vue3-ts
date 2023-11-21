<script setup lang="ts">

import {computed, PropType} from "vue";
import {type Pageable} from "@/components/type/common";

const props = defineProps({
  pageable: Object as PropType<Pageable>
})

const emit = defineEmits(['change', 'select']);

const pages = computed(() => {
  const pages = [];
  for (let i = 0; i < props.pageable?.totalPages; i++) {
    pages.push(i);
  }
  let currentPage = props.pageable?.number ?? 0;
  const start = Math.floor(currentPage / 10) * 10;
  const end = Math.min(start + 10, pages.length);
  return pages.slice(start, end);
})

const move = (page: number) => {
  if (page > -1) {
    emit('change', page);
  }
}
const isFirst = computed(() => {
  return props.pageable.number == 0;
})

const isLast = computed(() => {
  return props.pageable.number == (props.pageable.totalPages - 1);
})

const isCurrentPage = (page : number) => {
  return (page) == props.pageable.number;
}

</script>

<template>
  <div class="paging">
    <a class="link first" :class="{'event-disable' : isFirst}" @click="move(0)"/>
    <a class="link prev" :class="{'event-disable' : isFirst}" @click="move(props.pageable.number -1)"/>
    <a class="link" :class="{on : isCurrentPage(page), 'event-disable': isCurrentPage(page)}"
       v-for="page in pages"
       :key="page"
       @click="move(page)"
    >{{ page + 1 }}</a>
    <a class="link next" :class="{'event-disable' : isLast}" @click="move(props.pageable.number +1)"/>
    <a class="link last" :class="{'event-disable' : isLast}" @click="move(props.pageable.totalPages -1)"/>
  </div>
</template>

<style scoped>
.event-disable {
  pointer-events: none;
}
</style>