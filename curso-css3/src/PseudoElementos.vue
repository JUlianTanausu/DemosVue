<template>
  <div>
    <h2>Pseudo Elementos</h2>

    <p class="parrafo">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
      Minima aspernatur abmaioris, quae pariatur, sequi facilis aperiamz<br/>
      quos aechitecto nobis nulla omnis, nihil sunt cumque, animi a <br/>
      dolor dolore commodi!
    </p>

  </div>
</template>

<script>
export default{
  name: 'pseudoElementos',
  data (){
    return{

    }
  }
}
</script>


<style>
/*
    ==== selector::first-line ====
    selecciona la primera linea de un parrafo

    === selector::first-letter ===
    Selecciona la primera letra de un parrafo

    ==== selector::before ====
    Selecciona la parte anterior del Elementos

    === selector::after ====
    Selecciona la parte posterior del Elementos

    === selector::selection ===
    Selecciona el texto que ha seleccionado el usuario

*/

.parrafo{
  font-size: 27px;
}

.parrafo::first-line{
  color: red;
  font-size: 19px;
}

.parrafo::first-letter{
  color: blue;
  font-size: 50px;
}

.parrafo::before{
  content: "Antes ";/* propiedad obligatoria */
  border: 2px solid #000;
}

.parrafo::after{
  content: "Despues"; /* propiedad obligatoria */
}

.parrafo::selection{
  color: yellow;
  background-color: black;
}

</style>
