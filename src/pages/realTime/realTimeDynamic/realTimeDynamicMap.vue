<template>
  <div id="map">

  </div>
</template>

<script>

  import L from 'leaflet';

  export default {
    name: 'realTimeDynamicMap',
    data() {
      return {
        map: null,
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        // 谷歌卫星地图： http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
        // 谷歌电子地图： http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga';
        const mapTileUrl = 'https://api.mapbox.com/styles/v1/lunjingjie/cjjp36dmn11x92rock3rbv2qi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVuamluZ2ppZSIsImEiOiJjampmZW5xdmkwZWkwM3dteGN2bWQ1Mm03In0.6F3JbETLmmpNxCKzdik5rg';
        this.map = L.map('map', {
          renderer: L.canvas(),
          attributionControl: false,
        }).setView([22.12532, 113.50206], 13); // 经纬度 和 缩放级别
        L.tileLayer(mapTileUrl).addTo(this.map);
      },
    },
  };
</script>

<style scoped>
  #map {
    height: 100%;
  }
</style>
