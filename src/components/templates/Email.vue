<script setup>
import email_data from '../../assets/Data/templateData/email.json';
import Dtable from '../Dtable.vue';

const email_col = [
  { key: 'title', label: 'Title' },
  { key: 'subject', label: 'Subject' },
  { key: 'type', label: 'Type' },
  { key: 'active', label: 'Active' },
];
</script>

<template>
  <div class="flex items-start justify-between">
    <Dtable
      class="w-[1190px]"
      :columns="email_col"
      :data="email_data"
      :showAddBtn="true"
      :btnLabel="'Add Template'"
    />
    <div
      class="flex flex-col mt-10 items-center justify-center gap-[8px] px-[24px] py-[24px] bg-white w-[386px] min-h-[244px] rounded-[8px]"
    >
      <p class="text-[20px] font-semibold text-[#515150] text-center">
        Instructions
      </p>
      <div class="items-start p-[16px]">
        <p class="text-[20px] font-semibold text-[#515150]">
          1. Do this Instruction
        </p>
        <p class="text-[20px] font-semibold text-[#515150]">
          2. Do this Instruction
        </p>
        <p class="text-[20px] font-semibold text-[#515150]">
          3. Do this Instruction
        </p>
        <p class="text-[20px] font-semibold text-[#515150]">
          4. Do this Instruction
        </p>
      </div>
    </div>
  </div>
</template>
