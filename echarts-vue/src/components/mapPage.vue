<script setup lang="ts">
import axios from "axios";
import { room } from "../assets/js/index.js";
import { onMounted, reactive, inject } from "vue";

let $echarts: any = inject("echarts")!;

let mapData = reactive({
  data: {
    chinaData: Array,
  },
});
async function getState() {
  mapData = await axios.get("/api/map");
}

onMounted(() => {
  console.log("aa", mapData);
  getState().then(() => {
    console.log("map", mapData);
    $echarts.registerMap("china", mapData.data.chinaData);
    let myChart = $echarts.init(document.getElementById("map"), room);
    myChart.setOption({
      geo: {
        map: "china",
        itemStyle: {
          areaColor: "#ff9bc3",
          borderColor: "#04a6f3",
          shadowColor: "rgba(214,179,245,0.2)",
          shadowBlur: 30,
          emphasis: {
            focus: "self",
          },
        },
      },

      //   散点图数据

      tooltip: {
        trigger: "item",
      },
      title: {
        text: "城市销量",
        left: "45%",
        textStyle: {
          color: "#fff",
          fontSize: 20,
          textShadowBlur: 10,
          textShadowColor: "#33ffff",
        },
      },
      visualMap: {
        type: "continuous",
        min: 100,
        max: 5000,
        calculable: true,
        inRange: {
          color: ["#50a3ba", "#eac736", "#d94e5d"],
        },
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          type: "scatter",
          itemStyle: {
            color: "red",
          },
          coordinateSystem: "geo",
          data: [
            { name: "北京", value: [116.46, 39.92, 4367] },
            { name: "上海", value: [121.48, 31.22, 8675] },
            { name: "深圳", value: [114.07, 22.62, 2461] },
            { name: "广州", value: [113.23, 23.16, 187] },
            { name: "西安", value: [108.45, 34, 3421] },
          ],
        },
      ],
    });
  });
});
</script>

<template>
  <div class="map" id="map"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
