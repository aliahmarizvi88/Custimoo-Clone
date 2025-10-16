<script setup>
import { ref } from 'vue';

import HeaderBar from '../components/HeaderBar.vue';
import Error from '../components/Error.vue';

import Email from '../components/templates/Email.vue';
import Yearly from '../components/templates/Yearly.vue';

const tabs = ['Emails', 'Yearly Planner', 'Invoice'];
const activeTab = ref('Emails');
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
    <h1 class="text-[24px] pt-10 font-semibold">Templates</h1>

    <div class="flex gap-[30px] pt-5">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'text-[#14A892] font-semibold': activeTab === tab }"
        class="jover:text-[#14A892] cursor-pointer"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div>
      <div v-if="activeTab === 'Emails'">
        <Email />
      </div>
      <div v-else-if="activeTab === 'Yearly Planner'">
        <Yearly />
      </div>
      <div v-else-if="activeTab === 'Invoice'">
        <Error />
      </div>
    </div>
  </div>
</template>
