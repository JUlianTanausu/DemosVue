<template>
  <h2>Esto es la {{texto}} : {{id_restaurante}}</h2>
</template>
<script>
export default{
  name: 'restaurante-top',
  //cuando monta el componente recojo y guardo en una variable el id pasado por el enlace. router link
  mounted(){
    this.id_restaurante = this.$route.params.id;
  },
  data (){
    return{
      texto: 'Pagina Restaurante destacado',
      id_restaurante: null
    }
  }
}
</script>
