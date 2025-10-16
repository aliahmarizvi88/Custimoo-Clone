<script setup>
import { ref } from 'vue';
import { frameworkData } from '../assets/Data/settingsData/frameWork';
import MultiStep from './MultiSelect.vue';

const props = defineProps({
  isOpen: Boolean,
  title: { type: String, default: 'Dialog' },
  totalSteps: { type: Number, required: true },
});

const emit = defineEmits(['close', 'confirm']);

const currentStep = ref(1);

const steps = ref([
  'Merchant Info',
  'Pick Factories',
  // add more steps if needed
]);

const nextStep = () => {
  if (currentStep.value < props.totalSteps) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const save = () => {
  emit('confirm');
  currentStep.value = 1;
};

const frameWorks = ref(frameworkData);
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

      <div class="flex items-center justify-center w-full mb-6 gap-5">
        <template v-for="(step, index) in steps" :key="index">
          <div class="flex items-center">
            <div class="flex flex-col items-center gap-3">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full border-2"
                :class="
                  currentStep === index + 1
                    ? 'bg-teal-500 text-white border-teal-500'
                    : 'border-teal-500 text-teal-500'
                "
              >
                {{ index + 1 }}
              </div>
              <div class="text-[12px] mt-1">{{ step }}</div>
            </div>
          </div>
        </template>
      </div>

      <div class="w-full flex flex-col items-center">
        <!-- STEP NO.1 -->
        <div v-if="currentStep === 1">
          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="Reseller" class="text-sm font-medium">Reseller</label>
            <input
              id="Reseller"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input Name"
            />
          </div>

          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="Address" class="text-sm font-medium">Address</label>
            <input
              id="Address"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input Address"
            />
          </div>

          <span class="flex gap-[16px]">
            <div class="flex flex-col gap-1 w-[120px] p-2">
              <label for="zip" class="text-sm font-medium">ZIP Code</label>
              <input
                id="zip"
                type="text"
                class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Input ZIP"
              />
            </div>

            <div class="flex flex-col gap-1 w-[224px] p-2">
              <label for="City" class="text-sm font-medium">City</label>
              <input
                id="City"
                type="text"
                class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
                placeholder="Input City"
              />
            </div>
          </span>

          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="Country" class="text-sm font-medium">Country</label>
            <select
              id="Country"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input Name"
            >
              <option>Select Country</option>
            </select>
          </div>

          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="contactPerson" class="text-sm font-medium"
              >Contact Person</label
            >
            <input
              id="contactPerson"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input Contact Person"
            />
          </div>

          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="CVR" class="text-sm font-medium">CVR no</label>
            <input
              id="CVR"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input CVR"
            />
          </div>

          <div class="flex flex-col gap-1 w-[360px] p-2">
            <label for="Discount" class="text-sm font-medium">Discount%</label>
            <input
              id="Discount"
              type="text"
              class="border border-gray-500 rounded-md px-3 py-2 focus:outline-none"
              placeholder="Input Discount"
            />
          </div>
        </div>

        <!-- STEP NO.2 -->
        <div v-if="currentStep === 2" class="flex flex-col gap-3 w-[360px]">
          <MultiStep
            v-for="fw in frameWorks"
            :key="fw.id"
            :label="fw.name"
            :options="fw.options"
          />
        </div>
      </div>

      <div class="mt-6 flex justify-center w-full gap-[20px]">
        <!-- Left button -->
        <button
          class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-200"
          @click="currentStep > 1 ? prevStep() : $emit('close')"
        >
          {{ currentStep > 1 ? 'Back' : 'Cancel' }}
        </button>

        <!-- Right Button -->
        <button
          class="px-4 py-2 rounded bg-[#14A892] text-white hover:bg-[#0f7566]"
          @click="currentStep < totalSteps ? nextStep() : save()"
        >
          {{ currentStep < totalSteps ? 'Next' : 'Save' }}
        </button>
      </div>
    </div>
  </div>
</template>
