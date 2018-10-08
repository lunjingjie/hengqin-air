<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 order-md3 order-sm2>
        <quality-level></quality-level>
      </v-flex>
      <v-flex xs12 sm12 md4 order-md3 order-sm2>
        <air-param></air-param>
      </v-flex>
      <v-flex xs12 sm12 md4 order-md3 order-sm2>
        <contribute></contribute>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import QualityLevel from './chart/QualityLevel';
  import Contribute from './chart/Contribute';
  import AirParam from './chart/Param';

  export default {
    components: {
      AirParam,
      Contribute,
      QualityLevel,
    },
    name: 'AirChart',
    data() {
      return {
      };
    },
  };
</script>
