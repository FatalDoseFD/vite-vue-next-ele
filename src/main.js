import { createApp } from 'vue'
import { router } from './router/index'
import App from './App.vue'
import 'nprogress/nprogress.css'
const app = createApp(App)

app.use(router).mount('#app')
