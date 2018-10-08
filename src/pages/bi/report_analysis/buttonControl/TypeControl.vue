<template>
  <div style="z-index: 3; position: absolute; left: 17px; top: 15px;">
    <v-layout>
      报告类型&nbsp&nbsp:&nbsp&nbsp
      <v-flex @click="changeType">
        <v-card tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                class="btnparam"
                hover
                :class="{ reportStyle: istrue == 'all' }"
        >
          整体自画像报告
        </v-card>
      </v-flex>
      <v-flex @click="changeType1">
        <v-card tile style="width: 120px; height: 30px; text-align: center; line-height: 30px;"
                class="btnparam"
                hover
                :class="{ reportStyle: istrue == 'single' }"
        >
          监测点自画像报告
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  export default {
    name: 'TypeControl',
    props: ['istrue'],
    methods: {
      changeType() {
        this.$emit('update:istrue', 'all');
      },
      changeType1() {
        this.$emit('update:istrue', 'single');
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
