import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/user/Login';
/* BI->站点分析(日/月) */
import StationAnalysis from '@/pages/bi/station_analysis/Analysis';
/* BI->趋势分析 */
import TrendAnalysis from '@/pages/bi/trend_analysis/TrendAnalysis';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/bi/analysis',
      name: 'StationAnalysis',
      component: StationAnalysis,
    },
    {
      path: '/bi/trend',
      name: 'TrendAnalysis',
      component: TrendAnalysis,
    },
  ],
});

