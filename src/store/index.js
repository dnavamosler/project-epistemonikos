import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    changeLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    changeLoading({ commit }, payload) {
      commit("changeLoading", payload);
    },
  },
  modules: {},
  getters: {},
});
