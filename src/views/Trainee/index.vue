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

<style>
.wrapper {
  display: flex;
  background-color: #ffffff;
}
</style>
