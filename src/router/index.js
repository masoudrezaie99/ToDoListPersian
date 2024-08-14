import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue'),
    meta:{
      title:'Home'
  }
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import( '../views/ArchiveView.vue'),
    meta:{
      title:'Archive'
  }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router
