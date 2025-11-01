import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Advertising from './pages/Advertising.vue';
import NewbizOrganic from './pages/NewbizOrganic.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/advertising', component: Advertising },
    { path: '/newbiz-organic', component: NewbizOrganic },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.use(router);
    app.mount('#app');
});
