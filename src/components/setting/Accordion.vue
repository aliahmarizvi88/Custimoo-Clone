<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  columns: { type: Array, default: () => [] },
});

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="w-[1024px] bg-[#E9E9E9] rounded-[4px] overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
  >
    <!-- Accordion Header -->
    <div
      class="min-h-[48px] px-[16px] py-[10px] flex justify-between items-center cursor-pointer"
      @click="toggleAccordion"
    >
      <p class="text-sm font-medium text-black">
        {{ label }}
      </p>

      <div class="flex gap-[8px]">
        <button
          class="border border-gray-400 text-gray-400 px-[20px] py-[4px] rounded hover:text-black hover:border-black transition"
        >
          Deselect All
        </button>
        <button
          class="bg-[#14A892] text-white px-[20px] py-[4px] rounded hover:bg-[#128675] transition"
        >
          Select All
        </button>
      </div>
    </div>

    <!-- Accordion Content -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="px-[16px] py-[10px] border-t flex gap-8 items-start bg-white"
      >
        <div
          v-for="(col, colIndex) in columns"
          :key="colIndex"
          class="space-y-2"
        >
          <div class="flex gap-1">
            <input type="checkbox" />
            <p class="font-medium text-sm">{{ col.title }}</p>
          </div>
          <label
            v-for="(opt, optIndex) in col.options"
            :key="optIndex"
            class="flex items-center gap-2 text-sm pl-5"
          >
            <input type="checkbox" />
            {{ opt.name }}
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
