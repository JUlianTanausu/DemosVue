<template>
    <h2>Esto es la {{texto}} : {{id_restaurante}}</h2>
</template>

<script>
export default {
  name: 'restaurante-top',
  mounted(){
      this.id_restaurante = this.$route.params._id;
  },
  data () {
    return {
      texto: 'Pagina Restaurante Destacado',
      id_restaurante: null
    }
  }
}
</script>