<script setup>
defineProps({
  isOpen: Boolean,
  title: {
    type: String,
    default: 'Dialog',
  },
});
defineEmits(['close', 'confirm']);
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
  >
    <div
      class="bg-white rounded-lg shadow-lg w-[548px] p-[24px] flex flex-col items-center"
    >
      <h2
        class="text-[24px] font-semibold text-center pb-4 mb-4 border-b border-gray-300 w-full"
      >
        {{ title }}
      </h2>

      <slot />

      <div class="mt-6 flex justify-center space-x-3 w-full">
        <button
          class="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 border"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 rounded bg-[#14A892] text-white hover:bg-[#0f7566]"
          @click="$emit('confirm')"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
