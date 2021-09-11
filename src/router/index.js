import { createWebHashHistory, createRouter } from 'vue-router';

const App = () => import('../pages/home/index.vue');
const router = createRouter({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: App,
      meta:{
          keepLive:false,
          canBack:false,
          title:"ele",
          fullScreen:false
      }
    },
    {
      path: '/login',
      component: ()=>import("../pages/login/index.vue"),
      name:"login",
      meta:{
        keepLive:false,
        canBack:true,
        title:"密码登录",
        fullScreen:false
      }
    },
  ],
  history: createWebHashHistory(),
});

export { router };
