<template>
  <div id="app">
    <loading-state />
    <div class="navigation"><navegacion /></div>
    <div class="py-5">
      <router-view />
    </div>
  </div>
</template>
<script>
import LoadingState from "./components/ui/loadingState.vue";
import navegacion from "./components/ui/navegacion.vue";
export default {
  components: { navegacion, LoadingState },
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


