import AnalysisApi from '@/api/station-analysis-api';

function getAnalysisData() {
  return AnalysisApi.getAnalysisData();
}

export default {
  getAnalysisData,
};
