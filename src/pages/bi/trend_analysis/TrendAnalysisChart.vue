<template>
  <div>
    <v-card hover>
      <div id="main" style="width:100%;height: 550px;"></div>
    </v-card>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/dataZoom';
  import 'echarts/lib/component/legendScroll';
  import 'echarts/lib/component/markArea';
  import 'echarts/lib/component/markPoint';

  export default {
    name: 'ChartLine',
    props: ['legendData', 'xAxisData', 'series'],
    data() {
      return {
        data: [],
      };
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('main'), 'dark');
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
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: this.legendData,
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              dataView: { readOnly: false },
              magicType: { type: ['line', 'bar'] },
              restore: {},
              saveAsImage: {},
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xAxisData,
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
            },
          },
          series: this.series,
        };
      },
    },
  };
</script>
