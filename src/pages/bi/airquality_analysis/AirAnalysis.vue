<template>
  <div class="ma-3 mb-0">
    <air-analysis-control class="mb-2"
                          :month.sync="month"
                          :stationArr="stationArr"
                          :station.sync="station"></air-analysis-control>
  </div>
</template>
<script>
  import AirAnalysisControl from './AirAnalysisControl';

  export default {
    components: {
      AirAnalysisControl,
    },
    data() {
      return {
        month: new Date().toISOString().substr(0, 7),
        stationArr: ['A站点', 'B站点'],
        station: ['A站点'],
      };
    },
  };
</script>
