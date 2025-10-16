<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import Dtable from '../components/Dtable.vue';

import Factories from '../assets/Data/Factories.json';

const columns = [
  { key: 'FactoryID', label: 'Factory ID' },
  { key: 'Name', label: 'Name' },
  {
    key: 'Country',
    label: 'Country',
    formatter: (row) => ({
      icon: `https://flagcdn.com/${row.Country.code}.svg`,
      text: row.Country.name,
    }),
  },
  { key: 'ContactPerson', label: 'Contact Person' },
  { key: 'Email', label: 'Email' },
  { key: 'Phone', label: 'Phone' },
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

    <h1 class="text-[24px] pt-10 font-semibold">Factories</h1>

    <Dtable
      :columns="columns"
      :data="Factories"
      :showAddBtn="true"
      :btnLabel="'+ Add Factory'"
    />
  </div>
</template>
