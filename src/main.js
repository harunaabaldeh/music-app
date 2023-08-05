import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

import './assets/base.css'
import './assets/main.css'

let app

//initialize firbase first before the vue instance in create
auth.onAuthStateChanged(() => {
  //if there was no vue instance initialize we create one
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
