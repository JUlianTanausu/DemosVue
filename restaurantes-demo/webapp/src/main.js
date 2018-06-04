import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Home from './Home.vue';
import Contacto from './Contacto.vue';
import RestauranteTop from './RestauranteTop.vue';
import RestaurantesList from './RestaurantesList.vue';
import Restaurante from './Restaurante.vue';
import RestauranteAdd from './RestauranteAdd.vue';
import RestauranteEdit from './RestauranteEdit.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/contacto', component: Contacto},
  //el name se usa pra despues por router link enviarle parametros
  {path: '/restaurante-destacado/:id', name:'restaurante-destacado', component: RestauranteTop},
  {path: '/restaurante/:id', name:'restaurante', component: Restaurante},
  {path: '/editar-restaurante/:id', name:'editar-restaurante', component: RestauranteEdit},
  {path: '/restaurantes', component: RestaurantesList},
  {path: '/crear-restaurante',name:'crear-restaurante', component: RestauranteAdd}

];

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.component('home', Home);
Vue.component('contacto', Contacto);
Vue.component('restaurante-top', RestauranteTop);
Vue.component('restaurantes-list', RestaurantesList);
Vue.component('restaurante', Restaurante);
Vue.component('restauranteAdd', RestauranteAdd);
Vue.component('restauranteEdit', RestauranteEdit);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
