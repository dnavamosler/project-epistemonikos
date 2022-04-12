<template>
  <template-page :back="true" icon="cryptocurrencies" title="Detail of Crypto">
    <b-row class="mb-5">
      <b-col cols="12"> <detail-coin :data="detail" /></b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <custom-header
          icon="historical"
          :title="`Historical Data for ${detail.name}`"
      /></b-col>
      <b-col cols="12">
        <b-table
          id="coin-detail"
          small
          striped
          hover
          :items="historyFormated"
          :fields="fields"
        >
        </b-table>
      </b-col>
    </b-row>
  </template-page>
</template>

<script>
import moment from "moment";
import { MakeRequest } from "@/utils/makeRequest";
import { NumericToDollar } from "@/utils/NumericToDollar";
import customHeader from "@/components/customHeader.vue";
import DetailCoin from "./detail-coin.vue";
import TemplatePage from "@/components/ui/templatePage.vue";
import { mapActions } from "vuex";
export default {
  components: { customHeader, DetailCoin, TemplatePage },
  data() {
    return {
      /* Placeholder of detail */
      detail: {
        name: "Crypto",
        symbol: "Crypto",
        rank: 0,
        type: "N/A",
        description: "N/A",
        proof_type: "N/A",
      },
      history: [],
      fields: [
        { label: "Date", key: "date" },
        { label: "Open*", key: "open" },
        { label: "High", key: "high" },
        { label: "Low", key: "low" },
        { label: "Close**", key: "close" },
        { label: "Volume", key: "volume" },
        { label: "Market Cap", key: "market_cap" },
      ],
    };
  },
  mounted() {
    /* Query for get all data */
    this.getAllData();
  },
  computed: {
    /* Get idCoin */
    coinId() {
      return this.$route.params.id;
    },

    /* Format historical data of crypto */
    historyFormated() {
      return this.history
        .map((element) => {
          return {
            ...element,
            date: moment(element.time_open).format("L"),
            open: NumericToDollar(element.open),
            high: NumericToDollar(element.high),
            low: NumericToDollar(element.low),
            close: NumericToDollar(element.close),
            volume: NumericToDollar(element.volume),
            market_cap: NumericToDollar(element.market_cap),
          };
        })
        .reverse();
    },
  },
  methods: {
    /* group queries */
    async getAllData() {
      await this.getHistory();
      await this.getDetailCoin();
    },
    /* Query 1------> Get historical data */
    async getHistory() {
      MakeRequest({
        path: `coins/${this.coinId}/ohlcv/historical?start=${moment()
          .subtract(7, "days")
          .format("YYYY-MM-DD")}&end=${moment().format("YYYY-MM-DD")}`,
      }).then((e) => {
        this.history = e;
      });
    },
    /* Query 2------> Get Detail Coin */
    async getDetailCoin() {
      MakeRequest({
        path: `coins/${this.coinId}`,
      }).then((e) => {
        this.detail = {
          name: e.name,
          symbol: e.symbol,
          rank: e.rank,
          type: e.type,
          description: e.description || "N/A",
          proof_type: e.proof_type || "N/A",
        };
      });
    },
  },
};
</script>

<style>
</style>