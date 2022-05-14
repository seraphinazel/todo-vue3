import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotePage from '../views/NotePage.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/notes/:id',
    component: NotePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
