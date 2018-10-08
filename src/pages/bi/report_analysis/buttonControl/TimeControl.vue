<template>
  <div style="z-index: 3; position: absolute; left: 350px; top: 15px;">
    <v-layout>
      时间维度&nbsp&nbsp:&nbsp&nbsp
      <v-flex @click="changeType">
        <v-card tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                class="btnparam"
                hover
                :class="{ reportStyle: timeSelect == 'day' }"
        >
          日报告
        </v-card>
      </v-flex>
      <v-flex @click="changeType1">
        <v-card tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                class="btnparam"
                hover
                :class="{ reportStyle: timeSelect == 'month' }"
        >
          月报告
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    name: 'TimeControl',
    props: ['timeSelect'],
    methods: {
      changeType() {
        this.$emit('update:timeSelect', 'day');
      },
      changeType1() {
        this.$emit('update:timeSelect', 'month');
      },
    },
  };
</script>
<style scoped>
  .reportStyle {
    background-color: #59B759;
    color: #fff;
  }
  .btnparam:hover {
    cursor: pointer;
  }
</style>
