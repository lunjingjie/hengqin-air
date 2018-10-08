<template>
  <div>
    <v-layout row justify-left wrap>
      <v-flex xs12 sm6 md4 order-md3 order-sm2 class="boxboder">
        标签描述性文字
      </v-flex>
      <v-flex xs12 sm6 md8 order-md4 order-sm2 class="boxboder">
        <report-bar :legendData="legendData"
                    :xAxisData="xAxisData"
                    :series="series"
        ></report-bar>
      </v-flex>
    </v-layout>
    <v-layout row justify-left wrap>
      <v-flex xs12 sm6 md4 order-md3 order-sm2 class="boxboder">
        <report-pie></report-pie>
      </v-flex>
      <v-flex xs12 sm6 md8 order-md4 order-sm2 class="boxboder">
        4
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import AnalysisApi from '@/service/station-analysis-service';
  import ReportPie from './body/ReportPie';
  import ReportBar from './body/ReportBar';

  export default {
    components: {
      ReportBar,
      ReportPie,
    },
    name: 'ReportBody',
    props: ['showDate'],
    data() {
      return {
        dataList: [],
        legendData: [],
        xAxisData: [],
        series: [],
      };
    },
    mounted() {
      this.getChartData();
    },
    watch: {
      showDate() {
        this.getChartData();
      },
    },
    methods: {
      getChartData() {
        // 参数：param,dateType,station
        AnalysisApi.getAnalysisChartData().then((res) => {
          this.dataList = res.data;
          this.checkchart();
        });
      },
      // 点击查询触发
      checkchart() {
        this.legendData = this.paramArr;
        if (!this.showDate) {
          // x轴24小时
          this.xAxisData = ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时',
            '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时',
            '21时', '22时', '23时'];
        } else if (this.showDate) {
          // x轴30天
          this.xAxisData = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
            '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日',
            '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];
        }
        // series
        this.series = [
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {
                  name: '年最高', value: 182.2, xAxis: 7, yAxis: 183,
                },
                {
                  name: '年最低', value: 2.3, xAxis: 11, yAxis: 3,
                },
              ],
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' },
              ],
            },
          },
        ];
      },
    },
  };
</script>
<style scoped>
  .boxboder {
    border: 1px solid #DDDEE1;
  }
</style>
