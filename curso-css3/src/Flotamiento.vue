<template>
  <div>
    <h2>Flotamiento</h2>
    <h3> LEFT </h3
    <p> los ocloca seguidos a la izquierda, se adapta si no hay espacio </p>
    <div>
        <div class="caja_flotamiento">caja1</div>
        <div class="caja_flotamiento">caja2</div>
        <div class="caja_flotamiento">caja3</div>
        <div class="caja_flotamiento">caja4</div>
    </div>

    <hr>
    <div id="div"></div>
    <div>
      <h3> RIGHT </h3>
      <p> los ocloca seguidos a la derecha, se adapta si no hay espacio </p>
    </div>
    <div>
        <div class="caja_flotamiento2">caja1</div>
        <div class="caja_flotamiento2">caja2</div>
        <div class="caja_flotamiento2">caja3</div>
        <div class="caja_flotamiento2">caja4</div>
    </div>
  </div>

</template>

<script>
export default{
  name: 'flotamiento',
  data () {
    return{

    }
  }
}
</script>


<style>

  .caja_flotamiento{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 300px;
    float: left;
  }

  .caja_flotamiento2{
    background-color: #333;
    color: #fff;
    border: 1px solid #E1E1E1;
    width: 300px;
    float: right;
  }
/* LIMPIAR FLOTAMIENTO */
  #div{
    clear: both;
  }
</style>
