<template>
  <img
    v-if="icon"
    :width="size"
    contain
    :src="require(`@/assets/icons/${icon}.svg`)"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 45,
    },
  },
};
</script>

<style></style>
