import { createApp } from 'vue';
import { router } from './router/index';
import { store } from './store/index'
import { Notify , Field , CellGroup  } from 'vant';
import App from './App.vue';
import 'nprogress/nprogress.css';
import 'vant/lib/index.css';
import './index.css'

const app = createApp(App);

window.$message = Notify


app.use(router).use(store).use(Field).use(CellGroup).mount('#app');
