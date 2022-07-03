<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
  import { room } from "../assets/js/index.js";

let $echarts: any = inject("echarts");
let $axios: any = inject("axios");

let data = reactive({
  data: {
    chartThree: {
      chartData: Array,
    },
  },
});

async function getState() {
  data = await $axios({ url: "/api/three" });
}

onMounted(() => {
    let myChart = $echarts.init(document.getElementById("myEcharts"),room);
myChart.showLoading();
  getState().then(() => {
    console.log("饼状图", data);

    myChart.hideLoading();
    myChart.setOption({
      legend: {
        bottom: "1%",
        itemWidth: 20,
      },
      tooltip: {
        show: true,
      },
      series: [
        {
          type: "pie",
          data: data.data.chartThree.chartData,
          radius: [10, 100],
          center: ["50%", "45%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 10,
          },
        },
      ],
    });
  });
});
</script>

<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="myEcharts">图表的容器</div>
  </div>
</template>

<style scoped>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
.chart {
  height: 4.4rem;
}
</style>
