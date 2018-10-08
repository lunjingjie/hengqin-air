<template>
  <div>
    <div id="main1" style="width: 100%;height: 300px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/pie';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';

  export default {
    name: 'AirParam',
    data() {
      return {
        dataList: [],
      };
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('main1'), 'light');
      this.dataList = [
        { value: 45, name: '无' },
        { value: 55, name: 'O3' },
      ];
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
            text: '首要污染物占比图',
            x: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {d}%',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: this.dataList,
              label: {
                normal: {
                  formatter: '{b}：{d}%',
                },
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        };
      },
    },
  };
</script>
