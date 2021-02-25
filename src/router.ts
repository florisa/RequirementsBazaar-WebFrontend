import { createRouter, createWebHistory } from 'vue-router';
import Landing from './views/Landing.vue';
import Projects from './views/Projects.vue';
import Project from './views/Project.vue';
import Category from './views/Category.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/projects/:projectId",
      name: "project",
      component: Project,
    },
    {
      path: "/projects/:projectId/categories/:categoryId",
      name: "category",
      component: Category,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from});
  next();
});