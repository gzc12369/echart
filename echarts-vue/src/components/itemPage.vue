<script setup lang='ts'>

</script>

<template>
    <div class="item">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<style scoped>
    .item {
        height: 5rem;
        border: 1px solid rgb(255, 0, 89);
        border-radius: .2667rem;
        margin: .26rem;
        background-color: rgba(143, 183, 183, 0.3);
    }
</style>
