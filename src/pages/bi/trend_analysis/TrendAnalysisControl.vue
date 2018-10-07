<template>
  <div>
    <v-card class="pa-2" style="border-left: 5px solid #F05050;">
      <v-layout row justify-left wrap>
        <div style="z-index: 3; position: absolute; right: 10px; top: 15px;">
          <v-layout>
            <v-flex @click="changeType">
              <v-card hover tile style="width: 50px; height: 30px; text-align: center; line-height: 30px;"
                      :class="{ reportStyle: istrue1 === 'day' }"
              >
                日统计
              </v-card>
            </v-flex>
            <v-flex @click="changeType1">
              <v-card hover tile style="width: 50px; height: 30px; text-align: center; line-height: 30px;"
                      :class="{ reportStyle: istrue1 === 'month' }"
              >
                月统计
              </v-card>
            </v-flex>
          </v-layout>
        </div>
<!--横向-->
        <v-flex xs12 sm6 md6 order-md3 order-sm2 v-show="showControl">
          <v-select :items="stationArr"
                    v-model="doneStation"
                    cache-items
                    multiple
                    class="py-1 px-2"
                    hide-details
                    slot="activator"
                    color="info"
                    prepend-icon="mdi-bus">
          </v-select>
        </v-flex>
        <v-flex xs12 sm6 md2 order-md3 order-sm2 v-show="showControl">
          <v-select :items="paramArr"
                    v-model="doneParam"
                    cache-items
                    class="py-1 px-2"
                    hide-details
                    slot="activator"
                    color="info"
                    prepend-icon="mdi-bus">
          </v-select>
        </v-flex>
<!--纵向-->
          <v-flex xs12 sm6 md2 order-md3 order-sm2 v-show="!showControl">
            <v-select :items="stationArr1"
                      v-model="doneStation1"
                      cache-items
                      class="py-1 px-2"
                      hide-details
                      slot="activator"
                      color="info"
                      prepend-icon="mdi-bus">
            </v-select>
          </v-flex>
          <v-flex xs12 sm6 md6 order-md3 order-sm2 v-show="!showControl">
            <v-select :items="paramArr1"
                      v-model="doneParam1"
                      cache-items
                      multiple
                      class="py-1 px-2"
                      hide-details
                      slot="activator"
                      color="info"
                      prepend-icon="mdi-bus">
            </v-select>
          </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'TrendAnalysisControl',
    props: ['param', 'station', 'stationArr', 'paramArr', 'param1', 'station1', 'stationArr1', 'paramArr1', 'showControl', 'istrue1'],
    data() {
      return {
      };
    },
    computed: {
      doneParam: {
        get() {
          return this.param;
        },
        set(val) {
          this.$emit('update:param', val);
        },
      },
      doneStation: {
        get() {
          return this.station;
        },
        set(val) {
          this.$emit('update:station', val);
        },
      },
      doneParam1: {
        get() {
          return this.param1;
        },
        set(val) {
          this.$emit('update:param1', val);
        },
      },
      doneStation1: {
        get() {
          return this.station1;
        },
        set(val) {
          this.$emit('update:station1', val);
        },
      },
    },
    methods: {
      changeType() {
        this.$emit('update:istrue1', 'day');
      },
      changeType1() {
        this.$emit('update:istrue1', 'month');
      },
    },
  };
</script>
<style scoped>
  .reportStyle {
    background-color: #59B759;
    color: #fff;
  }
</style>

