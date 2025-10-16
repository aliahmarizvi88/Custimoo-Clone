<script setup>
import { ref } from 'vue';
import Dtable from '../Dtable.vue';
import Preview_window from '../Preview_window.vue';
import products_data from '../../assets/Data/products.json';

const products_col = [
  { key: 'serialNo', label: 'Serial No' },
  { key: 'name', label: 'Name' },
  { key: 'sku', label: 'SKU' },
  { key: 'category', label: 'Category' },
  { key: 'published', label: 'Published' },
];

const hoveredProduct = ref(null);
</script>

<template>
  <div class="flex justify-between items-start">
    <Dtable
      class="w-[1190px]"
      :columns="products_col"
      :data="products_data"
      :showAddBtn="true"
      :btnLabel="'ADD PRODUCT'"
      @row-hover="hoveredProduct = $event"
      @row-leave="hoveredProduct = null"
    />
    <Preview_window :product="hoveredProduct" />
  </div>
</template>
