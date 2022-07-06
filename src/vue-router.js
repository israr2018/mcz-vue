
import { createWebHashHistory, createRouter } from 'vue-router'
//import AuthLayout from './layouts/AuthLayout'
import Login from './views/Login'
import Home from './views/Home'
import NewCarAd from './views/NewCarAd'
import UploadCSV from './views/upload_csv'
import NewCarAdWizard from './views/NewCarAdWizard'
// import  PersonalDemo from './views/steps/personal'
// import  SeatDemo from './views/steps/seat'
// import  PaymentDemo from './views/steps/payment'
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
            path:'/new-ad',
            name:'new-ad',
            component:NewCarAdWizard,
        },
        {
            path:'/post-car-ad',
            name:'post-car-ad',
            component:NewCarAd,
        },
        {
            path:'/upload-csv',
            name:'upload-csv',
            component:UploadCSV,
        },
        {
            path: '/steps',
            component: () => import('./views/steps/steps.vue'),
            children: [{
                path: '',
                component: () => import('./views/steps/personal.vue')
            },
            {
                path: '/steps/seat',
                component: () => import('./views/steps/seat.vue')
            },
            {
                path: '/steps/payment',
                component: () => import('./views/steps/payment.vue')
            }
            ]
        },
       
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;
