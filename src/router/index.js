import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactList',
    component: () => import('../views/ContactList.vue')
  },
  {
    path: '/fields',
    name: 'Fields',
    component: () => import('../views/Fields.vue')
  },
  {
    path: '/contacts/create',
    name: 'ContactCreate',
    component: () => import('../views/ContactEdit.vue')
  },
  {
    path: '/contacts/:id/edit',
    name: 'ContactEdit',
    component: () => import('../views/ContactEdit.vue')
  },
  {
    path: '/contacts/:id',
    name: 'ContactItem',
    component: () => import('../views/ContactItem.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
