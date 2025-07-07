export default {
  namespaced: true,
  state: {
    user: null,
    isAdmin: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      state.isAdmin = payload?.role === 'admin';
    },
    clearUser(state) {
      state.user = null;
      state.isAdmin = false;
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('clearUser');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    isAdmin: (state) => state.isAdmin,
    user: (state) => state.user,
  },
};
