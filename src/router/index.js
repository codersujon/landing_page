import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import MasterApp from "@/views/MasterApp.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MasterApp
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router