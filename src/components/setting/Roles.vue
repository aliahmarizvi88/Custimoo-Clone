<script setup>
import sorter from '../icons/sorter.vue';

import Accordion from './Accordion.vue';
import accordionData from '../../assets/Data/settingsData/accordinData.json';
</script>

<template>
  <div class="flex">
    <div
      class="py-5 px-5 bg-white mt-10 rounded-tl-[8px] rounded-bl-[8px] overflow-x-auto text-[14px] max-h-screen w-[520px] border-r-[1px] border-[#D3D3D3]"
    >
      <div class="flex flex-row items-center justify-end pb-[24px] gap-[30px]">
        <div
          class="flex items-center gap-2 border bg-white border-gray-500 rounded-full px-4 h-[32px] w-[360px] relative"
        >
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
            class="outline-none text-sm flex-1"
            placeholder="Search..."
          />
        </div>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 2H10.5L9.45 0.6C9.31028 0.413706 9.1291 0.262501 8.92082 0.158359C8.71254 0.0542176 8.48287 0 8.25 0L5.75 0C5.51713 0 5.28746 0.0542176 5.07918 0.158359C4.8709 0.262501 4.68972 0.413706 4.55 0.6L3.5 2H0.25C0.183696 2 0.120107 2.02634 0.0732233 2.07322C0.0263392 2.12011 0 2.1837 0 2.25L0 2.75C0 2.8163 0.0263392 2.87989 0.0732233 2.92678C0.120107 2.97366 0.183696 3 0.25 3H0.840625L1.87812 14.6344C1.91168 15.0074 2.08356 15.3544 2.35998 15.6071C2.63639 15.8598 2.99735 15.9999 3.37188 16H10.6281C11.0027 15.9999 11.3636 15.8598 11.64 15.6071C11.9164 15.3544 12.0883 15.0074 12.1219 14.6344L13.1594 3H13.75C13.8163 3 13.8799 2.97366 13.9268 2.92678C13.9737 2.87989 14 2.8163 14 2.75V2.25C14 2.1837 13.9737 2.12011 13.9268 2.07322C13.8799 2.02634 13.8163 2 13.75 2ZM5.35 1.2C5.39674 1.13808 5.45717 1.08781 5.52656 1.05311C5.59595 1.01842 5.67242 1.00024 5.75 1H8.25C8.32758 1.00024 8.40405 1.01842 8.47344 1.05311C8.54283 1.08781 8.60326 1.13808 8.65 1.2L9.25 2H4.75L5.35 1.2ZM11.125 14.5437C11.1147 14.6683 11.0579 14.7845 10.9658 14.869C10.8737 14.9536 10.7531 15.0003 10.6281 15H3.37188C3.24686 15.0003 3.12631 14.9536 3.03422 14.869C2.94214 14.7845 2.88529 14.6683 2.875 14.5437L1.84375 3H12.1562L11.125 14.5437Z"
            fill="#515150"
          />
        </svg>

        <button
          class="btn p-3 bg-[#14A892] text-white rounded-sm duration-300 hover:bg-[#0f7566] w-[122px] h-[40px]"
        >
          ADD ROLE
        </button>
      </div>

      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="px-[24px] py-[12px] w-[20px] text-center">
              <input class="w-4 h-6 accent-[#14A892]" type="checkbox" />
            </th>
            <th class="px-6 py-2 text-left">
              <div class="flex items-center gap-2">
                Role
                <sorter size="15" />
              </div>
            </th>
            <th class="px-6 py-2 text-left">
              <div class="flex items-center gap-2">
                Permissions
                <sorter size="15" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-100 cursor-pointer">
            <td class="text-center px-[24px] py-[12px]">
              <input type="checkbox" class="w-4 h-6 accent-[#14A892]" />
            </td>
            <td class="px-6 py-2">Customoo Admin</td>
            <td class="px-6 py-2">Full Permissions</td>
          </tr>
          <tr class="hover:bg-gray-100 cursor-pointer">
            <td class="text-center px-[24px] py-[12px]">
              <input type="checkbox" class="w-4 h-6 accent-[#14A892]" />
            </td>
            <td class="px-6 py-2">Merchant</td>
            <td class="px-6 py-2">Extended Permissions</td>
          </tr>
          <tr class="hover:bg-gray-100 cursor-pointer">
            <td class="text-center px-[24px] py-[12px]">
              <input type="checkbox" class="w-4 h-6 accent-[#14A892]" />
            </td>
            <td class="px-6 py-2">Customer</td>
            <td class="px-6 py-2">Standard Permissions</td>
          </tr>
          <tr class="hover:bg-gray-100 cursor-pointer">
            <td class="text-center px-[24px] py-[12px]">
              <input type="checkbox" class="w-4 h-6 accent-[#14A892]" />
            </td>
            <td class="px-6 py-2">Sales Rep</td>
            <td class="px-6 py-2">Limited Permissions</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="pt-[16px] pb-[24px] px-[16px] bg-white mt-10 rounded-tr-[8px] rounded-br-[8px] overflow-x-auto text-[14px] max-h-screen w-[1072px] p"
    >
      <div class="flex justify-between">
        <p class="text-[24px] font-semibold">Permissions</p>
        <div class="flex gap-[16px] items-center">
          <button
            class="btn border rounded border-gray-400 text-gray-400 px-[24px] py-[8px] cursor-pointer"
          >
            Deselect All
          </button>
          <button
            class="btn bg-[#14A892] rounded text-white px-[24px] py-[8px] hover:bg-[#128675] cursor-pointer"
          >
            Select All
          </button>
        </div>
      </div>

      <div class="my-[20px] flex flex-col gap-[18px]">
        <Accordion
          v-for="(item, i) in accordionData"
          :key="i"
          :label="item.label"
          :columns="item.columns"
        />
      </div>
    </div>
  </div>
</template>
