
import { createWebHashHistory, createRouter } from 'vue-router'
//import AuthLayout from './layouts/AuthLayout'
import Login from './views/Login'
import Home from './views/Home'
import NewCarAd from './views/NewCarAd'
const routes= [
       
        {
            path:'/login',
            name:'login',
            component:Login,
        },
        {
            path:'/home',
            name:'home',
            component:Home,
        },
        {
            path:'/post-car-ad',
            name:'post-car-ad',
            component:NewCarAd,
        }
       
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;
