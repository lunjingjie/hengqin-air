<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tableData"
      class="elevation-1"
      rows-per-page-text="每页显示条数"
      no-data-text="没有数据"
      :rows-per-page-items="rowArr"
    >
      <template slot="items" slot-scope="props">
        <tr @click="showChart(props.item.name)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.KPM25 }}</td>
          <td class="text-xs-center">{{ props.item.KPM10 }}</td>
          <td class="text-xs-center">{{ props.item.SO2 }}</td>
          <td class="text-xs-center">{{ props.item.NO2 }}</td>
          <td class="text-xs-center">{{ props.item.O3 }}</td>
          <td class="text-xs-center">{{ props.item.CO }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: 'AnalysisTable',
    props: ['tableData', 'headers'],
    data() {
      return {
        rowArr: [10, 25, { text: '全部', value: -1 }],
      };
    },
    methods: {
      showChart(val) {
        this.$emit('showChart', val);
      },
    },
  };
</script>
