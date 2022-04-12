<template>
  <div class="loading" v-if="loading">
    <div class="internal">
      <b-spinner variant="success" label="Loading..."> </b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style  scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(20, 25, 34, 0.74);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
