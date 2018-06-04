<template>

  <div id="app">
      <router-link to="/home">Home</router-link>
    <hr>
    <img src="./assets/logo.png"></img>

    <h1>{{ msg }}</h1>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Practicas de CSS3'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: left;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
