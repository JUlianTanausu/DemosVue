<template>
  <div>
    <ul>
      <li><router-link to="/selectores">Selectores</router-link></li>
      <li><router-link to="/sombras">Sombras</router-link></li>
      <li><router-link to="/comportamiento">Comportamiento</router-link></li>
      <li><router-link to="/flotamiento">Flotamiento</router-link></li>
      <li><router-link to="/posicionamiento">Posicionamiento</router-link></li>
      <li><router-link to="/overflow">Overflow</router-link></li>
      <li><router-link to="/desactivar">Desactivar Pointer</router-link></li>
      <li><router-link to="/cursor">Cambiar Cursor</router-link></li>
      <li><router-link to="/seleccion">Permitir Seleccion texto</router-link></li>
      <li><router-link to="/pseudoElementos">Pseudo Elementos</router-link></li>
      <li><router-link to="/pseudoClases">Pseudo Clases</router-link></li>
      <li><router-link to="/transacciones">Transacciones</router-link></li>
      <li><router-link to="/animaciones">Animaciones</router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Practicas de CSS3'
    }
  }
}
</script>


<style>


</style>
