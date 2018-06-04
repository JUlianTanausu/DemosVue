import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Selectores from './Selectores.vue'
import Home from './Home.vue'
import Sombras from './Sombras.vue'
import Comportamiento from './Comportamiento.vue'
import Flotamiento from './Flotamiento.vue'
import Posicionamiento from './Posicionamiento.vue'
import Overflow from './Overflow'
import DesactivarPointer from './DesactivarPointer'
import CambiarCursor from './CambiarCursor'
import Seleccion from './SeleccionTexto'
import PseudoElementos from './PseudoElementos'
import PseudoClases from './PseudoClases'
import Transacciones from './Transacciones'
import Animaciones from './Animaciones'

Vue.use(VueRouter);


const routes =[
  {path: '/', component: Home},
  {path: '/selectores', component: Selectores},
  {path: '/home', component: Home},
  {path: '/sombras', component: Sombras},
  {path: '/comportamiento', component: Comportamiento},
  {path: '/flotamiento', component: Flotamiento},
  {path: '/posicionamiento', component: Posicionamiento},
  {path: '/overflow', component: Overflow},
  {path: '/desactivar', component: DesactivarPointer},
  {path: '/cursor', component: CambiarCursor},
  {path: '/seleccion', component: Seleccion},
  {path: '/pseudoElementos', component: PseudoElementos},
  {path: '/pseudoClases', component: PseudoClases},
  {path: '/transacciones', component: Transacciones},
  {path: '/animaciones', component: Animaciones}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.component('selectores', Selectores);
Vue.component('home', Home);
Vue.component('sombras', Sombras);
Vue.component('comportamiento', Comportamiento);
Vue.component('flotamiento', Flotamiento);
Vue.component('posicionamiento', Posicionamiento);
Vue.component('overflow', Overflow);
Vue.component('desactrivar', DesactivarPointer);
Vue.component('cursor', CambiarCursor);
Vue.component('seleccion', Seleccion);
Vue.component('pseudoElementos', PseudoElementos);
Vue.component('pseudoClases', PseudoClases);
Vue.component('transacciones', Transacciones);
Vue.component('animaciones', Animaciones);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
