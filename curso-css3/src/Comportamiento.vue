<template>
  <div>
    <h2>Comportamiento Cajas</h2>

    <h3> BLOCK </h3>
    <div class="block">caja1</div>
    <div class="block">caja2</div>
    <div class="block">caja3</div>
    <div class="block">caja4</div>
    <div class="block">caja5</div>
    <div class="block">caja6</div>
    <div class="block">caja7</div>

    <hr>


    <h3> INLINE </h3>
    <p>no se ponen debajo(no se adapta) si haces la ventana mas pequeña </p>
    <div class="inline">caja1</div>
    <div class="inline">caja2</div>
    <div class="inline">caja3</div>
    <div class="inline">caja4</div>
    <div class="inline">caja5</div>
    <div class="inline">caja6</div>
    <div class="inline">caja7</div>

    <hr>


    <h3> INLINE-BLOCK </h3>
    <p>No se adapta al tamaño de pantalla</p>
    <div class="inlineB">caja1</div>
    <div class="inlineB">caja2</div>
    <div class="inlineB">caja3</div>
    <div class="inlineB">caja4</div>
    <div class="inlineB">caja5</div>
    <div class="inlineB">caja6</div>
    <div class="inlineB">caja7</div>


    <hr>

    <h3> TABLE   -   TABLE-ROW    -    TABLE-CELL </h3>
    <p>Una tabla hecha solo con CSS, cada celda es del mismo tamaño y todo se adapta </p>
    <div class="cajaT">caja1</div>
    <div class="cajaT">caja2</div>
    <div class="cajaT">caja3</div>
    <div class="cajaT">caja4</div>
    <div class="cajaT">caja5</div>
    <div class="cajaT">caja6</div>
    <div class="cajaT">caja7</div>
    <div class="tabla">
      <div class="fila">
        <div class="celda">celda1</div>
        <div class="celda">celda2</div>
        <div class="celda">celda3</div>
        <div class="celda">celda4</div>
        <div class="celda">celda5</div>
        <div class="celda">celda6</div>
        <div class="celda">celda7</div>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'comportamiento',
  rdata (){
    return{

    }
  }
}

</script>

<style>
/*
  === display ===
  block / inline / inline-block / none / table / table-row / table-cell
*/
  .block{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 100px;
    display: block;
  }

  .inline{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 100px;
    display: inline;
  }

  .inlineB{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 100px;
    display: inline-block;
  }

  .cajaT{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 100px;
    display: none;
  }

  .tabla{
    display: table;
    width: 100%;
  }

  .fila{
    display: table-row;
  }

  .celda{
    display: table-cell;
  }

</style>
