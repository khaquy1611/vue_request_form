import Vue from 'vue';
import VueRouter from "vue-router";
import Login from '@/pages/Login.vue';
import NotFoundComponent from '../components/NotFound.vue';
import Register from '@/pages/Register.vue';
import ListUser from '@/pages/ListUser/Index.vue';
import Layout from '../layouts/Layouts.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Layout,
        children: [
            {
                path: 'listUser',
                name: 'ListUser',
                component: ListUser
            }
        ]
    },
    {
        path: '/:catchAll(.*)', 
        name: 'NotFound',
        component: NotFoundComponent
    }
   
]


const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;