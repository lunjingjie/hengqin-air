<template>
  <div>
    <div id="main1" style="width:100%;height:300px;"></div>
    <div style="position: fixed; right: 25px; top: 200px;">
      <span class="param_title">污染物</span>
      <ul class="paramUl">
        <li>AQI</li>
        <li>NO2</li>
        <li>PM2.5</li>
        <li>PM10</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/bar';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/dataZoom';
  import 'echarts/lib/component/legendScroll';
  import 'echarts/lib/component/markArea';
  import 'echarts/lib/component/markPoint';

  export default {
    name: 'ReportBar',
    props: ['legendData', 'xAxisData', 'series'],
    data() {
      return {
        data: [],
      };
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('main1'), 'light');
      window.onresize = this.myChart.resize;
    },
    watch: {
      option() {
        this.myChart.setOption(this.option, true);
        setTimeout(() => {
          this.myChart.resize();
        }, 150);
      },
    },
    computed: {
      option() {
        return {
          title: {
            text: '某地区蒸发量和降水量',
            subtext: '纯属虚构',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['蒸发量', '降水量'],
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: this.xAxisData,
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: this.series,
        };
      },
    },
  };
</script>
<style scoped>
  .param_title {
    display: inline-block;
    border-top: 1px solid #DDDEE1;
    border-left: 1px solid #DDDEE1;
    border-right: 1px solid #DDDEE1;
    width: 62px;
    text-align: center;
    background-color: #006064;
    color: #fff;
  }
  .paramUl {
    border: 1px solid #DDDEE1;
    padding-left: 0;
  }
  .paramUl li {
    list-style-type: none;
    height: 30px;
    line-height: 30px;
    color: #90969D;
    font-weight: bold;
    width: 62px;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
  }
  .paramUl li:hover {
    background-color: #006064;
    color: #fff;
  }
</style>
