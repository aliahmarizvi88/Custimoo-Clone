<script setup>
import Logo from '../assets/Group 595.svg';

import Dashboard from '../assets/icons/Dashboard.svg';
import Product from '../assets/icons/Products.svg';
import Orders from '../assets/icons/Orders.svg';
import Factories from '../assets/icons/Factories.svg';
import Customer from '../assets/icons/Customers.svg';
import FileLibrary from '../assets/icons/File Library.svg';
import Template from '../assets/icons/Templates.svg';

import Logout from '../assets/icons/Logout.svg';
import SettingsIcons from '../assets/icons/Settings.svg';

const mainItems = [
  { name: 'Dashboard', icon: Dashboard, path: '/' },
  { name: 'Products', icon: Product, path: '/Products' },
  { name: 'Orders', icon: Orders, path: '/Orders' },
  { name: 'Factories', icon: Factories, path: '/Factories' },
  { name: 'Customers', icon: Customer, path: '/Customers' },
  { name: 'File Library', icon: FileLibrary, path: '/FileLibrary' },
  { name: 'Template', icon: Template, path: '/Template' },
];

const adminItem = [
  { name: 'Logout', icon: Logout, path: '/logout' },
  { name: 'Settings', icon: SettingsIcons, path: '/Setting' },
];
</script>

<template>
  <div class="flex flex-col sidebar">
    <img :src="Logo" alt="Logo" class="Logo" />

    <!-- MAIN ITEMS -->
    <ul class="main flex flex-col">
      <li v-for="item in mainItems" :key="item.name">
        <router-link
          :to="item.path"
          class="item"
          active-class="active-link"
          exact-active-class="active-link"
        >
          <img :src="item.icon" class="w-6 h-6 icon" :alt="item.name" />
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>

    <!-- ADMIN ITEMS -->
    <ul class="admin flex flex-col justify-end">
      <li v-for="items in adminItem" :key="items.name">
        <router-link
          :to="items.path"
          class="item"
          active-class="active-link"
          exact-active-class="active-link"
        >
          <img
            :src="items.icon"
            class="w-6 inline-block mr-2"
            :alt="items.name"
          />
          {{ items.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.sidebar {
  position: fixed;
  width: 246px;
  height: 100vh;
  padding: 24px 24px 0 24px;
  background-color: white;
}
.main {
  padding-top: 32px;
  padding-right: 8px;
  gap: 16px;
}
.admin {
  margin-top: auto; /* push admin items to bottom */
  padding-top: 32px;
  padding-right: 8px;
  gap: 16px;
}
.item {
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.item img {
  filter: grayscale(100%) brightness(0);
  transition: filter 0.2s;
}
.item:hover {
  color: #14a892;
}
.item:hover img {
  filter: invert(42%) sepia(94%) saturate(420%) hue-rotate(121deg)
    brightness(92%) contrast(90%);
}
.active-link {
  background: #e6f7f4;
  color: #14a892;
  font-weight: 600;
}
.active-link img {
  filter: invert(42%) sepia(94%) saturate(420%) hue-rotate(121deg)
    brightness(92%) contrast(90%);
}
</style>
