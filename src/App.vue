<template>
  <div id="app">
    <ping/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}


</style>
<script>
  import Ping from "./components/Ping";
  export default {
    components: {Ping}
  }
</script>
