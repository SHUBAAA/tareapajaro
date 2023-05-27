import { createRouter, createWebHashHistory } from 'vue-router';



import Principal from './pages/Principal.vue';
import BirdDetails from './pages/BirdDetails.vue';

const routes = [
  {
    name: 'Principal',
    path: '/',
    component: Principal,
    props: true,
  },
  {
    path: '/bird/:id',
    name: 'BirdDetails',
    component: BirdDetails,
    props: true,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;