<template>
  <div>
    <v-list two-line subheader v-for="item in items"
            :key="item.title"
    >
      <v-subheader inset>{{ item.title }}</v-subheader>

      <v-list-tile
        avatar
        @click=""
        v-for="children in item.data"
        :key="children.title"
      >
        <v-list-tile-avatar>
          <v-icon>{{ children.icon }}</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title @click="$router.push({name: children.route.name})">{{ children.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>

  import AppLeftDrawerUser from '@/components/AppLeftDrawerUser';

  export default {
    name: 'AppLeftDrawerNav',
    components: { AppLeftDrawerUser },
    data() {
      return {
        items: [
          {
            title: '大气实时监测分析',
            data: [
              {
                icon: 'assignment', title: '实时动态', route: { name: 'realTimeDynamic' },
              },
              {
                icon: 'call_to_action', title: '实时数据', route: { name: 'realTimeData' },
              },
            ],
          },
          {
            title: '大气环境综合管理分析',
            data: [
              {
                icon: 'assignment', title: '空气质量排名对比分析', route: { name: 'StationAnalysis' },
              },
              {
                icon: 'call_to_action', title: '污染物趋势分析', route: { name: 'TrendAnalysis' },
              },
              {
                icon: 'assignment', title: '空气质量统计分析', route: { name: 'AirAnalysis' },
              },
              {
                icon: 'call_to_action', title: '自画像报告功能',
              },
            ],
          },
          {
            title: '动态大气环境容量分析',
            data: [
              {
                icon: 'assignment', title: '地图动态大气容量展示',
              },
              {
                icon: 'call_to_action', title: '大气容量趋势分析',
              },
            ],
          },
          {
            title: '空气质量预测分析',
            data: [
              {
                icon: 'assignment', title: '空气质量浓度预测',
              },
              {
                icon: 'call_to_action', title: '污染物大气容量预测',
              },
            ],
          },
        ],
      };
    },
  };
</script>
<style>
  .v-list--two-line .v-list__tile {
    height: 40px;
    font-size: 14px;
  }
  .v-subheader--inset {
    margin-left: 11px;
  }
</style>
