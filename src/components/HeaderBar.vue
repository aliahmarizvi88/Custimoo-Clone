<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  username: { type: String, required: true },
  account: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
});

// NAV MENU
const isMeunOpen = ref(false);
const query = ref('');
const SearchFilter = ['Merchant', 'Factory', 'Sales Rep', 'Admin'];
const activeFilter = ref([]);

const result = ref([
  'Hummel, Andreas Kattenhøj',
  'Reseller, Name',
  'Factory, Example',
  'Admin, Test',
  'Sales Rep, John Doe',
  'Reseller, Another Name',
  'Merchant, Sample Person',
  'Factory, Another Factory',
]);

const toggleSearch = () => {
  isMeunOpen.value = !isMeunOpen.value;
};

const toggleFilter = (filter) => {
  if (activeFilter.value.includes(filter)) {
    activeFilter.value = activeFilter.value.filter((f) => f !== filter);
  } else {
    activeFilter.value.push(filter);
  }
};

const filteredResult = computed(() => {
  return result.value.filter((r) => {
    const matchesQuery = r.toLowerCase().includes(query.value.toLowerCase());
    const matchesFilter =
      activeFilter.value.length === 0 ||
      activeFilter.value.some((f) => r.toLowerCase().includes(f.toLowerCase()));
    return matchesQuery && matchesFilter;
  });
});

//Click Outside Events:
const popup = ref(null);
const trigger = ref(null);

const onDocClick = (e) => {
  if (!isMeunOpen.value) return;

  const popEl = popup.value;
  const trigEl = trigger.value;

  if (
    (popEl && popEl.contains(e.target)) ||
    (trigEl && trigEl.contains(e.target))
  ) {
    return;
  }

  isMeunOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', onDocClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick);
});
</script>

