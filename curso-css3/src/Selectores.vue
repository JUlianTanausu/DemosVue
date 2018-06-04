<template>
  <div>

    <h2>Selectores - (Atributos)</h2>
    <input type="text" placeholder="Nombre">
    <br><br>
    <input type="date" placeholder="Fecha">
    <br><br>
    <input type="time" placeholder="Hora">
    <br><br>
    <input type="color" placeholder="Color">

    <p class="parrafo rojo">
      Lorem ipsun dolor sit amet, consectetur adipisicing elit.
    </p>

    <p class="verde">
      Lorem ipsun dolor sit amet, consectetur adipisicing elit.
    </p>

    <ul>
      <li lang="es-ES">Español de España</li>
      <li lang="es-SV">Español de El Salvador</li>
      <li lang="es-MX">Español de Mexico</li>
    </ul>



<!--................................................................ -->
    <hr/>
    <h2>Selectores - (Adyacentes)</h2>

    <p>
        Lorem ipsun dolor sit amet, consectetur adipisicing elit. Ipsum,
        nesciunt aut. Eos harum autem earum.
    </p>
    <p>
        Lorem ipsun dolor sit amet, consectetur adipisicing elit. Ipsum,
        nesciunt aut. Eos harum autem earum.
    </p>


    <p>
        Lorem ipsun dolor sit amet, consectetur adipisicing elit. Ipsum,
        nesciunt aut. Eos harum autem earum.
    </p>
    <p>
        Lorem ipsun dolor sit amet, consectetur adipisicing elit. Ipsum,
        nesciunt aut. Eos harum autem earum.
    </p>





</div>
</template>


<script>
export default {
  name: 'selectores',
  data () {
    return {
      msg: 'Practicas de CSS3'
    }
  }
}
</script>


<style>

/*  --------------- ATRIBUTOS  ------------------ */
  .rojo{
    color: red;
  }

  .verde{
    color: green;
  }

  input[type]{
    width: 100%;
  }

  p[class]{
    font-size: 19px;
  }

  p[class="verde"]{
    background-color: lightblue;
  }

  p[class~="rojo"]{
    background-color: orange;
}

  li[lang|="es"]{
    color: blue;
    font-size: 20px;
  }



/*  --------------- ADYACENTES  ------------------ */

p + p{
  color: blue;
}

</style>
