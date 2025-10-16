<script setup>
import Design from '../assets/Process Icon/Design.svg';
import Tags from '../assets/Process Icon/Tags.svg';
import Siccsor from '../assets/Process Icon/siccsor.svg';
import Truck from '../assets/Process Icon/truck.svg';
import Completed from '../assets/Process Icon/completed.svg';

import Dtable from '../components/Dtable.vue';
import HeaderBar from '../components/HeaderBar.vue';
import rows from '../assets/Data/orders.json';

import { ref, computed } from 'vue';

const processes = [
  { id: 1, name: 'Design to be Approved', icon: Design, qan: 20 },
  { id: 2, name: 'Sample to be Uploaded', icon: Tags, qan: 0 },
  { id: 3, name: 'In Production', icon: Siccsor, qan: 0 },
  { id: 4, name: 'Being Shipped', icon: Truck, qan: 0 },
  { id: 5, name: 'Fulfilled', icon: Completed, qan: 0 },
];

const columns = [
  { key: 'OrderNo', label: 'Order No' },
  { key: 'Customer', label: 'Customers' },
  { key: 'Factory', label: 'Factory' },
  { key: 'OrderReference', label: 'Order Reference' },
  { key: 'Status', label: 'Status' },
  { key: 'Date', label: 'Date' },
  { key: 'LastInteration', label: 'Last Interaction' },
];

const tableData = ref(rows.map((item) => ({ ...item, checked: false })));

// Mini Nav functionalities
const navFilter = ref('All');

const counts = computed(() => {
  return {
    All: tableData.value.length,
    'Take Action': tableData.value.filter(
      (item) => item.Status === 'Take Action'
    ).length,
    'Open Orders': tableData.value.filter(
      (item) => item.Status === 'Open Orders'
    ).length,
    'Awaiting User': tableData.value.filter(
      (item) => item.Status === 'Awaiting User'
    ).length,
  };
});

const filteredData = computed(() => {
  if (navFilter.value === 'All') return tableData.value;
  return tableData.value.filter((item) => item.Status === navFilter.value);
});

const setFilter = (filter) => {
  navFilter.value = filter;
  currentPage.value = 1;
};
</script>

<template>
  <div
    class="items-center max-h-[1080px] max-w-[1656px] mx-auto px-5 text-[14px]"
  >
    <HeaderBar
      username="Glenn Gundelach-Taabbel"
      account="Custimoo"
      contact="+45 12345678"
      email="gt@custimoo.com"
    />
    <h1 class="text-[24px] pt-10 font-semibold">Dashboard</h1>

    <!-- Process Bar -->
    <div class="grid grid-cols-5 gap-6 pt-8">
      <div
        v-for="process in processes"
        :key="process.id"
        class="bg-[#14A892] text-white drop-shadow-md rounded-lg shadow-md p-4 flex flex-col gap-3"
      >
        <p class="text-sm text-[20px]">{{ process.name }}</p>
        <div class="flex items-center gap-2 pt-5">
          <img :src="process.icon" alt="" class="w-8 h-8" />
          <span class="text-4xl font-semibold">{{ process.qan }}</span>
        </div>
      </div>
    </div>

    <!-- Mini Nav -->
    <div class="flex flex-row pt-5 gap-[24px]">
      <span
        v-for="(val, key) in counts"
        :key="key"
        @click="setFilter(key)"
        class="flex flex-row gap-[6px] cursor-pointer"
        :class="
          navFilter === key
            ? 'text-[#14A892] font-semibold'
            : 'hover:text-[#14A892]'
        "
      >
        <p>{{ key }}</p>
        <p class="bg-gray-300 px-2 rounded hover:bg-[#D0EEE9]">{{ val }}</p>
      </span>
    </div>

    <!-- Table -->
    <Dtable :columns="columns" :data="filteredData" :showAddBtn="false" />
  </div>
</template>
