import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import GetStarted from '@/pages/GetStarted.vue';
import Editor from '@/pages/Editor.vue';
import Admin from '@/pages/Admin.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import { authGuard } from '@/utils/authGuard.js';

import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/getstarted', name: 'GetStarted', component: GetStarted },
    { path: '/editor', name: 'Editor', component: Editor, beforeEnter: (to, from, next) => authGuard(to, from, next, store) },
    { path: '/admin', name: 'Admin', component: Admin, beforeEnter: (to, from, next) => authGuard(to, from, next, store) },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
