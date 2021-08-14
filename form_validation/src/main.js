import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { VuelidatePlugin } from '@vuelidate/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)
app.use(VuelidatePlugin)
app.use(router)

app.mount('#app')
