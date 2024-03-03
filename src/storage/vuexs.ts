import { createStore } from "vuex";

export const vuexStore = createStore({
  state() {
    return {
      token: null,
      menu: []
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setMenu(state, menu) {
      state.menu = menu
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getMenu(state) {
      return state.menu
    }
  },
});
