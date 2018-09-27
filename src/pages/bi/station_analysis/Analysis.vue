<template>
  <div class="ma-3 mb-0">
    <analysis-control class="mb-2"
                      :date.sync="date"
                      :month.sync="month"
    ></analysis-control>
    <analysis-table :tableData="tableData"
    ></analysis-table>
  </div>
</template>
<script>
  import AnalysisService from '@/service/station-analysis-service';
  import AnalysisControl from './AnalysisControl';
  import AnalysisTable from './AnalysisTable';

  export default {
    components: {
      AnalysisTable,
      AnalysisControl,
    },
    name: 'StationAnalysis',
    data() {
      return {
        month: new Date().toISOString().substr(0, 7),
        date: new Date().toISOString().substr(0, 10),
        tableData: [],
      };
    },
    mounted() {
      this.getAnalysisData();
    },
    watch: {
      month() {
        this.getAnalysisData();
      },
      date() {
        this.getAnalysisData();
      },
    },
    methods: {
      getAnalysisData() {
        AnalysisService.getAnalysisData().then((res) => {
          this.tableData = res.data;
        });
      },
    },
  };
</script>
