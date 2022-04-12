<template>
  <div class="d-flex flex-column mb-3">
    <span class="font-weight-bold">{{ label }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
};
</script>

<style>
</style>