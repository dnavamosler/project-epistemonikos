<template>
  <div class="detail-crypto">
    <div class="d-flex align-items-center list-info">
      <h2 class="font-weight-bold">
        {{ data.name }}
      </h2>
      <b-badge variant="secondary">{{ data.symbol }}</b-badge>
    </div>
    <div class="d-flex list-info mb-4">
      <b-badge variant="dark">Rank #{{ data.rank }}</b-badge>
      <b-badge variant="secondary">{{ data.type }}</b-badge>
    </div>
    <div>
      <show-label label="Proof type">{{ data.proof_type }}</show-label>
      <show-label label="Description">{{ data.description }}</show-label>
    </div>
  </div>
</template>

<script>
import showLabel from "../../components/showLabel.vue";
export default {
  components: { showLabel },
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
.list-info {
  gap: 4px;
}
</style>