<template>
  <div>
    <h2>Cambiar Cursor</h2>

    <a href="index.html" class="enlace">Inicio</a>
    <button class="boton">Boton</button>

    <p>help / pointer / text / copy / move / no-drop / wait / progress</p>

  </div>
</template>

<script>
export default{
  name: 'cursor',
  data (){
    return{

    }
  }
}

</script>

<style>
/*
      ======== CURSOR ==========
      help / pointer / text / copy / move / no-drop / wait / progress

*/

.enlace{
  font-size: 27px;
  cursor: help;
}

.boton{
  font-size: 20px;
  cursor: copy;
}
</style>
