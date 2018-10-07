import TrendAnalysisApi from '@/api/trend-analysis-api';

function getRowChart() {
  return TrendAnalysisApi.getRowChart();
}

function getColumnChart() {
  return TrendAnalysisApi.getColumnChart();
}
export default {
  getRowChart,
  getColumnChart,
};
