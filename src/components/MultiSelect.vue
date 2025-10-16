<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: String,
  options: Array,
});

const isOpen = ref(false);
const selected = ref([]);

const toggleItem = (item) => {
  if (selected.value.includes(item)) {
    selected.value = selected.value.filter((i) => i !== item);
  } else {
    selected.value.push(item);
  }
};

const selectAll = () => {
  selected.value = props.options.flatMap((g) => g.items);
};

const deselectAll = () => {
  selected.value = [];
};
</script>

<template>
  <div class="w-full">
    <!-- Button -->
    <button
      class="w-full flex justify-between items-center border rounded-md px-3 py-2"
      @click="isOpen = !isOpen"
    >
      <span class="flex items-center justify-center">
        <input
          type="checkbox"
          :checked="selected.length > 0"
          class="mr-2 w-4 h-6 accent-[#14A892]"
        />
        {{ label }}
      </span>
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="mt-1 rounded-md bg-white shadow-lg max-h-60 overflow-y-auto"
    >
      <div class="flex justify-end px-3 py-2 gap-2">
        <button
          class="text-sm px-4 py-2 rounded bg-gray-200 hover:bg-gray-200"
          @click="deselectAll"
        >
          Deselect All
        </button>
        <button
          class="px-4 py-2 rounded bg-[#14A892] text-white hover:bg-[#0f7566]"
          @click="selectAll"
        >
          Select All
        </button>
      </div>

      <div v-for="group in options" :key="group.group" class="px-3 py-2">
        <div class="flex items-center font-medium">
          <input
            type="checkbox"
            :checked="group.items.every((i) => selected.includes(i))"
            :indeterminate="
              group.items.some((i) => selected.includes(i)) &&
              !group.items.every((i) => selected.includes(i))
            "
            @change="toggleGroup(group)"
            class="mr-2 w-4 h-6 accent-[#14A892]"
          />
          <span>{{ group.group }}</span>
        </div>

        <div
          v-for="item in group.items"
          :key="item"
          class="ml-6 flex items-center"
        >
          <input
            type="checkbox"
            :checked="selected.includes(item)"
            @change="toggleItem(item)"
            class="mr-2 w-4 h-6 accent-[#14A892]"
          />
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
