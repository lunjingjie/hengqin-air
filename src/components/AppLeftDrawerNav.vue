<template>
  <div>
    <v-list two-line subheader v-for="item in items"
            :key="item.title"
    >
      <v-subheader inset>{{ item.title }}</v-subheader>
      <v-list-group
        v-for="item1 in item.children"
        v-model="item1.active"
        :key="item1.title"
        :prepend-icon="item1.action"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item1.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subItem in item1.items" :key="subItem.title">
          <v-list-tile-content>
            <v-list-tile-title style="cursor: pointer;" @click="$router.push({name: subItem.route})">{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>

  import AppLeftDrawerUser from '@/components/AppLeftDrawerUser';

  export default {
    name: 'AppLeftDrawerNav',
    components: {
      AppLeftDrawerUser,
    },
    data() {
      return {
        items: [
          {
            title: '实时',
            children: [
              {
                action: 'local_activity',
                title: '数值地图',
                items: [
                  {
                    title: '地图分析',
                    route: '',
                  },
                ],
              },
              {
                action: 'restaurant',
                title: '实时监测表',
                items: [
                  { title: '实时浓度值', route: '' },
                  { title: 'IAQI', route: '' },
                  { title: '预测浓度值', route: '' },
                  { title: '预测IAQI', route: '' },
                ],
              },
            ],
          },
          {
            title: 'BI',
            children: [
              {
                action: 'local_activity',
                title: '站点分析(日/月)',
                items: [
                  {
                    title: '汇总表',
                    route: 'StationAnalysis',
                  },
                  {
                    title: '趋势图',
                    route: 'TrendAnalysis',
                  },
                ],
              },
              {
                action: 'restaurant',
                title: '趋势分析(纵向)',
                items: [
                  { title: '趋势分析图', route: '' },
                ],
              },
              {
                action: 'restaurant',
                title: '空气质量统计',
                items: [
                  { title: '饼状图(按站点/月份)', route: '' },
                  { title: '空气质量统计汇总表', route: '' },
                ],
              },
              {
                action: 'restaurant',
                title: '自画像(报告)',
                items: [
                  { title: '整体/站点', route: '' },
                  { title: '月站点报告', route: '' },
                ],
              },
            ],
          },
          {
            title: '大气容量',
            children: [
              {
                action: 'local_activity',
                title: '展示地图',
                items: [
                  {
                    title: '展示地图',
                    route: '',
                  },
                ],
              },
              {
                action: 'restaurant',
                title: '趋势分析',
                items: [
                  { title: '趋势分析', route: '' },
                ],
              },
            ],
          },
          {
            title: '其他',
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
