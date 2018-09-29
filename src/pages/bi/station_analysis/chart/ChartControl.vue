<template>
  <div>
    <v-card class="pa-2" style="border-left: 5px solid #F05050;">
      <v-layout row justify-left wrap>
        <v-flex xs12 sm6 md6 order-md3 order-sm2>
          <input type="checkbox" value="KPM25" v-model="doneParamArr"/> PM2.5
          <input type="checkbox" value="KPM10" v-model="doneParamArr"/> PM10
          <input type="checkbox" value="SO2" v-model="doneParamArr"/> SO2
          <input type="checkbox" value="NO2" v-model="doneParamArr"/> NO2
          <input type="checkbox" value="O3" v-model="doneParamArr"/> O3
          <input type="checkbox" value="CO" v-model="doneParamArr"/> CO
          <v-btn color="info" round small @click="checkchart" style="width: 20px;">查询</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'ChartControl',
    props: ['paramArr'],
    data() {
      return {
      };
    },
    computed: {
      doneParamArr: {
        get() {
          return this.paramArr;
        },
        set(val) {
          this.$emit('update:paramArr', val);
        },
      },
    },
    methods: {
      checkchart() {
        this.$emit('checkchart');
      },
    },
  };
</script>
