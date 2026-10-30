import { createRouter, createWebHistory } from 'vue-router'
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
    history: createWebHistory(),
    routes
})

export default router