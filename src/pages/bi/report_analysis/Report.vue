<template>
  <div class="ma-3 mb-0">
    <type-control :istrue.sync="istrue"></type-control>
    <time-control :timeSelect.sync="timeSelect"></time-control>
    <report-control style="margin-top: 60px;"
                    :month.sync="month"
                    :date.sync="date"
                    :station.sync="station"
                    :stationArr="stationArr"
                    :showStation="showStation"
                    :istrue="istrue"
                    :showDate="showDate"
    ></report-control>
    <report-body :showDate="showDate"></report-body>
  </div>
</template>
<script>
  import TypeControl from './buttonControl/TypeControl';
  import TimeControl from './buttonControl/TimeControl';
  import ReportControl from './ReportControl';
  import ReportBody from './ReportBody';

  export default {
    components: {
      ReportBody,
      ReportControl,
      TimeControl,
      TypeControl,
    },
    name: 'Report',
    data() {
      return {
        // 整体与单个选择框
        istrue: 'all',
        // 时间类型选择框
        timeSelect: 'day',
        stationArr: ['A站点', 'B站点'],
        station: 'A站点',
        month: new Date().toISOString().substr(0, 7),
        date: new Date().toISOString().substr(0, 10),
        // 显示站点选择框
        showStation: false,
        // 切换显示日、月
        showDate: false,
      };
    },
    watch: {
      istrue(val) {
        if (val === 'all') {
          this.showStation = false;
        } else if (val === 'single') {
          this.showStation = true;
        }
      },
      timeSelect(val) {
        if (val === 'day') {
          this.showDate = false;
        } else if (val === 'month') {
          this.showDate = true;
        }
      },
    },
  };
</script>
