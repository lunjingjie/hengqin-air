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
            title: '实时',
            data: [
              {
                icon: 'assignment', title: '数值地图',
              },
              {
                icon: 'call_to_action', title: '实时监测表',
              },
            ],
          },
          {
            title: 'BI',
            data: [
              {
                icon: 'assignment', title: '站点分析', route: { name: 'StationAnalysis' },
              },
              {
                icon: 'call_to_action', title: '趋势分析', route: { name: 'TrendAnalysis' },
              },
              {
                icon: 'assignment', title: '空气质量统计',
              },
              {
                icon: 'call_to_action', title: '自画像(报告)',
              },
            ],
          },
          {
            title: '大气容量',
            data: [
              {
                icon: 'assignment', title: '展示地图',
              },
              {
                icon: 'call_to_action', title: '趋势分析',
              },
            ],
          },
          {
            title: '其他',
            data: [
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
