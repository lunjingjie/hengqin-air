<template>
  <div>
    <v-card class="pa-2" style="border-left: 5px solid #F05050;">
      <v-layout row justify-left wrap>
        <v-flex xs12 sm6 md2 order-md3 order-sm2>
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
        <v-flex xs12 sm6 md3 order-md4 order-sm2>
          <v-menu lazy v-model="menu" transition="slide-y-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
          >
            <v-text-field
              class="py-1 px-2"
              slot="activator"
              v-model="month"
              prepend-icon="event"
              readonly
              hide-details
              color="info"
              style="width: 180px;"
              placeholder="选择时间"
            ></v-text-field>
            <v-date-picker color="primary" locale="zh-cn" v-model="doneMonth" no-title scrollable type="month"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'AirAnalysisControl',
    props: ['month', 'stationArr', 'station'],
    data() {
      return {
        menu: false,
      };
    },
    computed: {
      doneMonth: {
        get() {
          return this.month;
        },
        set(val) {
          this.$emit('update:month', val);
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
    },
  };
</script>
