<script setup>
import { ref } from 'vue';
import Dtable from '../Dtable.vue';
import SKUs_data from '../../assets/Data/products.json';
import Preview_window from '../Preview_window.vue';

const SKU_columns = [
  { key: 'serialNo', label: 'SKU No' },
  { key: 'sku', label: 'Name' },
  { key: 'factory', label: 'Factory' },
  { key: 'category', label: 'Category' },
  { key: 'published', label: 'Published' },
];

const hoveredSKU = ref(null);
</script>

<template>
  <div class="flex justify-between items-start">
    <Dtable
      class="w-[1190px]"
      :columns="SKU_columns"
      :data="SKUs_data"
      :showAddBtn="true"
      :btnLabel="'ADD SKU'"
      @row-hover="hoveredSKU = $event"
    />
    <Preview_window :product="hoveredSKU" />
  </div>
</template>
