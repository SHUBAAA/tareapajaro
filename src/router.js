import { createRouter, createWebHashHistory } from 'vue-router';



import Principal from './pages/Principal.vue';

const routes = [
  {
    name: 'Principal',
    path: '/',
    component: Principal,

  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;