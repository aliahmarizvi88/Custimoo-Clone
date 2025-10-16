<script setup>
import Dtable from '../Dtable.vue';
import Data1 from '../../assets/Data/templateData/handball_data.json';
import Data2 from '../../assets/Data/templateData/utvardering_data.json';

const data1_cols = [
  { key: 'Title', label: 'Title' },
  { key: 'Event', label: 'Event' },
  { key: 'Active', label: 'Active' },
];

const data2_cols = [
  { key: 'Title', label: 'Title' },
  { key: 'EventTime', label: 'Event Time' },
  { key: 'Description', label: 'Description' },
  { key: 'Active', label: 'Active' },
];
</script>

<template>
  <div class="flex justify-between">
    <Dtable
      class="w-[654px]"
      :columns="data1_cols"
      :data="Data1"
      :showAddBtn="true"
      :btnLabel="'Add Template'"
    />
    <Dtable
      class="w-[922px]"
      :columns="data2_cols"
      :data="Data2"
      :showAddBtn="true"
      :btnLabel="'Add Template'"
    />
  </div>
</template>
