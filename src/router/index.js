import {createWebHashHistory , createRouter} from 'vue-router'

const App = () => import('../pages/home/index.vue');
const router = createRouter({
    routes:[
        {
            path:'',
            redirect:'/home',
        },
        {
            path:'/home',
            component:App,
        }
    ],
    history:createWebHashHistory()
})

export {router}