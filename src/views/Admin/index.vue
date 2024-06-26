<template>
    <div class="wrapper">
        <!--slidebar-->
        <AdminSlidebar />
        
        <RouterView/>
    </div>
</template>

<script setup>
import AdminSlidebar from '@/components/Slidebar/AdminSlidebar.vue';
</script>

<style>
.wrapper {
  display: flex;
  background-color: #ffffff;
}
</style>
