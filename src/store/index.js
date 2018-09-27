import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    dashboard: null,
    drawDataList: [],
    navItems: [],
    busName: null,
    busCode: null,
    busParamName: null,
    busParamId: null,
    menu: [],
    roleId: null,
    drawerOpened: window.innerWidth >= 1264,
  },
  actions,
  mutations,
});
