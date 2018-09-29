<template>
  <div class="ma-3 mb-0">
    <analysis-control class="mb-2"
                      :date.sync="date"
                      :month.sync="month"
                      :type.sync="type"
                      :tableType.sync="tableType"
    ></analysis-control>
    <analysis-table :tableData="tableData"
                    :headers="headers"
                    @showChart="showChart"
    ></analysis-table>
    <chart ref="child"
           :type="type"
    ></chart>
  </div>
</template>
<script>
  import AnalysisService from '@/service/station-analysis-service';
  import AnalysisControl from './AnalysisControl';
  import AnalysisTable from './AnalysisTable';
  import Chart from './chart/Chart';

  export default {
    components: {
      Chart,
      AnalysisTable,
      AnalysisControl,
    },
    name: 'StationAnalysis',
    data() {
      return {
        month: new Date().toISOString().substr(0, 7),
        date: new Date().toISOString().substr(0, 10),
        type: '日',
        tableData: [],
        tableType: '监测值表',
        headers: [],
        headers1: [
          {
            text: '站点名称',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'PM2.5', align: 'center', value: 'KPM25' },
          { text: 'PM10', align: 'center', value: 'KPM10' },
          { text: 'SO2', align: 'center', value: 'SO2' },
          { text: 'NO2', align: 'center', value: 'NO2' },
          { text: 'O3', align: 'center', value: 'O3' },
          { text: 'CO', align: 'center', value: 'CO' },
        ],
        headers2: [
          {
            text: '站点名称',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'PM2.5(IAQI)', align: 'center', value: 'KPM25(IAQI)' },
          { text: 'PM10(IAQI)', align: 'center', value: 'KPM10(IAQI)' },
          { text: 'SO2(IAQI)', align: 'center', value: 'SO2(IAQI)' },
          { text: 'NO2(IAQI)', align: 'center', value: 'NO2(IAQI)' },
          { text: 'O3(IAQI)', align: 'center', value: 'O3(IAQI)' },
          { text: 'CO(IAQI)', align: 'center', value: 'CO(IAQI)' },
        ],
      };
    },
    mounted() {
      this.headers = this.headers1;
      this.getAnalysisData();
    },
    watch: {
      month() {
        this.getAnalysisData();
      },
      date() {
        this.getAnalysisData();
      },
      tableType(val) {
        if (val === '监测值表') {
          this.headers = this.headers1;
          this.getAnalysisData();
        } else if (val === 'IAQI表') {
          this.headers = this.headers2;
          this.getAnalysisData();
        }
      },
    },
    methods: {
      getAnalysisData() {
        AnalysisService.getAnalysisData().then((res) => {
          this.tableData = res.data;
        });
      },
      showChart(val) {
        this.$refs.child.showChart(val);
      },
    },
  };
</script>
