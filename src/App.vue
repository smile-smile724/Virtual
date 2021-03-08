<template>
  <div id="app">
    <mune v-if="$route.meta.keepAlive==2"></mune>
    <top v-if="$route.meta.keepAlive==2||$route.meta.keepAlive==3"></top>
    <!-- Body -->
    <router-view></router-view>
  </div>
</template>

<script>
import top from "./components/top"
import mune from "./components/mune"
export default {
  name: 'App',
  components:{
    mune:mune,
    top:top
  },
  mounted:function(){
  }
}
</script>

<style>
html{
    height: 100%;
    width: 100%;
    min-width:1000px;
    background: rgb(240,243,247);
    overflow-y: hidden;
}
body{
    height: 100%;
    margin:0;
}
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
