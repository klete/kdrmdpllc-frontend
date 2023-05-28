import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '@/views/Welcome.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import Login from '@/views/LogIn.vue'
import Dashboard from '@/views/Dashboard.vue'
import ServicesView from '@/views/ServicesView.vue'
import ServiceView from '@/views/ServiceView.vue'
import AddService from '@/views/AddService.vue'
import EditService from '@/views/EditService.vue'
import DeleteService from '@/views/DeleteService.vue'
import TherapyView from '@/views/TherapyView.vue'
import GuidelineIndexView from '@/views/GuidelineIndexView.vue'
import TargetSystemsView from '@/views/TargetSystemsView.vue'
import ElementsIndexView from '@/views/ElementsIndexView.vue'

import FlashMessageService from '@/services/FlashMessageService'
import firebaseApp from '../firebase/config.js'
import { getAuth } from 'firebase/auth'

const requireAuth = (to) => {
  const auth = getAuth(firebaseApp)
  let user = auth.currentUser

  if (to.meta.requiresAuth && !user) {
    FlashMessageService.setMessage(
      'You must be logged in to access the page you requested.',
    )
    return {
      path: '/login',
      // save the location we were at to come back later
      // query: { redirect: to.fullPath }
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/guidelines',
    name: 'GuidelineIndexView',
    component: GuidelineIndexView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/targetsystems',
    name: 'TargetSystemsView',
    component: TargetSystemsView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/elements',
    name: 'ElementsIndexView',
    component: ElementsIndexView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/services',
    name: 'ServicesView',
    component: ServicesView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/services/add',
    name: 'AddService',
    component: AddService,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
  },
  {
    path: '/service/:id',
    name: 'ServiceView',
    component: ServiceView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: '/service/:id/edit',
    name: 'EditService',
    component: EditService,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: '/service/:id/delete',
    name: 'DeleteService',
    component: DeleteService,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: '/therapy/:id',
    name: 'TherapyView',
    component: TherapyView,
    meta: { requiresAuth: true },
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: '/home',
    redirect: { name: 'Welcome' },
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false },
  },

  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { requiresAuth: false },
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
    meta: { requiresAuth: false },
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Vue Mastery: Touring Vue Router
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router

// if (error.response && error.response.status == 404) {
//   router.push({ name: '404Resource' })
// } else
