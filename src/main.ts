import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import { createPinia } from 'pinia'
import elementPlus from 'element-plus'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(elementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
