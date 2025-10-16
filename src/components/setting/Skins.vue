<script setup>
import { ref } from 'vue';
import editing from '../icons/editing.vue';

const girdItems = ref([
  { name: 'skin_01', des: 'classic_skin' },
  { name: 'skin_02', des: 'fancy_skin' },
  { name: 'skin_03', des: 'funky_skin' },
  { name: 'skin_04', des: 'business_skin' },
]);
</script>

<template>
  <!-- TOP PORTION -->
  <div
    class="py-5 px-5 bg-white mt-10 rounded-[8px] overflow-x-auto text-[14px] max-h-screen flex gap-[16px]"
  >
    <div
      class="bg-[#F4F4F4] w-[864px] h-[600px] p-[24px] flex flex-col gap-[16px] rounded-[8px]"
    >
      <p class="text-[24px] font-bold">Current Skin</p>
      <img
        src="https://placehold.co/816x504"
        alt=""
        class="h-[504px] w-[816px]"
      />
    </div>

    <div class="w-[664px] flex flex-col gap-[24px]">
      <div
        class="flex items-center justify-between p-[16px] rounded-[8px] cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
      >
        <span>
          <h3 class="text-[24px] font-semibold">Fonts</h3>
          <p>Choose the font style for customizer</p>
        </span>
        <editing size="32" />
      </div>
      <div
        class="flex items-center justify-between p-[16px] rounded-[8px] cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
      >
        <span>
          <h3 class="text-[24px] font-semibold">Color Schema</h3>
          <p>Change the Color of your Customizer</p>
        </span>
        <editing size="32" />
      </div>
      <div
        class="flex items-center justify-between p-[16px] rounded-[8px] cursor-pointer shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
      >
        <span>
          <h3 class="text-[24px] font-semibold">Logo</h3>
          <p class="text-[14px]">
            Upload your own logo to keep your customizer on brand
          </p>
        </span>
        <editing size="32" />
      </div>
    </div>
  </div>

  <!-- Gird Items -->
  <div class="mt-7 mb-10 grid grid-cols-4 gap-4">
    <div
      v-for="(item, index) in girdItems"
      :key="index"
      class="w-[386px] h-[360px] rounded-[8px] bg-white p-[16px] shadow-xl"
    >
      <img
        src="https://placehold.co/600x400"
        alt=""
        class="w-[354px] h-[232px]"
      />
      <span class="flex flex-col gap-1 items-start p-4">
        <h1 class="text-lg font-semibold">{{ item.name }}</h1>
        <p class="text-md">{{ item.des }}</p>
      </span>
    </div>
  </div>
</template>
