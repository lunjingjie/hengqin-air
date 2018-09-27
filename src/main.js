import Vue from 'vue';
import '@/style.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'mdi/css/materialdesignicons.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Vuetify from 'vuetify/dist/vuetify.min';
import 'vuetify/dist/vuetify.min.css';

import App from '@/App';
import router from '@/router';
import store from '@/store';

Vue.use(Vuetify, {
  theme: {
    primary: '#292961',
    secondary: '#2196F3',
    error: '#b71c1c',
    timeline: '#2196F3',
    btnColor: '#d1d1f0',
    loginBtn: '#2C61A5',
    dark: '#90CAF9',
    rank1: '#F54545',
    rank2: '#FF8547',
    rank3: '#FFAC38',
  },
});

Vue.config.productionTip = false;

/* router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('expire') < new Date().getTime()) {
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (to.name === 'Login') {
    next({ name: 'Current' });
  } else {
    next();
  }
}); */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {},
  render: h => h(App),
});
