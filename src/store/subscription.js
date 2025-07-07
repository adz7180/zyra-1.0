export default {
  namespaced: true,
  state: {
    plan: 'free',
  },
  mutations: {
    setPlan(state, payload) {
      state.plan = payload;
    },
  },
  actions: {
    updatePlan({ commit }, plan) {
      commit('setPlan', plan);
    },
  },
  getters: {
    currentPlan: (state) => state.plan,
    isPremium: (state) => ['premium', 'company'].includes(state.plan),
    isCompany: (state) => state.plan === 'company',
  },
};
