import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import NotePage from '@/views/NotePage.vue';
import NewNotePage from '@/views/NewNotePage.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/notes/:id',
    component: NotePage,
  },
  {
    path: '/notes/new',
    component: NewNotePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
