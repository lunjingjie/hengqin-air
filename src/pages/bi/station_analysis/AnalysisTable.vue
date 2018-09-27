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
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.KPM25 }}</td>
        <td class="text-xs-center">{{ props.item.KPM10 }}</td>
        <td class="text-xs-center">{{ props.item.SO2 }}</td>
        <td class="text-xs-center">{{ props.item.NO2 }}</td>
        <td class="text-xs-center">{{ props.item.O3 }}</td>
        <td class="text-xs-center">{{ props.item.CO }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: 'AnalysisTable',
    props: ['tableData'],
    data() {
      return {
        rowArr: [10, 25, { text: '全部', value: -1 }],
        headers: [
          {
            text: '站点名称',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'PM2.5', align: 'center', value: 'KPM25' },
          { text: 'PM10', align: 'center', value: 'KPM10' },
          { text: 'SO2', align: 'center', value: 'SO2' },
          { text: 'NO2', align: 'center', value: 'NO2' },
          { text: 'O3', align: 'center', value: 'O3' },
          { text: 'CO', align: 'center', value: 'CO' },
        ],
      };
    },
  };
</script>
