import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import Configurator from '@/views/Configurator';
import Cart from '@/views/Preview';

const routes = [
  { path: '/', component: Home },
  { path: '/configurator', component: Configurator },
  { path: '/cart', component: Cart }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
