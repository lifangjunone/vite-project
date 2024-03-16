import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: () => import('../views/Login.vue'),
    name: "login"
  },
  {
    path: "/layout",
    component: () => import('../views/Layout.vue'),
    name: "laylout",
    children: [
      {
        "path": "/home",
        "name": "home",
        component: () => import('../views/dashboard/Home.vue'),
      },
      {
        "path": "/user",
        "name": "user",
        component: () => import('../views/auth/User.vue'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
