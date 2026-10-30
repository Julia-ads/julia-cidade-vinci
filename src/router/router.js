import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/carro',
        name: 'car',
        component: CarView
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router