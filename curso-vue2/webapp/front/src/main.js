import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import RestauranteTop from './RestauranteTop.vue'
import RestaurantesList from './RestaurantesList.vue'
import Restaurante from './Restaurante.vue'
import RestauranteAdd from './RestauranteAdd.vue'
import RestauranteEdit from './RestauranteEdit.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/crearRestaurante', name: 'crear-restaurante',component: RestauranteAdd},
  {path: '/restaurante/:id', name: 'restaurante', component: Restaurante},
  {path: '/editar-restaurante/:id', name: 'editar-restaurante', component: RestauranteEdit},
  {path: '/restaurantes', component: RestaurantesList},
  {path: '/restaurante-destacado/:id', name: 'restaurante-destacado', component: RestauranteTop},
  {path: '/contacto', component: Contacto}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
