<script setup lang="ts">
import { provide } from "vue";
import * as echarts from 'echarts';
import axios from 'axios';
// 基准路径
axios.defaults.baseURL = "http://localhost:8880"
provide("echarts",echarts);
provide("axios",axios);

</script>

<template>
  <router-view />
</template>

<style>
body {
  background: url("@/assets/jiandie.png") no-repeat fixed center;
  background-size: cover;
}
</style>
