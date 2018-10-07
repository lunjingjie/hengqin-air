import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/user/Login';
/* BI->站点分析(日/月) */
import StationAnalysis from '@/pages/bi/station_analysis/Analysis';
/* BI->趋势分析 */
import TrendAnalysis from '@/pages/bi/trend_analysis/TrendAnalysis';
/* BI->空气质量统计分析 */
import AirAnalysis from '@/pages/bi/airquality_analysis/AirAnalysis';

/* 实时模块 -> 数值地图 */
import realTimeData from '@/pages/realTime/realTimeData/realTimeData';
/* 实时模块 -> 实时监控表 */
import realTimeDynamic from '@/pages/realTime/realTimeDynamic/realTimeDynamic';

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
    {
      path: '/realTime/realTimeData',
      name: 'realTimeData',
      component: realTimeData,
    },
    {
      path: '/realTime/realTimeDynamic',
      name: 'realTimeDynamic',
      component: realTimeDynamic,
    },
    {
      path: '/bi/quality',
      name: 'AirAnalysis',
      component: AirAnalysis,
    },
  ],
});

