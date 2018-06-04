<!--
 para no perder el tiempo con la api,
 cojo una de una web de testistin, los restaurantes seran albunes

-->
<template>
    <div>
      
      <ul id="restaurantes-list" v-if="restaurantes != null"> 
        <li v-for="restaurante in restaurantes">
          <strong>{{restaurante.nombre}}</strong>
          <p>
            <router-link :to="{name: 'restaurante', params:{id: restaurante._id}}">Ver</router-link>
            <router-link :to="{name: 'editar-restaurante', params:{id: restaurante._id}}">Editar</router-link>
            <span v-if="showBorrar != restaurante._id">
              <a @click="borrarRestaurante(restaurante._id)" style="cursor:pointer;">Eliminar</a>
            </span>
            <span v-else>
              <p>¿Estas seguro de querer borrarlo?</p>
              <button @click="cancelarBorrado()">Cancelar</button>
              <button @click="confirmarBorrado(restaurante._id)">Borrar</button>
            </span>
          </p>
        </li>
      </ul>
      <span v-else> Cargando restaurantes...</span>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'restaurantes-list',
  mounted(){
    this.getRestaurantes();
   
  },
  data () {
    return {
      texto: 'Pagina Restaurantes LIST',
      restaurantes: null,
      showBorrar: null
    }
  },
  methods:{
    getRestaurantes(){
      axios.get('http://localhost:3800/api/restaurantes')
            .then((respuesta) => {
              this.restaurantes = respuesta.data.restaurant;
               
            });
    },
    borrarRestaurante(id){
      this.showBorrar = id;
    },

    cancelarBorrado(){
      this.showBorrar = null;
    },

    confirmarBorrado(id){
        axios.delete('http://localhost:3800/api/delete/'+id).then((respuesta)=>{
           this.showBorrar = null;
           this.getRestaurantes();                  
          
      
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