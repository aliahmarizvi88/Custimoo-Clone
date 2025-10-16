<script setup>
import { ref } from 'vue';

import Dtable from '../../components/Dtable.vue';
import users_data from '../../assets/Data/settingsData/users.json';
import Dialogue from '../Dailogue_01.vue';

const DialogOpen = ref(false);
const formData = ref({ name: '', price: '' });

const openDialog = () => {
  DialogOpen.value = true;
};

const handleConfrim = () => {
  console.log('Form submitted:', formData.value);
  DialogOpen.value = false;
};

const user_col = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'merchant', label: 'Merchant' },
  { key: 'email', label: 'Email' },
  { key: 'active', label: 'Active' },
];
</script>

<template>
  <div class="flex justify-between items-start">
    <Dtable
      class="w-[1592px]"
      :columns="user_col"
      :data="users_data"
      :showAddBtn="true"
      btnLabel="ADD USER"
      @open-dialog="openDialog"
    />
    <Dialogue
      :isOpen="DialogOpen"
      title="User"
      @close="DialogOpen = false"
      @confirm="handleConfrim"
    >
      <template #default>
        <div class="flex flex-col gap-1 w-[360px] p-2">
          <label for="name" class="text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Input Name"
          />
        </div>

        <div class="flex flex-col gap-1 w-[360px] p-2">
          <label for="name" class="text-sm font-medium">Role</label>
          <select
            id="name"
            type="text"
            class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Input Name"
          >
            <option>Select Role</option>
          </select>
        </div>

        <div class="flex flex-col gap-1 w-[360px] p-2">
          <label for="name" class="text-sm font-medium">Merchant</label>
          <select
            id="name"
            type="text"
            class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Input Name"
          >
            <option>Select Affiliation</option>
          </select>
        </div>

        <div class="flex flex-col gap-1 w-[360px] p-2">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Input Email"
          />
        </div>

        <div class="flex flex-col gap-1 w-[360px] p-2">
          <label for="URL" class="text-sm font-medium">URL</label>
          <input
            id="URL"
            type="URL"
            class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
            placeholder="Input URL"
          />
        </div>
      </template>
    </Dialogue>
  </div>
</template>
