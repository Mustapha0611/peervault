import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Help',
      name: 'Help',
      component: () => import('../views/Help.vue')
    },
    {
      path: '/CreatOrJoin',
      name: 'CreateOrjoin',
      component: () => import('../views/createOrJoin.vue')
    },
    {
      path: '/CreateRoom',
      name: 'CreateRoom',
      component: () => import('../views/createRoom.vue')
    },
    {
      path: '/JoinRoom',
      name: 'JoinRoom',
      
      component: () => import('../views/joinRoom.vue')
    },
    {
      path :'/Room',
      name:'room',
      component: () => import('../views/room.vue')
    }
  ]
})

export default router
