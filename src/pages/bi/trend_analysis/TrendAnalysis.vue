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
    ></trend-analysis-control>
    <trend-analysis-chart :param="param"
                          :dataList="dataList"
    ></trend-analysis-chart>
  </div>
</template>
<script>
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
            text: 'pm2.5',
            value: 'KPM25',
          },
          {
            text: 'pm10',
            value: 'KPM10',
          },
        ],
        station1: 'A站点',
        param1: ['KPM25'],
        stationArr1: ['A站点', 'B站点'],
        paramArr1: [
          {
            text: 'pm2.5',
            value: 'KPM25',
          },
          {
            text: 'pm10',
            value: 'KPM10',
          },
        ],
        dataList: [],
        istrue: 'row',
        showControl: true,
      };
    },
    mounted() {
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
    },
  };
</script>
<style scoped>
  .reportStyle {
    background-color: #59B759;
    color: #fff;
  }
</style>
