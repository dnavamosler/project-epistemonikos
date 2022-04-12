<template>
  <div class="detail-crypto">
    <div>
      <h4>{{ data.name }}</h4>
      <div class="d-flex">
        <b-badge variant="primary">Primary</b-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: "Crypto",
          symbol: "Crypto",
          rank: 0,
          type: "N/A",
          description: "N/A",
          proof_type: "N/A",
        };
      },
    },
  },
};
</script>

<style>
.detail-crypto {
  text-align: left !important;
}
.detail-crypto h4 {
  font-weight: bold;
}
</style>