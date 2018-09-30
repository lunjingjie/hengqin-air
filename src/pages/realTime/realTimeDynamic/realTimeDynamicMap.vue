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
      this.hideControl();
    },
    methods: {
      initMap() {
        // 谷歌卫星地图： http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
        // 谷歌电子地图： http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga';
        // 智图：https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{z}/{y}/
        // 啊杰： https://api.mapbox.com/styles/v1/lunjingjie/cjjp36dmn11x92rock3rbv2qi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVuamluZ2ppZSIsImEiOiJjampmZW5xdmkwZWkwM3dteGN2bWQ1Mm03In0.6F3JbETLmmpNxCKzdik5rg';
        const mapTileUrl = 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}/';
        this.map = L.map('map', {
          renderer: L.canvas(),
          attributionControl: false,
        }).setView([22.12532, 113.50206], 13); // 经纬度 和 缩放级别
        L.tileLayer(mapTileUrl).addTo(this.map);
        L.marker([22.12532, 113.50206]).addTo(this.map)
          .bindPopup('横琴岛').openPopup();
      },
      hideControl() {
        const cla = document.querySelectorAll('#map .leaflet-left');
        for (let i = 0; i < cla.length; i += 1) {
          cla[i].style.display = 'none';
        }
      },
    },
  };
</script>

<style scoped>
  #map {
    height: 100%;
  }
</style>
