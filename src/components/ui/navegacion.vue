<template>
  <div>
    <b-navbar type="dark" variant="dark" class="px-4">
      <div @click="goToHome" class="d-flex align-items-end home">
        <renderIcon icon="crypto" />
        <h2 class="title ml-2">CryptoStatistics</h2>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import RenderIcon from "../renderIcon.vue";
export default {
  components: {
    RenderIcon,
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>


<style >
.home {
  cursor: pointer;
}
.title {
  color: white !important;
  margin: 0;
}
</style>

