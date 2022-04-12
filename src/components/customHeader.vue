<template>
  <div class="mb-4">
    <h3
      style="text-align: start; font-weight: bold; gap: 4px"
      class="d-flex align-items-end"
    >
      <render-icon :icon="icon" v-if="icon" />
      <span>{{ title }}</span>
    </h3>
  </div>
</template>

<script>
import RenderIcon from "./render-icon.vue";
export default {
  components: {
    RenderIcon,
  },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>