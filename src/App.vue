<script setup>
import SideBar from './components/SideBar.vue';
</script>

<template>
  <SideBar />
  <div class="ml-[246px] p-4 bg-gray-100 min-h-screen h-auto">
    <router-view />
  </div>
</template>
<style>
body {
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
}
</style>
