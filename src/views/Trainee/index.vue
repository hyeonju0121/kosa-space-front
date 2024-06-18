<template>
    <div class="wrapper">
        <!--slidebar-->
        <TraineeSlidebar />
        <RouterView/>
    </div>
</template>

<script setup>
import TraineeSlidebar from '@/components/Slidebar/TraineeSlidebar.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #f0f4fd;
}
</style>
