<script setup lang="ts">
import DefaultPagination from "@/components/common/DefaultPagination.vue";
import {type TableHeader, type Pageable} from "@/components/type/common";
import {PropType} from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<Pageable>,
    default: [],
  },
  headers: {
    type: Array as PropType<Array<TableHeader>>,
    default: [],
  },
  isCaption: {
    type: Boolean,
    default: false,
  },
  captionText: {
    type: String,
    default: "",
  },
  isCount: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(['changePage']);

const changePage = (page: number) => {
  emit('changePage', page.toString())
}

const pageCount = (index: number) => {
  return props.data.totalElements - props.data.size * props.data.number - index;
}

</script>

<template>
  <div class="tbSch">
    <p class="tbSchText">
      총 <span class="fwb">{{ props.data?.totalElements }}</span>건
      <span class="textGray2">[ {{ props.data?.number + 1 }} / {{ props.data?.totalPages }} ]</span>
    </p>
    <div class="dFlex gap10 mglAuto">
      <slot name="search">
      </slot>
    </div>
  </div>
  <div class="tbl">
    <table>
      <caption v-if="isCaption">{{ captionText }}</caption>
      <colgroup>
        <col v-if="isCount" :style="{'width': '100px' }"/>
        <col v-for="(header, i) in props.headers"
             :style="{ 'width': header.width }" :key="i"/>
      </colgroup>
      <thead>
      <tr>
        <th v-if="isCount">번호</th>
        <th v-for="(header, i) in props.headers" :key="i">{{ header.label }}</th>
      </tr>
      </thead>
      <tbody v-if="props.data?.content?.length > 0">
      <tr v-for="(d, j) in props.data.content" :key="j">
        <td v-if="isCount">{{ pageCount(j) }}</td>
        <td v-for="(header, i) in props.headers" :key="i" :class="{ 'align-left' : header.align == 'left' }">
          {{ d[header.field] }}
        </td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td :colspan="props.headers.length">
          NODATA
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="tbBtnWrap">
    <div class="dFlex gap10 mglAuto">
      <slot name="footer"></slot>
    </div>
  </div>
  <default-pagination :pageable="props.data" @change="changePage"/>
</template>

<style lang="scss" scoped>
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

</style>