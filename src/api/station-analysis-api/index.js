import axios from '@/api/axios';
import { BI_ANALYSIS } from '@/api/api-path';

function getAnalysisData() {
  return axios.get(BI_ANALYSIS);
}

export default {
  getAnalysisData,
};
