<template>
  <div>
    <v-card hover style="border-left: 5px solid #F05050; padding: 5px;">
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
    name: 'TrendAnalysisChart',
    props: ['param', 'dataList'],
    data() {
      return {
        series: [],
        date: [],
        legendData: [],
        yAxisArr: [],
      };
    },
    mounted() {
      this.myChart = echarts.init(document.getElementById('main'));
      window.onresize = this.myChart.resize;
    },
    watch: {
      dataList(val) {
        const color = ['#000', '#000', '#000', '#000', '#000', '#000'];
        this.yAxisArr = [];
        this.series = [];
        this.date = [];
        this.legendData = [];
        let i = 1;
        let j = 1;
        Object.keys(val).forEach((data, index) => {
          // series数组
          /* const seriesData = [];
          val[data].forEach((itemData) => {
            const tempArr = [];
            tempArr.push(itemData.Datatime);
            tempArr.push(itemData.DataValue);
            const obj = {
              value: tempArr,
            };
            seriesData.push(obj);
          }); */
          let markAreaIndex = [];
          const tempMarkAreaIndex = [];
          // 判断休眠状态
          const markAreaTemp = val[data].map((item, s) => {
            if (item.DataValue === -1) {
              return s;
            }
            return -1;
          });
          let markTemp = [];
          markAreaTemp.forEach((temp) => {
            if (temp !== -1) {
              markTemp.push(temp);
            } else {
              tempMarkAreaIndex.push(markTemp);
              markTemp = [];
            }
          });
          const arr = [];
          // 处理一直到结束到时离线的状况
          if (markTemp.length > 0) {
            tempMarkAreaIndex.push(markTemp);
            markTemp = [];
          }
          tempMarkAreaIndex.forEach((tt) => {
            if (tt.length >= 1) {
              const obj1 = {
                name: '某个坐标',
                coord: [tt[0], 0],
                itemStyle: {
                  color: '#d14a61',
                },
                label: {
                  formatter() {
                    return '休眠';
                  },
                },
              };
              arr.push(obj1);
            }
          });
          // 判断离线状态
          const tempOutLineMarkAreaIndex = [];
          const outLineMarkAreaTemp = val[data].map((item, s) => {
            if (item.DataValue === null) {
              return s;
            }
            return -1;
          });
          let outLineMarkTemp = [];
          outLineMarkAreaTemp.forEach((temp) => {
            if (temp !== -1) {
              outLineMarkTemp.push(temp);
            } else if (temp === -1) {
              tempOutLineMarkAreaIndex.push(outLineMarkTemp);
              outLineMarkTemp = [];
            }
          });
          // 处理一直到结束到时离线的状况
          if (outLineMarkTemp.length > 0) {
            tempOutLineMarkAreaIndex.push(outLineMarkTemp);
            outLineMarkTemp = [];
          }
          tempOutLineMarkAreaIndex.forEach((tt) => {
            if (tt.length >= 1) {
              const obj1 = {
                name: '某个坐标',
                coord: [tt[0], null],
                itemStyle: {
                  color: '#000',
                },
                label: {
                  formatter() {
                    return '离线';
                  },
                },
              };
              arr.push(obj1);
            }
          });
          markAreaIndex = arr;
          this.legendData.push(data);
          this.date = val[data].map(item => item.Datatime);
          // this.date = [1, 2, 3, 4];
          // 封装数据对象series
          const obj = {
            name: data,
            type: 'line',
            showSymbol: true,
            smooth: true,
            // data: seriesData,
            data: val[data].map((item) => {
              if (item.DataValue === -1) {
                return null;
              }
              return item.DataValue;
            }),
            yAxisIndex: index,
            markPoint: {
              data: markAreaIndex,
            },
            /* itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  formatter(value) {
                    if (value.data === -1) {
                      return '休眠';
                    }
                    return '正常';
                  },
                },
              },
            }, */
          };
          this.series.push(obj);
          // 封装多曲线多Y轴对象
          const yAxisObj = {
            type: 'value',
            name: data,
            axisLine: {
              lineStyle: {
                color: color[index],
              },
            },
          };
          if (index === 0) {
            const splitLine = {
              show: true,
            };
            yAxisObj.splitLine = splitLine;
          }
          // 累加offset
          const normalOffset = 60;
          if (index % 2 === 0) {
            yAxisObj.position = 'left';
            yAxisObj.offset = normalOffset * i;
            i += 1;
          } else if (index % 2 === 1) {
            yAxisObj.position = 'right';
            yAxisObj.offset = normalOffset * j;
            j += 1;
          }
          this.yAxisArr.push(yAxisObj);
        });
      },
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
          color: ['#2196F3', '#d14a61', '#71a7ba', '#93b7e3', '#a5e7f0', '#cbb0e3'],
          backgroundColor: 'rgba(0,0,0,0)',
          itemStyle: {
            normal: {
              borderWidth: '2',
            },
          },
          lineStyle: {
            normal: {
              width: 2,
            },
          },
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
          }],
          title: [{
            left: 'center',
            text: 'XXX多曲线分析',
            subtext: 'xx时间到xx时间',
            textStyle: {
              color: '#000',
            },
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
          },
          legend: {
            x: 'right',
            data: this.legendData,
          },
          grid: {
            right: '10%',
          },
          xAxis: [{
            splitLine: {
              show: false,
            },
            axisTick: {
              alignWithLabel: true,
            },
            data: this.date,
          }],
          /* xAxis: [
            {
              splitLine: false,
              type: 'time',
              name: '时间',
              // splitNumber: 3600 * 24,
              min: new Date(this.newDate.replace('T', ' ')),
              // scale: true,
              max: new Date(this.newDate1.replace('T', ' ')),
              // boundaryGap: false,
              axisLabel: {
                formatter(value) {
                  return echarts.format.formatTime('yyyy-MM-dd hh:mm:ss', new Date(value));
                },
              },
            },
          ], */
          yAxis: this.yAxisArr,
          dataZoom: [
            {
              show: true,
            },
            {
              type: 'inside',
            },
          ],
          series: this.series,
        };
      },
    },
    methods: {
      loadEcharts() {
        this.myChart.setOption({
          color: ['#003366', '#d14a61', '#675bba', '#93b7e3', '#a5e7f0', '#cbb0e3'],
          backgroundColor: 'rgba(0,0,0,0)',
          itemStyle: {
            normal: {
              borderWidth: '2',
            },
          },
          lineStyle: {
            normal: {
              width: 2,
            },
          },
          symbolSize: 6,
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400,
          }],
          title: [{
            left: 'center',
            text: 'XXX多曲线分析',
            subtext: 'xx时间到xx时间',
            textStyle: {
              color: '#516b91',
            },
          }],
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            x: 'right',
            data: this.legendData,
          },
          grid: {
            left: '3%',
            right: '4%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'time',
              name: '时间',
              splitNumber: 24 * 3600,
              min: (new Date()).setDate(1),
              scale: true,
              max: new Date(),
              boundaryGap: false,
            },
          ],
          /* xAxis: [{
            type: 'time',
            splitLine: {
              show: false,
            },
            data: this.date,
            axisLabel: {
              formatter(value, idx) {
                const date = new Date(value);
                return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
              },
            },
          }], */
          yAxis: [{
            splitLine: {
              show: true,
            },
          }],

          dataZoom: [{
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            height: 10,
            borderColor: 'transparent',
            backgroundColor: '#e2e2e2',
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
            handleSize: 20,
            handleStyle: {
              shadowBlur: 6,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowColor: '#aaa',
            },
            labelFormatter: '',
          }, {
            type: 'inside',
            filterMode: 'weakFilter',
          }],
          series: this.series,
        });
      },
    },
    beforeDestroy() {
      window.onresize = null;
    },
  };
</script>
