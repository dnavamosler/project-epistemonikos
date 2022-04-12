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
        >
          <template #cell(symbol)="{ item }">
            <div class="d-flex justify-content-center">
              <b-button
                style="width: 150px"
                size="sm"
                small
                @click="(e) => goDetail(item.id)"
                variant="outline-info"
                >🔎 <span class="font-weight-bold">{{ item.symbol }}</span>
              </b-button>
            </div>
          </template>
        </b-table>
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
      perPage: 15 /* Change this to show another value of rows */,
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
    /* return te current page */
    currentPage() {
      return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
    },
    /* return the rows count */
    rows() {
      return this.coins.length;
    },
    /* Use the utils @paginate for paginate all coins in chunks */
    paginateCoins() {
      return paginate(this.perPage, this.coins)[this.currentPage - 1];
    },
  },
  methods: {
    /* Change route to detail [COIN] */
    goDetail(coin) {
      this.$router.push(`/coin/${coin}`);
    },
    /* Change current page for the new one */
    changePage(page) {
      const currentPath = this.$route.path;
      this.$router.push({
        path: currentPath,
        query: {
          page,
        },
      });
    },
    /* Consume API to get the initial coins data... 
    needs processing for pagination since the api does not have pagination */
    async getInitialData() {
      MakeRequest({ path: "coins" }).then((e) => {
        console.log(e);
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

<style scoped>
</style>