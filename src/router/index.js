import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import NotePage from '@/views/NotePage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
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
