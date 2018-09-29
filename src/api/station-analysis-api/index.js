import axios from '@/api/axios';
import { BI_ANALYSIS, BI_ANALYSIS_CHART } from '@/api/api-path';

function getAnalysisData() {
  return axios.get(BI_ANALYSIS);
}

function getAnalysisChartData() {
  return axios.get(BI_ANALYSIS_CHART);
}

export default {
  getAnalysisData,
  getAnalysisChartData,
};
