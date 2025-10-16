<script setup>
import { computed, ref } from 'vue';
import HeaderBar from '../components/HeaderBar.vue';
import Data from '../assets/Data/file.json';

const normalizedData = Data.map((file) => ({
  ...file,
  uploadedBy: file.uploadedBy.toLowerCase(),
}));

//search functionalities
const searchQuery = ref('');

const filteredFile = computed(() => {
  if (!searchQuery.value) return normalizedData;

  return normalizedData.filter((file) =>
    file.fileName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// all files
const allFiles = computed(() => filteredFile.value);

const customerFiles = computed(() =>
  filteredFile.value.filter((file) => file.uploadedBy === 'customer')
);

const activeTab = ref('all');

//Select FILES
const selectedFile = ref([]);

const toggleSelection = (fileId) => {
  if (selectedFile.value.includes(fileId)) {
    selectedFile.value = selectedFile.value.filter((id) => id !== fileId);
  } else {
    selectedFile.value.push(fileId);
  }
};

const selectAll = () => {
  let filesToSelect = [];

  if (activeTab.value === 'all') {
    filesToSelect = allFiles.value;
  } else if (activeTab.value === 'customer') {
    filesToSelect = customerFiles.value;
  }

  selectedFile.value = filesToSelect.map((file) => file.id);
};

const deselectAll = () => {
  selectedFile.value = [];
};

const isSelected = (fileId) => selectedFile.value.includes(fileId);
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

    <h1 class="text-[24px] pt-10 font-semibold">File Library</h1>

    <!-- Tabs -->
    <div class="flex flex-row pt-5 gap-[32px]">
      <button
        :class="{ 'text-[#14A892] font-semibold': activeTab === 'all' }"
        @click="activeTab = 'all'"
        class="hover:text-[#14A892] pb-1 cursor-pointer"
      >
        Files
      </button>
      <button
        :class="{ 'text-[#14A892] font-semibold': activeTab === 'customer' }"
        @click="activeTab = 'customer'"
        class="hover:text-[#14A892] pb-1 cursor-pointer"
      >
        Customer Upload
      </button>
    </div>

    <!-- Top controls -->
    <div class="flex justify-between items-center pt-10">
      <div class="flex gap-[16px] items-center">
        <button
          class="btn border rounded border-gray-400 text-gray-400 px-[24px] py-[8px] cursor-pointer"
          @click="deselectAll"
        >
          Deselect All
        </button>
        <button
          class="btn bg-[#14A892] rounded text-white px-[24px] py-[8px] hover:bg-[#128675] cursor-pointer"
          @click="selectAll"
        >
          Select All
        </button>
      </div>

      <div class="flex flex-row items-center justify-end gap-[30px]">
        <div
          class="flex items-center gap-2 border bg-white border-gray-500 rounded-full px-4 h-[32px] w-[360px]"
        >
          <!-- Search icon -->
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"
              fill="#515150"
            />
          </svg>

          <input
            type="text"
            placeholder="Search...."
            v-model="searchQuery"
            class="outline-none text-gray-700 w-full bg-transparent text-sm"
          />
        </div>

        <!-- Add File Button -->
        <button
          class="btn px-[24px] py-[8px] bg-[#14A892] text-white rounded-sm duration-300 hover:bg-[#0f7566]"
        >
          + Add File
        </button>
      </div>
    </div>

    <!-- File Grid -->
    <div class="grid grid-cols-6 gap-[16px] pt-5">
      <div
        v-for="file in activeTab === 'all'
          ? allFiles
          : activeTab === 'customer'
          ? customerFiles
          : companyFiles"
        :key="file.id"
        :class="[
          'w-[252px] h-[324px] p-4 rounded-[16px] shadow transition',
          isSelected(file.id) ? 'bg-[#E8F7F5] font-semibold ' : 'bg-white',
        ]"
      >
        <!-- Top controls -->
        <div class="flex justify-between items-center mb-3">
          <input
            type="checkbox"
            class="w-4 h-4 cursor-pointer accent-[#14A892]"
            :checked="isSelected(file.id)"
            @change.stop="toggleSelection(file.id)"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path
              d="M11.4037 10C11.4037 10.7763 10.7765 11.4035 10.0002 11.4035C9.22385 11.4035 8.59665 10.7763 8.59665 10C8.59665 9.22369 9.22385 8.5965 10.0002 8.5965C10.7765 8.5965 11.4037 9.22369 11.4037 10ZM15.2633 8.5965C14.487 8.5965 13.8598 9.22369 13.8598 10C13.8598 10.7763 14.487 11.4035 15.2633 11.4035C16.0396 11.4035 16.6668 10.7763 16.6668 10C16.6668 9.22369 16.0396 8.5965 15.2633 8.5965ZM4.737 8.5965C3.96069 8.5965 3.3335 9.22369 3.3335 10C3.3335 10.7763 3.96069 11.4035 4.737 11.4035C5.51332 11.4035 6.14051 10.7763 6.14051 10C6.14051 9.22369 5.51332 8.5965 4.737 8.5965Z"
              fill="#515150"
            />
          </svg>
        </div>

        <!-- File image -->
        <div
          class="flex justify-center items-center h-[144px] w-full bg-gray-50"
        >
          <img
            :src="file.thumbnail || ''"
            alt="File Image"
            class="max-h-[144px] max-w-[full] object-contain"
          />
        </div>

        <!-- File details -->
        <div
          class="flex flex-col items-start pt-4 space-y-1 text-sm text-gray-700"
        >
          <p>{{ file.owner }}</p>
          <p class="truncate">{{ file.fileName }}</p>
          <p>{{ file.date }}</p>
          <p>{{ file.size }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
