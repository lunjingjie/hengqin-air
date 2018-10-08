<template>
  <div>
    <div id="main" style="width: 100%;height: 300px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/pie';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';

  export default {
    name: 'QualityLevel',
    data() {
      return {
        dataList: [],
      };
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('main'), 'light');
      this.dataList = [
        { value: 20, name: '优' },
        { value: 20, name: '良' },
        { value: 20, name: '轻度污染' },
        { value: 20, name: '中度污染' },
        { value: 20, name: '重度污染' },
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
            text: '空气质量等级占比图',
            x: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {d}%',
          },
          series: [
            {
              name: '空气质量',
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
                color(params) {
                  if (params.data.name === '优') {
                    return '#00E400';
                  } else if (params.data.name === '良') {
                    return '#E1E100';
                  } else if (params.data.name === '轻度污染') {
                    return '#E17E00';
                  } else if (params.data.name === '中度污染') {
                    return '#99004C';
                  } else if (params.data.name === '重度污染') {
                    return '#7E0023';
                  }
                  return '#000';
                },
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
