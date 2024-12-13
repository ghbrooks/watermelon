// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ChatWindow from '@/components/ChatWindow.vue'
import PeopleList from '@/components/PeopleList.vue'

const routes = [
  { path: '/', component: PeopleList },
  { path: '/chat/:id', component: ChatWindow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
