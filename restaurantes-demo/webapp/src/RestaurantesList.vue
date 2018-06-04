<template>
  <div>
    <ul id="restaurantes-list" v-if="restaurantes != null">
      <li v-for="restaurante in restaurantes">
        <strong>{{restaurante.nombre}}</strong>
        <p>
          <router-link :to="{name: 'restaurante', params:{id: restaurante._id}}">Ver</router-link>
          <router-link :to="{name: 'editar-restaurante', params:{id: restaurante._id}}">Editar</router-link>
        </p>
      </li>
    </ul>
    <span v-else>Cargando restaurantes...</span>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  name: 'restaurantes-list',
  mounted() {
    this.getRestaurantes();

  },
  data (){
    return{
      texto: 'Pagina Restaurantes List',
      restaurantes: null
    }
  },
  methods: {
    getRestaurantes() {
      axios.get('http://localhost:3800/api/restaurantes').then((respuesta)=>{
        this.restaurantes = respuesta.data.restaurant;
      });
    }
  }
}
</script>

<style lang="scss">
  #restaurantes-list{
    padding: 5px;
    li{
      margin-top: 10px;
      width: 30%;
      height: 120px;
      border: 1px solid #ddd;
      background: #eee;
      padding: 20px;
      overflow: hidden;
    }
  }
</style>
