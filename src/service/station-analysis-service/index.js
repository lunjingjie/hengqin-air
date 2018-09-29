import AnalysisApi from '@/api/station-analysis-api';

function getAnalysisData() {
  return AnalysisApi.getAnalysisData();
}

function getAnalysisChartData() {
  return AnalysisApi.getAnalysisChartData();
}

export default {
  getAnalysisData,
  getAnalysisChartData,
};
