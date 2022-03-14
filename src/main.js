import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


const app = createApp(App)
app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')