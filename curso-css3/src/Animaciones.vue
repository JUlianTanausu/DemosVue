<template>
  <div>
    <h2>Animaciones</h2>

    <div class="cajaAnimacion"></div>
</div>
</template>

<script>
export default{
  name: 'animaciones',
  data (){
    return{

    }
  }
}
</script>

<style>
/*
  === PROPIEDADES ===
  -> animation-name: nombre;
  -> animation-duration: 0s;
  -> animation-timing-function:
      (Linear, ease, ease-in, ease-out, ease-in-out);
  -> animation-delay: 0s;
  -> animation-iteration-count: 1; (infinite)
  -> animation-direction:
      (normal, reverse, alternate, alternate-reverse);


  === NOTACION CORTA ===
  animation: nombre / duration / timing / delay / iteration / direction

*/

.cajaAnimacion{
  width: 100px;
  height: 100px;
  background-color: darkred;
  animation-name: div;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: 3;
  animation-direction: normal;
}



@-webkit-keyframes div{
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(100px);
  }
}
</style>
