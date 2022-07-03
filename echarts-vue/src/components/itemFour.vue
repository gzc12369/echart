<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
  import { room } from "../assets/js/index.js";

let $echarts: any = inject("echarts");
let $axios: any = inject("axios");

let data = reactive({
  data: {
    chartFour: {
      chartData: {
        day: Array,
        num: {
          Chemicals: Array,
          Clothes: Array,
          Electrical: Array,
          digit: Array,
          gear: Array,
        },
      },
    },
  },
});

async function getState() {
  data = await $axios({ url: "/api/four" });
}

onMounted(() => {
  //开始等待
  let myChart = $echarts.init(document.getElementById("myEchartsFour"),room);
  myChart.showLoading();
  getState().then(() => {
    console.log("柱状图4", data);
    //结束等待
    myChart.hideLoading();
    myChart.setOption({
      grid: {
        left: "3%",
        right: "4%",
        bottom: "6%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: data.data.chartFour.chartData.day,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      legend: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      series: [
        {
          name: "服饰",
          type: "bar",
          data: data.data.chartFour.chartData.num.Clothes,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "数码",
          type: "bar",
          data: data.data.chartFour.chartData.num.digit,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家电",
          type: "bar",
          data: data.data.chartFour.chartData.num.Electrical,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家居",
          type: "bar",
          data: data.data.chartFour.chartData.num.gear,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "日化",
          type: "bar",
          data: data.data.chartFour.chartData.num.Chemicals,
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
        },
      ],
    });
  });
});
</script>

<template>
  <div>
    <h2>库存统计图</h2>
    <div class="chart" id="myEchartsFour">图表的容器</div>
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
  height: 4.5rem;
}
</style>
