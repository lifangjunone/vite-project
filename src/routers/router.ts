import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../components/Dashboard.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login, name: "login" },
  { path: "/dashboard", component: Dashboard, name: "dashboard" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
