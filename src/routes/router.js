import {createRouter, createWebHistory} from 'vue-router'
import Top from './components/Top.vue'
import Login from './components/Login.vue'
import preRegist from './components/preRegist.vue'
export const router = createRouter ({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Top',
        component: Top,
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/preRegist',
        name: 'regist',
        component: preRegist
      },
    ]
})