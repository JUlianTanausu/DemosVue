<template>
  <div>
    <h2 class="sombra"> Sombra en texto </h2>
    <div>
      <p class="caja2"></p>
    </div>
</div>
</template>


<script>
export default{
  name: 'sombras',
  data () {
    return{

    }
  }
}
</script>


<style>

  .sombra{
    text-align: center;
    font-size: 40px;
    color: gray;
    text-shadow: 3px 4px 7px blue;
  }

  .caja2{
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 70px;
    border: 1px solid #E1E1E1;
    box-shadow: 3px 2px 1px 7px red;
  }
</style>
