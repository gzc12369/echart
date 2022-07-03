import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "首页",
        component: () => import('@/view/HelloWorld.vue')
    },
    { path:'/index', redirect:'/' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router