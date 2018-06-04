<template>
  <div>
    <h2>Selecionar texto(activar o desactivar)</h2>

    <p class="parrafo">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur
      abmaioris, quae pariatur, sequi facilis aperiam quos aechitecto nobis nulla
      omnis, nihil sunt cumque, animi a dolor dolore commodi!
    </p>
  </div>
</template>

<script>
export default{
  name: 'seleccion',
  data (){
    return{

    }
  }
}
</script>

<style>

/*
  ======= user-select =======
  auto / none
*/

.parrafo{
  font-size: 27px;
  -webkit-user-select: none;
  -moz-user-select: none;   /*en firefox */
  -ms-user-select: none; /* explorer */
  -o-user-select: none; /* opera */
}
</style>
