<script setup>
import { ref } from 'vue';

import HeaderBar from '../components/HeaderBar.vue';

import Roles from '../components/setting/Roles.vue';
import User from '../components/setting/User.vue';
import Merchents from '../components/setting/Merchents.vue';
import Skins from '../components/setting/Skins.vue';

import Error from '../components/Error.vue';

const tabs = ['Roles', 'Users', 'Merchents', 'Skins', 'Developers'];
const activeTab = ref('Roles');
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
    <h1 class="text-[24px] pt-10 font-semibold">Settings</h1>

    <div class="flex gap-[30px] pt-5">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'text-[#14A892] font-semibold': activeTab === tab }"
        class="hover:text-[#14A892] cursor-pointer"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div>
      <div v-if="activeTab === 'Roles'">
        <Roles />
      </div>
      <div v-if="activeTab === 'Users'">
        <User />
      </div>
      <div v-if="activeTab === 'Merchents'">
        <Merchents />
      </div>
      <div v-if="activeTab === 'Skins'">
        <Skins />
      </div>
      <div v-if="activeTab === 'Developers'">
        <Error />
      </div>
    </div>
  </div>
</template>
