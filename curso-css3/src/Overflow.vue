<template>
  <div>
    <h2>Overflow</h2>

    <h3>VISIBLE</h3>
    <p> Visible(opcion por defecto), es como no poner nada.
      Lo deja visible el texto se sale del cuadro y esa parte es visible </p>


    <div class="caja">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur
      abmaioris, quae pariatur, sequi facilis aperiam quos aechitecto nobis nulla
      omnis, nihil sunt cumque, animi a dolor dolore commodi!
    </div>


    <hr>


    <h3>HIDDEN</h3>
    <p> El texto que sobresale fuera de la caja lo oculta </p>


    <div class="caja1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur
      abmaioris, quae pariatur, sequi facilis aperiam quos aechitecto nobis nulla
      omnis, nihil sunt cumque, animi a dolor dolore commodi!
    </div>

    <hr>


    <h3>SCROLL</h3>
    <p> Te crea un scrool para que el texto este dentro de la caja</p>


    <div class="caja2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aspernatur
      abmaioris, quae pariatur, sequi facilis aperiam quos aechitecto nobis nulla
      omnis, nihil sunt cumque, animi a dolor dolore commodi!
    </div>
  </div>
</template>


<script>
export default{
  name: 'overflow',
  data(){
    return{

    }
  }
}

</script>

<style>

/*
      ======= Overflow ========
      visible / hidden  / scroll


      ======= Overflow-y ========
      visible / hidden  / scroll



      ======= Overflow-x ========
      visible / hidden  / scroll
*/
  .caja{
    width: 200px;
    height: 200px;
    font-size: 20px;
    border: 2px solid #333;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
    overflow: visible;
    margin-bottom: 3.5cm;
  }


  /* ------------- hidden ---------*/

  .caja1{
    width: 200px;
    height: 200px;
    font-size: 20px;
    border: 2px solid #333;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
    overflow: hidden;
  }

  /* ------------- scroll ---------*/

  .caja2{
    width: 200px;
    height: 200px;
    font-size: 20px;
    border: 2px solid #333;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
    overflow: scroll;
  }

</style>
