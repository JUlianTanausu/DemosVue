<template>
  <div>
    <h2>Transacciones</h2>
    <div class="caja"></div>
    <form action="">
      <input type="text" placeholder="nombre">
      <input type="text" placeholder="apellido">
      <button>Enviar</button>
    </form>



    <hr/>
    <h3>ROTATE</h3>
    <img src="./assets/img/calavera.jpg" alt="" id="imagen">


    <hr/>
    <h3>TRANSLATE</h3>
    <img src="./assets/img/calavera.jpg" alt="" id="imagen2">


    <hr/>
    <h3>SCALE</h3>
    <img src="./assets/img/calavera.jpg" alt="" id="imagen3">


    <hr/>
    <h3>SKEW</h3>
    <img src="./assets/img/calavera.jpg" alt="" id="imagen4">
  </div>
</template>

<script>
export default{
  name: 'transacciones',
  data (){
    return{

    }
  }
}
</script>

<style>
    /*
      == transition-property ==
      Especifica el nombre o nombres de las propiedades CSS a las que deberían
      aplicarse las transacciones

      == transition-duration ==
      Especifica la duración en la que sucederán las transacciones

      == transition-timing-function ==
      Especifica la curva cúbica bézier que se usa para definir cómo se computan
      los valores intermedios para las propiedades.
      (Linear, ease, ease-in, ease-out, ease-in-out)

      == transition-delay ==   retardo en segundos
      Define el tiempo de espera entre el momento en que se cambia una propiedad
      y el inicio de la transicion

    */

.caja{
  width: 200px;
  height: 200px;
  background-color: blue;
  margin: 0 auto;
  transition-property: all;
  transition-duration: 2s;
  transition-timing-function: ease;
}


.caja:hover{
  background-color: darkred;
}




/*  ------------------- ROTATE  ------------ */

/*
  -> 2D
  === transform: rotate() ===

  -> 3D
  === transform: rotateX() ===
  === transform: rotateY() ===
  === transform: rotateZ() ===

  UNIDADES DE medida
  -------------------
  deg -> grados
  turn -> giros 0-1
  grad -> gradianes
  rad -> radianes

  === transform-origin: x y ===
  Palabras clave -> right, left, top, bottom, center
  Unidades de mediada -> px, em, rem... etc

*/

#imagen{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}

#imagen:hover{
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);      /* asi pa todos los navegadores */
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}


/*  ------------------- TRANSLATE  ------------

/*
=== transform: translate(X, Y) ===
=== transform: translateX() ===
=== transform: translateY() ===
=== transform: translateZ() ===


UNIDADES DE medida
-------------------
px, em, rem, %, pc, pt, etc


=== transform-origin: x y ===
Palabras clave -> right, left, top, bottom, center
Unidades de medida -> px, em, rem...etc

*/

#imagen2{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}

#imagen2:hover{
  transform: translate(45px, 10px);
}


/*  ------------------- SCALE  ------------ */

/*
    === transform: scale(X, Y) ===
      -> En ambos sentidos un solo valor
    === transform: scaleX(x) ===
    === transform: scaleY(y) ===

*/
#imagen3{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}

#imagen3:hover{
  transform: scale(0.5, 0.5);
}


/*  ------------------- SKEW  ------------ */
/*
    === transform: skew(X, Y) ===
      -> En ambos sentidos un solo valor
    === transform: skewX(x) ===
    === transform: skewY(y) ===


    deg -> grados
*/

#imagen4{
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: block;
}

#imagen4:hover{
  transform: skew(5deg,5deg);
}
</style>
