<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import Dtable from '../components/Dtable.vue';
import customer from '../assets/Data/customer.json';

const cust_columns = [
  { key: 'Name', label: 'Name' },
  { key: 'Role', label: 'Role' },
  { key: 'Email', label: 'Email' },
  { key: 'Phone', label: 'Phone' },
  { key: 'Merchant', label: 'Merchant' },
  {
    key: 'Country',
    label: 'Country',
    formatter: (row) => ({
      icon: `https://flagcdn.com/${row.Country.code}.svg`,
      text: row.Country?.name || row.Country || '',
    }),
  },
];
</script>
<template>
  <div
    class="item-center max-h-[1080px] max-w-[1656px] mx-auto px-5 text-[14px]"
  >
    <HeaderBar
      username="Glenn Gundelach-Taabbel"
      account="Custimoo"
      contact="+45 12345678"
      email="gt@custimoo.com"
    />

    <h1 class="text-[24px] pt-10 font-semibold">Customers</h1>

    <Dtable :columns="cust_columns" :data="customer" />
  </div>
</template>
