import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { GStore } from './store'

import BaseDialog from './components/BaseDialog.vue'
import Modal from './components/Modal.vue'

import './assets/css/reset.css'
import './assets/css/color-themes.css'
import './assets/css/base.css'
import './assets/css/form.css'
import './assets/css/print.css'

import firebaseApp from '@/firebase/config.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(firebaseApp)

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.component('base-dialog', BaseDialog)
    app.component('modal', Modal)
    app.provide('GStore', GStore)
    app.mount('#app')
  }
})
