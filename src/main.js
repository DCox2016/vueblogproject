import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import './assets/main.css'
import Edit from '@/views/Edit.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/edit', name: 'Edit', component: Edit}
    ]
})

createApp(App)
.use(router)
.mount('#app')
