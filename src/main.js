import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message';
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faSearch, faHeart, faHeartbeat, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
require('vue-flash-message/dist/vue-flash-message.min.css');

library.add(faCheckCircle, faSearch, faHeart, faHeartbeat, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.prototype.$url = 'https://pokeapi.co/api/v2/'

Vue.use(VueFlashMessage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
