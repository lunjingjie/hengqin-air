<template>
  <v-footer height="auto">
    <v-card flat tile class="flex">
      <v-card-actions class="justify-center" style="font-size: 14px; font-family: '微软雅黑'; letter-spacing: 1px; background-color: #FAFAFA; color: #8a8a8a;">
        Copyright&copy;{{ this.currentYear }} Create80 All rights reserved. | 柯内特版权所有&copy; | 粤ICP备17142498号
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name: 'LoginFooter',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>