<template>
  <header class="flex justify-between items-center text-gray-500">
    <!-- left Side -->
    <div class="flex items-center gap-2 cursor-pointer relative">
      <button
        ref="trigger"
        @click="toggleSearch"
        class="flex items-center gap-2 cursor-pointer"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9 8.29526L14.6878 2.46599C14.5375 1.86237 14.1416 1.34847 13.6011 1.05152C13.0594 0.754297 12.4144 0.695685 11.8285 0.8918L11.1938 1.10319C11.0774 1.14208 11.0144 1.26792 11.0532 1.38431L11.1938 1.80598C11.2327 1.92237 11.3585 1.98543 11.4749 1.94654L12.0383 1.75848C12.4024 1.63709 12.8091 1.63931 13.1491 1.81793C13.4908 1.99737 13.7308 2.30294 13.8239 2.67628L14.6697 6.58856C14.0091 6.02161 13.1611 5.6666 12.2224 5.6666C10.3643 5.6666 8.82765 7.01052 8.51182 8.77777H7.48846C7.17262 7.01052 5.63593 5.6666 3.77784 5.6666C2.83922 5.6666 1.99115 6.02161 1.33058 6.58829L2.17643 2.676C2.26976 2.30266 2.50949 1.9971 2.85116 1.81765C3.19117 1.63903 3.59784 1.63681 3.96201 1.7582L4.52536 1.94626C4.64175 1.98515 4.76758 1.9221 4.80647 1.8057L4.94703 1.38403C4.98592 1.26764 4.92286 1.1418 4.80647 1.10291L4.17174 0.891522C3.5859 0.695407 2.94088 0.754019 2.39921 1.05125C1.85864 1.34847 1.4628 1.86237 1.31252 2.46599L0.10028 8.29526C0.0368 8.60025 0.00321455 8.91071 0 9.22222L0 9.44445C0 11.5309 1.69142 13.2223 3.77784 13.2223C5.78816 13.2223 7.41596 11.6475 7.53319 9.66667H8.46681C8.58404 11.6475 10.2118 13.2223 12.2222 13.2223C14.3086 13.2223 16 11.5309 16 9.44445V9.22222C15.9972 8.91083 15.9633 8.60027 15.9 8.29526ZM3.77784 12.3334C2.18476 12.3334 0.888904 11.0375 0.888904 9.44445C0.888904 7.85137 2.18476 6.55551 3.77784 6.55551C5.37093 6.55551 6.66678 7.85137 6.66678 9.44445C6.66678 11.0375 5.37093 12.3334 3.77784 12.3334ZM12.2224 12.3334C10.6294 12.3334 9.3335 11.0375 9.3335 9.44445C9.3335 7.85137 10.6294 6.55551 12.2224 6.55551C13.8155 6.55551 15.1114 7.85137 15.1114 9.44445C15.1114 11.0375 13.8155 12.3334 12.2224 12.3334Z"
            fill="#515150"
          />
        </svg>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99941 0H1.00101C0.113685 0 -0.336226 1.07791 0.294898 1.70591L4.2941 5.70511C4.68465 6.09566 5.31889 6.09566 5.70944 5.70511L9.70864 1.70591C10.3335 1.07791 9.88673 0 8.99941 0ZM5.00021 4.999L1.00101 0.9998H8.99941L5.00021 4.999Z"
            fill="#515150"
          />
        </svg>
      </button>

      <!-- SEARCH POPUP -->
      <div
        v-if="isMeunOpen"
        ref="popup"
        class="absolute top-8 left-0 w-[350px] bg-white shadow-lg rounded-xl p-4 z-50"
      >
        <div
          class="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-3 h-8 w-full drop-shadow-md mb-3"
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
            v-model="query"
            type="text"
            placeholder="Search..."
            class="outline-none text-gray-500 w-full bg-transparent text-sm"
          />
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="tag in SearchFilter"
            :key="tag"
            class="bg-[#D0EEE9] text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer"
            :class="{
              'bg-[#14A892] font-semibold text-teal-700':
                activeFilter.includes(tag),
            }"
            @click="toggleFilter(tag)"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Search Results -->
        <div class="max-h-40 overflow-y-auto">
          <p
            v-for="(item, i) in filteredResult"
            :key="i"
            class="py-1 cursor-pointer hover:bg-gray-100 px-2 rounded"
          >
            {{ item }}
          </p>
        </div>
      </div>

      <span class="font-normal text-[#515150]">
        {{ props.username }} | {{ props.account }} | {{ props.contact }} |
        {{ props.email }}
      </span>
    </div>

    <!--Right Side-->
    <div class="flex items-center gap-6">
      <div
        class="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-3 h-8 w-[360px] drop-shadow-md"
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
          placeholder="Search Here"
          class="outline-none text-gray-500 w-full bg-transparent text-sm"
        />
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9995 5V5.6C15.2808 6.06344 16.9995 8.08125 16.9995 10.5V11.0875C16.9995 12.5594 17.5401 13.975 18.5151 15.075L18.7464 15.3344C19.0089 15.6313 19.0745 16.05 18.912 16.4094C18.7495 16.7688 18.3933 17 17.9995 17H5.9995C5.60575 17 5.2486 16.7688 5.08729 16.4094C4.92597 16.05 4.99049 15.6313 5.25213 15.3344L5.48388 15.075C6.46013 13.975 6.9995 12.5594 6.9995 11.0875V10.5C6.9995 8.08125 8.69013 6.06344 10.9995 5.6V5C10.9995 4.44781 11.4464 4 11.9995 4C12.5526 4 12.9995 4.44781 12.9995 5ZM11.9995 20C11.4683 20 10.9589 19.7906 10.5839 19.4156C10.2089 19.0406 9.9995 18.5031 9.9995 18H13.9995C13.9995 18.5031 13.7901 19.0406 13.4151 19.4156C13.0401 19.7906 12.5026 20 11.9995 20Z"
          fill="#515150"
        />
      </svg>

      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="bg-gray-300 p-1 rounded-full cursor-pointer"
      >
        <path
          d="M18.5 6H5.5C4.67156 6 4 6.67156 4 7.5V16.5C4 17.3284 4.67156 18 5.5 18H18.5C19.3284 18 20 17.3284 20 16.5V7.5C20 6.67156 19.3284 6 18.5 6ZM19 16.5C19 16.7757 18.7757 17 18.5 17H5.5C5.22431 17 5 16.7757 5 16.5V7.5C5 7.22431 5.22431 7 5.5 7H18.5C18.7757 7 19 7.22431 19 7.5V16.5ZM7.5 11.25C8.4665 11.25 9.25 10.4665 9.25 9.5C9.25 8.5335 8.4665 7.75 7.5 7.75C6.5335 7.75 5.75 8.5335 5.75 9.5C5.75 10.4665 6.5335 11.25 7.5 11.25ZM7.5 8.75C7.91356 8.75 8.25 9.08644 8.25 9.5C8.25 9.91356 7.91356 10.25 7.5 10.25C7.08644 10.25 6.75 9.91356 6.75 9.5C6.75 9.08644 7.08644 8.75 7.5 8.75ZM13.9697 9.46966L11 12.4393L10.0303 11.4697C9.73744 11.1768 9.26256 11.1768 8.96969 11.4697L6.21969 14.2197C6.15004 14.2893 6.09479 14.372 6.0571 14.463C6.0194 14.554 6 14.6515 6 14.75V15.625C6 15.8321 6.16791 16 6.375 16H17.625C17.8321 16 18 15.8321 18 15.625V12.75C18 12.5511 17.921 12.3603 17.7803 12.2197L15.0303 9.46966C14.7374 9.17678 14.2626 9.17678 13.9697 9.46966ZM17 15H7V14.8536L9.5 12.3536L11 13.8536L14.5 10.3536L17 12.8536V15Z"
          fill="#515150"
        />
      </svg>
    </div>
  </header>
</template>
