<template>
  <div style="height: 100%; overflow-y: hidden;">
    <realTimeDynamicMap></realTimeDynamicMap>
  </div>

</template>

<script>
  import 'leaflet/dist/leaflet.css'; // 防止瓦片化
  import realTimeDynamicMap from './realTimeDynamicMap';

  export default {
    components: {
      realTimeDynamicMap,
    },
    name: 'realTimeDynamic',
  };
</script>

<style scoped>
  html {
    overflow-y: auto !important;
  }
</style>
