<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-table
          id="coins"
          small
          striped
          hover
          :items="paginateCoins"
          :fields="fields"
        ></b-table>
      </b-col>
      <b-col class="d-flex justify-content-center" cols="12">
        <b-pagination
          :value="currentPage"
          @change="changePage"
          :total-rows="rows"
          :per-page="15"
          aria-controls="coins"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { paginate } from "@/utils/paginate";
import { MakeRequest } from "@/utils/makeRequest";
export default {
  components: {},
  mounted() {
    this.getInitialData();
  },
  data() {
    return {
      perPage: 15,
      coins: [],
      fields: [
        { label: "Symbol", key: "symbol" },
        { label: "Name", key: "name" },
        { label: "Rank", key: "rank" },
        { label: "¿Is new?", key: "is_new" },
        { label: "¿Is Active?", key: "is_active" },
        { label: "Type", key: "type" },
      ],
    };
  },
  computed: {
    currentPage() {
      return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
    },
    rows() {
      return this.coins.length;
    },
    paginateCoins() {
      return paginate(this.perPage, this.coins)[this.currentPage - 1];
    },
  },
  methods: {
    changePage(page) {
      const currentPath = this.$route.path;

      this.$router.push({
        path: currentPath,
        query: {
          page,
        },
      });
    },
    async getInitialData() {
      MakeRequest({ path: "coins" }).then((e) => {
        this.coins = e.map((coin) => {
          return {
            ...coin,
            is_new: coin.isNew ? "✅" : "❌",
            is_active: coin.is_active ? "✅" : "❌",
          };
        });
      });
    },
  },
};
</script>

<style>
</style>