<template>
  <div class="ma-3 mb-0">
    <v-tabs
      slot="extension"
      v-model="tabs"
      fixed-tabs
      style="border: 1px solid #DDDEE1;"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab class="primary--text" @click="showChart">
        <v-icon>phone</v-icon>
        空气质量统计图形展示
      </v-tab>
      <v-tab class="primary--text" @click="showTable">
        <v-icon>favorite</v-icon>
        空气质量评级信息表
      </v-tab>
    </v-tabs>
    <air-analysis-control class=""
                          :month.sync="month"
                          :stationArr="stationArr"
                          :station.sync="station"
                          :isChart="isChart"
    ></air-analysis-control>
    <div style="border-left: 2px solid #DDDEE1;border-right: 2px solid #DDDEE1;border-bottom: 2px solid #DDDEE1;"
         v-show="isChart">
      <air-chart style="padding-top: 120px;padding-bottom: 120px;"
      ></air-chart>
    </div>
    <div style="border-left: 2px solid #DDDEE1;border-right: 2px solid #DDDEE1;border-bottom: 2px solid #DDDEE1;border-top: none;"
         v-show="!isChart">
      <div>
        table
      </div>
    </div>
  </div>
</template>
<script>
  import AirAnalysisControl from './AirAnalysisControl';
  import AirChart from './Chart';

  export default {
    components: {
      AirChart,
      AirAnalysisControl,
    },
    data() {
      return {
        month: new Date().toISOString().substr(0, 7),
        stationArr: ['A站点', 'B站点'],
        station: 'A站点',
        tabs: null,
        isChart: true,
      };
    },
    methods: {
      showChart() {
        this.isChart = true;
      },
      showTable() {
        this.isChart = false;
      },
    },
  };
</script>
