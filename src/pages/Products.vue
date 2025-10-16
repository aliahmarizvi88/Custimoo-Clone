<script setup>
import { ref } from 'vue';
import HeaderBar from '../components/HeaderBar.vue';
import ProductsTab from '../components/products/ProductsTab.vue';
import CategoryTab from '../components/products/CategoryTab.vue';
import PriceTab from '../components/products/PriceTab.vue';
import SKUTab from '../components/products/SKUTab.vue';

const tabs = ['Products', 'Categories', 'Prices', 'SKUs'];
const activeTab = ref('Products');
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
    <h1 class="text-[24px] pt-10 font-semibold">Products</h1>

    <!-- MINI NAV -->
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
      <div v-if="activeTab === 'Products'">
        <ProductsTab />
      </div>
      <div v-else-if="activeTab === 'Categories'">
        <CategoryTab />
      </div>
      <div v-else-if="activeTab === 'Prices'">
        <PriceTab />
      </div>
      <div v-else-if="activeTab === 'SKUs'">
        <SKUTab />
      </div>
    </div>
  </div>
</template>
