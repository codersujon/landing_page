import { createRouter, createWebHistory } from 'vue-router'

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