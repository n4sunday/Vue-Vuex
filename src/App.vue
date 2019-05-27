<template>
  <div id="app">
    <h1>Nattapon</h1>
    <Food />
    <Sport />
    <Display />
  </div>
</template>

<script>
import Food from './components/Food'
import Sport from './components/Sport'
import Display from './components/Display'
import {store} from './store/store'

export default {
  name: 'app',
  store,
  components: {
    Food,
    Sport,
    Display,
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
  margin-top: 60px;
}
</style>
