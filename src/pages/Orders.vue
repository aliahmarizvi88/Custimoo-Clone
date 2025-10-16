<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import Error from '../components/Error.vue';
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
    <h1 class="text-[24px] pt-10 font-semibold">Orders</h1>

    <Error />
  </div>
</template>
