export default {
  namespaced: true,
  state: {
    currentScene: null,
    savedScenes: [],
  },
  mutations: {
    setCurrentScene(state, payload) {
      state.currentScene = payload;
    },
    saveScene(state, scene) {
      state.savedScenes.push(scene);
    },
    clearScenes(state) {
      state.savedScenes = [];
      state.currentScene = null;
    },
  },
  actions: {
    saveScene({ commit }, scene) {
      commit('saveScene', scene);
    },
    setScene({ commit }, scene) {
      commit('setCurrentScene', scene);
    },
    clearAll({ commit }) {
      commit('clearScenes');
    },
  },
  getters: {
    currentScene: (state) => state.currentScene,
    savedScenes: (state) => state.savedScenes,
  },
};
