<template>
  <div id="app">
    <img class="gold" alt="Vue logo" src="./assets/gold.png">
    <FindGold msg="Ninja Gold"/>   
  </div>  
</template>

<script>
import FindGold from './components/FindGold.vue'


export default {
  
  components: {
    FindGold
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: green;
  

}
</style>
