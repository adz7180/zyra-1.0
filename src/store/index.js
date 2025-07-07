import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import subscription from './subscription';
import scenes from './scenes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    subscription,
    scenes,
  },
});
