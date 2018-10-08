<template>
  <div class="ma-3 mb-0">
    <div style="z-index: 3; position: absolute; left: 17px; top: 15px;">
      <v-layout>
        <v-flex @click="changeType">
          <v-card hover tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                  :class="{ reportStyle: istrue == 'row' }"
          >
            横向分析
          </v-card>
        </v-flex>
        <v-flex @click="changeType1">
          <v-card hover tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                  :class="{ reportStyle: istrue == 'column' }"
          >
            纵向分析
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <trend-analysis-control class="mb-2 mt-5"
                            :station.sync="station"
                            :param.sync="param"
                            :stationArr="stationArr"
                            :paramArr="paramArr"
                            :station1.sync="station1"
                            :param1.sync="param1"
                            :stationArr1="stationArr1"
                            :paramArr1="paramArr1"
                            :showControl="showControl"
                            :istrue1.sync="istrue1"
    ></trend-analysis-control>
    <trend-analysis-chart :param="param"
                          :legendData="legendData"
                          :xAxisData="xAxisData"
                          :series="series"
    ></trend-analysis-chart>
  </div>
</template>
<script>
  import TrendService from '@/service/trend-analysis-service';
  import TrendAnalysisControl from './TrendAnalysisControl';
  import TrendAnalysisChart from './TrendAnalysisChart';

  export default {
    components: {
      TrendAnalysisChart,
      TrendAnalysisControl,
    },
    name: 'TrendAnalysis',
    data() {
      return {
        station: ['A站点'],
        param: 'KPM25',
        stationArr: ['A站点', 'B站点'],
        paramArr: [
          {
            text: 'PM2.5',
            value: 'KPM25',
          },
          {
            text: 'PM10',
            value: 'KPM10',
          },
          {
            text: 'SO2',
            value: 'SO2',
          },
          {
            text: 'NO2',
            value: 'NO2',
          },
          {
            text: 'CO',
            value: 'CO',
          },
          {
            text: 'O3',
            value: 'O3',
          },
        ],
        station1: 'A站点',
        param1: ['KPM25'],
        stationArr1: ['A站点', 'B站点'],
        paramArr1: [
          {
            text: 'PM2.5',
            value: 'KPM25',
          },
          {
            text: 'PM10',
            value: 'KPM10',
          },
          {
            text: 'SO2',
            value: 'SO2',
          },
          {
            text: 'NO2',
            value: 'NO2',
          },
          {
            text: 'CO',
            value: 'CO',
          },
          {
            text: 'O3',
            value: 'O3',
          },
        ],
        // chart
        dataList: [],
        legendData: [],
        xAxisData: [],
        series: [],
        // 横向分析、纵向分析
        istrue: 'row',
        showControl: true,
        // 日、月
        istrue1: 'day',
      };
    },
    mounted() {
      this.queryRowChartData();
      window.scroll({
        top: 0,
        right: 0,
        behavior: 'smooth',
      });
    },
    watch: {
      // 切换横向分析、纵向分析数据
      istrue(val) {
        if (val === 'row') {
          this.queryRowChartData();
        } else if (val === 'column') {
          this.queryColumnChartData();
        }
      },
      station() {
        this.queryRowChartData();
      },
      param() {
        this.queryRowChartData();
      },
      station1() {
        this.queryColumnChartData();
      },
      param1() {
        this.queryColumnChartData();
      },
      istrue1() {
        if (this.istrue === 'row') {
          this.queryRowChartData();
        } else if (this.istrue === 'column') {
          this.queryColumnChartData();
        }
      },
    },
    methods: {
      changeType() {
        this.istrue = 'row';
        this.showControl = true;
      },
      changeType1() {
        this.istrue = 'column';
        this.showControl = false;
      },
      // legendData', 'xAxisData', 'series'
      queryRowChartData() {
        // 获取接口数据
        TrendService.getRowChart().then((res) => {
          this.dataList = res.data;
          // 拼接chart所需元素
          this.legendData = this.station;
          if (this.istrue1 === 'day') {
            // x轴24小时
            this.xAxisData = ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时',
              '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时',
              '21时', '22时', '23时'];
          } else if (this.istrue1 === 'month') {
            // x轴30天
            this.xAxisData = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
              '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日',
              '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];
          }
          // series
          const tempSeries = [];
          this.station.forEach((station) => {
            const obj = {
              name: station,
              type: 'line',
              data: this.dataList[0][station].map(data => data.DataValue),
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
        });
      },
      queryColumnChartData() {
        // 获取接口数据
        TrendService.getColumnChart().then((res) => {
          this.dataList = res.data;
          // 拼接chart所需元素
          this.legendData = this.param1;
          if (this.istrue1 === 'day') {
            // x轴24小时
            this.xAxisData = ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时',
              '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时',
              '21时', '22时', '23时'];
          } else if (this.istrue1 === 'month') {
            // x轴30天
            this.xAxisData = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
              '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日',
              '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'];
          }
          // series
          const tempSeries = [];
          this.param1.forEach((param) => {
            const obj = {
              name: param,
              type: 'line',
              data: this.dataList[0][param].map(data => data.DataValue),
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
        });
      },
    },
  };
</script>
<style scoped>
  .reportStyle {
    background-color: #59B759;
    color: #fff;
  }
</style>
