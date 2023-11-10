import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'defaultLayout',
            component: () => import('@/components/DefaultLayout.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/Home/HomeView.vue'),
                    children: [
                        {
                            path: '',
                            name: 'homePage',
                            component: () => import('@/views/Home/HomePage.vue'),
                        },
                        {
                            path: ':id',
                            name: 'homeDetail',
                            component: () => import('@/views/Home/HomeDetailView.vue'),
                            props: true
                        },
                    ]
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/About/AboutView.vue'),
                    children: [
                        {
                            path: '',
                            name: 'aboutPage',
                            component: () => import('../views/About/AboutPage.vue'),
                        },
                        {
                            path: ':id',
                            name: 'aboutDetail',
                            component: () => import('@/views/About/AboutDetailView.vue'),
                            props: true
                        },
                    ]
                }
            ]
        }
    ]
})

export default router
