<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div
    class="flex flex-col mt-10 items-center justify-center gap-[8px] px-[24px] py-[24px] bg-white w-[386px] min-h-[424px] rounded-[8px]"
    v-if="product"
  >
    <p class="text-[20px] font-semibold text-[#515150] text-center">
      {{ product.name }}
    </p>

    <div
      class="w-[320px] h-[192px] flex items-center gap-[24px] justify-center text-gray-300"
    >
      <span class="text-center">
        <img
          :src="product.image"
          alt=""
          class="w-[133px] h-[160px] object-contain"
        />
        <p>Front</p>
      </span>
      <span class="text-center">
        <img
          :src="product.image"
          alt=""
          class="w-[133px] h-[160px] object-contain"
        />
        <p>Back</p>
      </span>
    </div>

    <div class="items-start py-[4px] px-4 gap-[16px] max-w-[320px]">
      <p class="font-semibold text-[16px] mb-1">Description</p>
      <p class="text-justify overflow-y-auto max-h-[100px]">
        {{ product.description }}
      </p>
    </div>
  </div>

  <div
    class="flex flex-col mt-10 items-center justify-center gap-[8px] px-[24px] py-[24px] bg-white w-[386px] min-h-[424px] rounded-[8px]"
    v-else
  >
    <p class="text-[24px] font-semibold text-[#515150]">Preview</p>
    <div class="flex items-center justify-center h-[104px] w-[104px]">
      <svg
        width="70"
        height="52"
        viewBox="0 0 70 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="text-[#515150] p-[5px]"
      >
        <path
          d="M63.1668 0H6.8335C3.2436 0 0.333496 2.9101 0.333496 6.5V45.5C0.333496 49.0899 3.2436 52 6.8335 52H63.1668C66.7567 52 69.6668 49.0899 69.6668 45.5V6.5C69.6668 2.9101 66.7567 0 63.1668 0ZM65.3335 45.5C65.3335 46.6946 64.3615 47.6667 63.1668 47.6667H6.8335C5.63885 47.6667 4.66683 46.6946 4.66683 45.5V6.5C4.66683 5.30535 5.63885 4.33333 6.8335 4.33333H63.1668C64.3615 4.33333 65.3335 5.30535 65.3335 6.5V45.5ZM15.5002 22.75C19.6883 22.75 23.0835 19.3548 23.0835 15.1667C23.0835 10.9785 19.6883 7.58333 15.5002 7.58333C11.312 7.58333 7.91683 10.9785 7.91683 15.1667C7.91683 19.3548 11.312 22.75 15.5002 22.75ZM15.5002 11.9167C17.2923 11.9167 18.7502 13.3746 18.7502 15.1667C18.7502 16.9588 17.2923 18.4167 15.5002 18.4167C13.7081 18.4167 12.2502 16.9588 12.2502 15.1667C12.2502 13.3746 13.7081 11.9167 15.5002 11.9167ZM43.5353 15.0352L30.6668 27.9038L26.465 23.702C25.1957 22.4327 23.1379 22.4327 21.8688 23.702L9.95214 35.6186C9.65033 35.9204 9.41092 36.2787 9.24758 36.673C9.08424 37.0673 9.00017 37.4899 9.00016 37.9167V41.7083C9.00016 42.6057 9.72776 43.3333 10.6252 43.3333H59.3752C60.2726 43.3333 61.0002 42.6057 61.0002 41.7083V29.25C61.0002 28.3881 60.6577 27.5614 60.0483 26.9518L48.1316 15.0352C46.8624 13.7661 44.8046 13.7661 43.5353 15.0352ZM56.6668 39H13.3335V38.3654L24.1668 27.5321L30.6668 34.0321L45.8335 18.8654L56.6668 29.6988V39Z"
          fill="#515150"
        />
      </svg>
    </div>

    <div class="text-[20px] px-[10px]">
      <p class="text-center">Want to see a preview?</p>
      <p class="text-center">Simply hover over a product to see it here</p>
    </div>
  </div>
</template>
