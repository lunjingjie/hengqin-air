import axios from '@/api/axios';
import { BI_TREND_ANALYSIS_CHART, BI_TREND_COLUMN_CHART } from '@/api/api-path';

function getRowChart() {
  return axios.get(BI_TREND_ANALYSIS_CHART);
}

function getColumnChart() {
  return axios.get(BI_TREND_COLUMN_CHART);
}

export default {
  getRowChart,
  getColumnChart,
};
