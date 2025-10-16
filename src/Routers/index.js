import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Orders from '../pages/Orders.vue';
import Products from '../pages/Products.vue';
import Factories from '../pages/Factories.vue';
import Customer from '../pages/Customer.vue';
import File from '../pages/File.vue';
import Template from '../pages/Template.vue';
import Setting from '../pages/Setting.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/Orders', name: 'Orders', component: Orders },
  { path: '/Products', name: 'Products', component: Products },
  { path: '/Customers', name: 'Customers', component: Customer },
  { path: '/FileLibrary', name: 'File Library', component: File },
  { path: '/Factories', name: 'Factories', component: Factories },
  { path: '/Template', name: 'Template', component: Template },
  { path: '/Setting', name: 'Setting', component: Setting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
