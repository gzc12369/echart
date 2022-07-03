<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import { room } from "../assets/js/index.js";

let $echarts: any = inject("echarts");
let $axios: any = inject("axios");

let oneData = reactive({
  data: {
    chartOne: {
      chartData: [
        {
          title: String,
          num: Number,
        },
      ],
    },
  },
});
let xdata: StringConstructor[] = reactive([]);
let ydata: NumberConstructor[] = reactive([]);
function setData() {
  let { chartData } = oneData.data.chartOne;
  xdata = chartData.map((v) => v.title);
  ydata = chartData.map((v) => v.num);
  console.log("xdata", xdata);
  console.log("ydata", ydata);
}
let getState = async () => {
  oneData = await $axios({ url: "/api/one" });
  console.log(oneData.data.chartOne.chartData);
};

onMounted(() => {
  let myChart = $echarts.init(document.getElementById("oneChart"), room);
  myChart.showLoading();
  getState().then(() => {
    setData();
    myChart.hideLoading();
    myChart.setOption({
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: "#13547a", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#80d0c7", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      grid: {
        left: "1%",
        right: "6%",
        top: "3%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          color: "#fff",
        },
      },
      yAxis: {
        type: "category",
        data: xdata,
        axisLabel: {
          color: "#fff",
        },
      },
      series: [
        {
          data: ydata,
          type: "bar",
          showBackground: true,
          itemStyle: {
            borderColor: "#777034",
            borderWidth: 1,
            borderRadius: [0, 15, 15, 0],
          },
        },
      ],
    });
  });
});
</script>

<template>
  <h2>库存统计</h2>
  <div id="oneChart"></div>
</template>

<style scoped>
#oneChart {
  height: 4.4rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>
