<template>
  <b-container>
    <div class="d-flex flex-column">
      <div class="mb-5">
        <div
          style="gap: 4px"
          class="border-bottom pb-1 d-flex justify-content-between"
        >
          <div class="d-flex align-items-center">
            <render-icon v-if="icon" :icon="icon" />
            <h3 class="ml-3 font-weight-bold">{{ title }}</h3>
          </div>
          <div v-if="back" style="cursor: pointer" @click="backFn">
            <render-icon :size="25" icon="back" />
          </div>
        </div>
      </div>
      <slot />
    </div>
  </b-container>
</template>

<script>
import renderIcon from "../renderIcon.vue";
export default {
  components: { renderIcon },
  props: {
    back: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: null,
    },
  },
  methods: {
    backFn() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>