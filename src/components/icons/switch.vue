<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const toggle = (e) => {
  emit('update:modelValue', e.target.checked);
};
</script>
<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      :checked="props.modelValue"
      @change="toggle"
    />
    <div
      class="group peer ring-0 bg-[#A6A7A8] rounded-full outline-none duration-300 w-[31px] h-[16px] shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-white after:h-[12px] after:w-[12px] after:top-[2px] after:left-[2px] after:transition-transform after:duration-200 peer-checked:after:translate-x-[15px] peer-checked:bg-[#14A892]"
    ></div>
  </label>
</template>
