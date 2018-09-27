<template>
  <div>
    <v-card class="pa-2" style="border-left: 5px solid #F05050;">
      <v-layout row justify-left wrap>
        <v-flex xs12 sm6 md2 order-md3 order-sm2>
          <v-select :items="states"
                    v-model="type"
                    cache-items
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
                  v-if="type === '日'"
          >
            <v-text-field
              class="py-1 px-2"
              slot="activator"
              v-model="date"
              prepend-icon="event"
              readonly
              hide-details
              color="info"
              style="width: 190px;"
              placeholder="选择时间"
            ></v-text-field>
            <v-date-picker color="primary" locale="zh-cn" v-model="doneDate" no-title scrollable></v-date-picker>
          </v-menu>
          <v-menu lazy v-model="menu1" transition="slide-y-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                  v-show="type === '月'"
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
    name: 'AnalysisControl',
    props: ['date', 'month'],
    data() {
      return {
        type: '日',
        states: ['日', '月'],
        menu: false,
        menu1: false,
      };
    },
    computed: {
      doneDate: {
        get() {
          return this.date;
        },
        set(val) {
          this.$emit('update:date', val);
        },
      },
      doneMonth: {
        get() {
          return this.month;
        },
        set(val) {
          this.$emit('update:month', val);
        },
      },
    },
  };
</script>
