<script setup>
import { ref } from 'vue';

import Dtable from '../Dtable.vue';
import Dialogue from '../Dialogue_02.vue';

import merchent_Data from '../../assets/Data/settingsData/merchants.json';

const merchant_col = [
  { key: 'merchant', label: 'Merchants' },
  { key: 'address', label: 'Address' },
  {
    key: 'country',
    label: 'Country',
    formatter: (row) => {
      if (!row.country) {
        return { icon: '', text: 'N/A' };
      }
      return {
        icon: `https://flagcdn.com/${row.country.code.toLowerCase()}.svg`,
        text: row.country.name,
      };
    },
  },
  { key: 'contact_person', label: 'Contact Person' },
  { key: 'cvr_no', label: 'CVR No' },
  { key: 'discount', label: 'Discount' },
  { key: 'active', label: 'Active' },
];

const DialogOpen = ref(false);

const openDialog = () => {
  DialogOpen.value = true;
};

const handleConfirm = (data) => {
  console.log('Form submitted:', data);
  DialogOpen.value = false;
};
</script>

<template>
  <div class="flex justify-between items-start">
    <Dtable
      class="w-[1592px]"
      :columns="merchant_col"
      :data="merchent_Data"
      :showAddBtn="true"
      btnLabel="ADD MERCHANT"
      @open-dialog="openDialog"
    />

    <Dialogue
      :isOpen="DialogOpen"
      title="Register"
      :totalSteps="2"
      @close="DialogOpen = false"
      @confirm="handleConfirm"
    />
  </div>
</template>
