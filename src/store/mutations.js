/* eslint-disable no-param-reassign */

import { LOGIN, LOGOUT, STATUS, DRAWDATALIST, NAVITEMS, BUSNAME, BUSCODE, BUSPARAMNAME, BUSPARAMID, MENU, ROLEID, DRAWER_OPENED } from './mutations-type';

export default {
  [LOGIN](state, username) {
    state.username = username;
  },
  [LOGOUT](state) {
    state.username = null;
  },
  [STATUS](state, val) {
    state.dashboard = val;
  },
  [DRAWDATALIST](state, val) {
    state.drawDataList = val;
  },
  [NAVITEMS](state, val) {
    state.navItems = val;
  },
  [BUSNAME](state, val) {
    state.busName = val;
  },
  [BUSCODE](state, val) {
    state.busCode = val;
  },
  [BUSPARAMNAME](state, val) {
    state.busParamName = val;
  },
  [BUSPARAMID](state, val) {
    state.busParamId = val;
  },
  [MENU](state, val) {
    state.menu = val;
  },
  [ROLEID](state, val) {
    state.roleId = val;
  },
  [DRAWER_OPENED](state, open) {
    state.drawerOpened = open;
  },
};
