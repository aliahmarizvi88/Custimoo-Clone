<script setup>
import Dtable from '../Dtable.vue';
import products_data from '../../assets/Data/products.json';

const cat_columns = [
  { key: 'category', label: 'Name' },
  { key: 'icons', label: 'Icon' },
];
</script>

<template>
  <div class="flex justify-between items-start">
    <Dtable
      class="w-[1190px]"
      :columns="cat_columns"
      :data="products_data"
      :showAddBtn="true"
      :btnLabel="'ADD CATEGORY'"
    />
  </div>
</template>
