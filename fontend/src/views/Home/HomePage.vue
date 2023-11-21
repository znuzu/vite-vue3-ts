<script setup lang="ts">
import {onMounted, reactive} from "vue";
import DefaultTable from "@/components/common/DefaultTable.vue";
import {type Pageable, type TableHeader} from "@/components/type/common";

const headers: TableHeader[] = [
  {
    field: "title",
    label: "제목",
    align: "left",
  },
  {
    field: "crtDt",
    label: "등록일",
    width: "200px"
  }
];

const data = reactive<{ value: Pageable }>({value: {} as Pageable});

const paging = reactive({page: "0", size: "9"});

onMounted(() => {
  search();
})
const search = async () => {
  const queryString = new URLSearchParams(paging);

  await fetch(`http://localhost:8081/api/faq?${queryString}`)
      .then(async response => {
        const d = await response.json() as Pageable;
        data.value = d;
      });
}

const changePage = (page: string) => {
  paging.page = page;
  search();
}

</script>

<template>
  <main class="containerInner">
    <default-table
        :headers="headers"
        :data="data.value"
        @change-page="changePage"
    >
      <template #search>
        <button class="btn md search wt100" @click="search()">검색</button>
      </template>
      <template #footer>
        <button class="btn md wt100 color2">등록</button>
      </template>
    </default-table>
  </main>
</template>

<style scoped>

</style>