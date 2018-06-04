<template>
  <div>
    <h2>Esto es posicionamiento </h2>

    <h3>RELATIVE</h3>
    <p>Se puede variar su situacion con las otras funciones: yop, left ..</p>

    <div class="padre">
      <div class="hijo"></div>
    </div>


    <hr>

    <h3>ABSOLUTE</h3>
    <p>Si el padre no tiene la propiedad relative, pues no se ubica en torno al padre,
     sino con quien tenga relative</p>

    <div class="padreA">
      <div class="hijoA"></div>
    </div>


  </div>
</template>

<script>
export default{
  name: 'posicionamiento',
  data (){
    return{

    }
  }
}

</script>

<style>
  /*    === position ===
    static  /   relative   / absolute  /  fixed

    fixed coloca en relacion al navegador
  */

  .padre{
    width: 500px;
    height: 500px;
    border: 3px solid #333;
    margin: 0 auto;
    margin-top: 60px;
  }

  .hijo{
    width: 100px;
    height: 100px;
    border: 3px solid #333;
    background-color: lightblue;
    position: relative;
    top: 10px;
    left: 20px;
  }

  /* --------------------- ABSOLUTE  --------------------- */

  .padreA{
    width: 500px;
    height: 500px;
    border: 3px solid #333;
    margin: 0 auto;
    margin-top: 60px;
    /* position: relative;  si le pongo esto ya se ubica en relacion al padre */
  }

  .hijoA{
    width: 100px;
    height: 100px;
    border: 3px solid #333;
    background-color: lightblue;
    position: absolute;
    top: 10px;
    right: 10px;
  }


</style>
