<template>
  <div id="app">
    <div class="navigation"><navegacion /></div>
    <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="py-5">
      <router-view />
    </div>
  </div>
</template>
<script>
import navegacion from "./components/ui/navegacion.vue";
export default {
  components: { navegacion },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
  position: sticky;
  top: 0;
}
</style>


