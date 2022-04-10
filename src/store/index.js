import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataGames: [],
    opinions: [],
  },
  getters: {},
  mutations: {
    SET_GAMES(state, payload) {
      state.dataGames = payload;
    },
    SET_OPINION(state, payload) {
      state.opinions.push(payload);
    },
    DELETE_OPINION(state, payload) {
      state.opinions.splice(payload, 1);
    },
    EDIT_OPINION(state, payload) {
      state.opinions[payload.identifier].name = payload.name;
      state.opinions[payload.identifier].opinion = payload.opinion;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await fetch("./games.json");
        const data = await response.json();
        commit("SET_GAMES", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
