import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './routes/router.js'
import { store } from './store/store.js'

let app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
