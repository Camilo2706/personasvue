// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)

createApp(App).use(router).use(VueSweetalert2).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
