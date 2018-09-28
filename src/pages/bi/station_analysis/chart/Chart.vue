<template>
  <div class="mt-5">
    <chart-control class="mb-2"
                   v-show="pluginShow"
                   :paramArr.sync="paramArr"
                   @checkchart="checkchart"
    ></chart-control>
    <chart-line v-show="pluginShow"
                :legendData="legendData"
                :xAxisData="xAxisData"
                :series="series"
    ></chart-line>
  </div>
</template>
<script>
  /* eslint-disable max-len */
  import AnalysisApi from '@/service/station-analysis-service';
  import ChartControl from './ChartControl';
  import ChartLine from './ChartLine';

  export default {
    components: {
      ChartLine,
      ChartControl,
    },
    name: 'Chart',
    props: ['type'],
    data() {
      return {
        dataList: [],
        legendData: [],
        xAxisData: [],
        series: [],
        paramArr: ['KPM25'],
        pluginShow: false,
      };
    },
    methods: {
      getChartData() {
        // 参数：param,dateType,station
        AnalysisApi.getAnalysisChartData().then((res) => {
          this.dataList = res.data;
          this.checkchart();
          window.scroll({
            top: 1000,
            right: 0,
            behavior: 'smooth',
          });
        });
      },
      // 点击列表触发(val = 站名称)
      showChart() {
        this.pluginShow = true;
        this.getChartData();
      },
      // 点击查询触发
      checkchart() {
        this.legendData = this.paramArr;
        if (this.type === '日') {
          // x轴24小时
          this.xAxisData = ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时',
            '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时',
            '21时', '22时', '23时'];
        } else if (this.type === '月') {
          // x轴30天
          this.xAxisData = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
            '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日',
            '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];
        }
        // series
        const tempSeries = [];
        this.paramArr.forEach((param) => {
          const obj = {
            name: param,
            type: 'line',
            data: this.dataList[0].KPM25.map(data => data.DataValue),
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
          };
          tempSeries.push(obj);
        });
        this.series = tempSeries;
      },
    },
  };
</script>
