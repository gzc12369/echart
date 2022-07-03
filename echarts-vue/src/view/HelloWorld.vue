<script setup lang="ts">
import { defineComponent,inject } from "vue";
import ItemPage from "@/components/itemPage.vue"
import ItemOne from "@/components/itemOne.vue"
import ItemTwo from "@/components/itemTwo.vue"
import ItemThree from "@/components/itemThree.vue"
import ItemFour from "@/components/itemFour.vue"
import MapPage from "@/components/mapPage.vue"
import axios from "axios";
defineComponent({
    // components: { ItemPage }
})
let $echarts = inject("echarts");
let $axios = inject("axios");
// console.log($echarts);
// console.log($axios);


</script>

<template>
  <header>
    <h1>山野千里  一直是你</h1>
  </header>
  <section class="container">
    <!-- left -->
    <section class="itemLeft">
      <ItemPage>
        <ItemOne />
      </ItemPage>
      <ItemPage>
        <ItemTwo />
      </ItemPage>
    </section>
    <!-- center -->
    <section class="itemCenter">
      <MapPage/>
    </section>
    <!-- right -->
    <section class="itemRight">
      <ItemPage>
        <ItemThree />
      </ItemPage>
      <ItemPage>
        <ItemFour />
      </ItemPage>
    </section>
  </section>
</template>

<style scoped>
  header{
    height: 1rem;
    background-color: rgba(162, 9, 36, .2);
  }
  header h1{ 
    line-height: 1rem;
    font-size: 0.375rem;
    color: white;
    text-align: center;
  }
  .container {
    min-width: 1200px;
    max-width: 1980px;
    margin: 0 auto;
    padding: 0.125rem 0.125rem 0;
    display: flex;

  }
  .itemLeft, .itemRight{
    flex: 3;
  }
  .itemCenter{
    flex: 5;
    height: 10.5rpx;
    border: 1px solid rgb(255, 0, 89);
    border-radius: .5333rem;
    padding:  0.125rem;
    margin: .25rem;
    background-color: rgba(143, 183, 183, 0.3);
  }
</style>
