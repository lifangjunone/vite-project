import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/Dashboard.vue';
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: HelloWorld, name: 'helloworld' },
    { path: '/dashboard', component: Dashboard, name: 'dashboard' }
    ];
    
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router