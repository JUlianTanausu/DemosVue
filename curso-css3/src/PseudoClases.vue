<template>
  <div>
    <h2>Pseudo clases de:</h2>
    <p>Se añaden a los selectores y nos permiten añadir estilos según el<br/>
    el estado de los elementos html</p>

    <h3>ENLACE</h3>
      <a class="pseudoEnlace" href="http://www.google.com">Google</a>
      <a class="pseudoEnlace" href="https://www.youtube.com">Youtube</a>
      <a class="pseudoEnlace" href="https://mail.google.com/mail/">Gmail</a>


    <hr/>

    <h3>HIJOS Y  ELEMENTOS MISMO TIPO</h3>
      <ul> <!-- Elemento padre -->
        <li>Hijo 1</li> <!-- hijo 1 -->
        <li>Hijo 2</li>
        <li>Hijo 3</li>
        <li>Hijo 4</li>
        <li>Hijo 5</li>
        <li>Hijo 6</li>
        <li>Hijo 7</li>
      </ul>
      <div>div 1</div>
      <div>div 2</div>
      <div>div 3</div>
      <div>div 4</div>


      <hr/>

      <h3>ELEMENTOS DE FORMULARIOS</h3>
      <input type="text" placeholder="Nombre">
      <input type="text" placeholder="Apellido" disabled="">
      <input type="checkbox" placeholder="opcion">
      <label for="opcion">Seleccionname</label>


      <hr/>
      <h3>RANGO</h3>

      <input type="number" min="7" max="10">


      <hr/>
      <h3>VALIDACION FORMULARIOS</h3>
        <form action="">
          <input class="input-form" type="num" placeholder="DNI" required="">
          <input class="input-form" type="text" placeholder="Nombre">
          <input class="input-form" type="email" placeholder="E-mail">
          <button type="submit">ENVIAR</button>
        </form>


        <hr/>
        <h3>NTH-CHILD Y NTH-LAST-CHILD</h3>
        <table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Procesador</th>
              <th>HDD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HP</td>
              <td>Core i5</td>
              <td>11TB</td>
            </tr>
            <tr>
              <td>SONY</td>
              <td>Core i7</td>
              <td>500Gb</td>
            </tr>
            <tr>
              <td>ACCER</td>
              <td>Core i7</td>
              <td>500Gb</td>
            </tr>
            <tr>
              <td>LENOVO</td>
              <td>Core i7</td>
              <td>500Gb</td>
            </tr>
            <tr>
              <td>packard</td>
              <td>Core i7</td>
              <td>500Gb</td>
            </tr>
            <tr>
              <td>samsung</td>
              <td>Core i7</td>
              <td>500Gb</td>
            </tr>
          </tbody>
        </table>

  </div>
</template>
<script>
export default{
  name: 'pseudoClases',
  data (){
    return{

    }
  }
}
</script>
<style>
/*
  ------------  ENLACE ------------

      == selector:link ==
      Enlaces que no han sido visitados (solo color)

      == selector:visited ==
      Enlaces que han sido visitados (solo color)
*/

.pseudoEnlace{
  font-size: 27px;
}

.pseudoEnlace:link{
  color: red;
}

.pseudoEnlace:visited{
  color: grey;
}

/*
  ------------  HIJOS Y TIPOS ------------
      ===== HIJOS =======
      == selector:first-child ==
      Selecciona el primer elemento hijo de un elemento

      == selector:last-child ==
      Selecciona el ultimo elelemento hijo de un elemento


      ===== TIPOS =======
      == selector:first-of-type ==
      Selecciona el primer elemento del mismo tipo

      == selector:last-child ==
      Selecciona el ultimo elelemento del mismo tipo


ul li:first-child{
  background-color: red;
  color: #fff;
}

ul li:last-child{
  background-color: black;
  color: #fff;
}
*/

/*------------  ELEMENTOS DE FORMULARIOS ------------*/

/*
    === selector:enabled ===
    Cuando el elemento se encuentra habilitado


    === selector:disabled ===
    Cuando el elemento se encuentra deshabilitado

    === selectro:checked ===
    Cuando el elemento se encuentra marcado

*/

input[type="text"]:enabled{
  background-color: blue;
}

input[type="text"]:disabled{
  background-color: yellow;
}

input[type="checkbox"]:checked + label{
  background-color: yellow;
}


/*------------  RANGO ------------*/

/*

    === selector:in-range ===
    CUando el elemento se encuentra en el RANGO

    === selector:out-of-range ===
    Cuando el elemento se encuentra fuera del rango



*/
input[type="number"]{
  margin: 0 auto;
  margin-top: 20px;
  display: block;
}

input[type="number"]:in-range{
  background-color: blue;
  color: white;
}

/*------------  RANGO ------------*/

/*
  == selector:required ==
  Cuando el input es requerido

  == selector:valid ==
  Cuando el formato del input es valid

  == selector:invalid ==
  Cuando el formato del input es invalido


*/

.input-form{
  display:block;
  width: 100%;
  margin: 3px auto;
}

input:required{
  background-color: red;
}

/*------------  nth-child(empieza a contar desde el principio de la tabla) y
nth-last-child(empieza a contar desde el final de la tabla) ------------*/

/*
        valores:
        even -> todos los pares
        odd -> impares
        an+b -> Podemos definir un numero n cantidad de veces

        /*2n+3 -> de 2 en 2 apartir el tercero*/
*/

table tbody tr:nth-child(2){ /* segundo hijo -> HP */
  background-color: red;
  color: white;
}

table tbody tr:nth-child(odd){ /* impares */
  background-color: blue;
  color: white;
}

table tbody tr:nth-child(3n){ /* de 3 en 3*/
  background-color: yellow;
  color: white;
}
</style>
