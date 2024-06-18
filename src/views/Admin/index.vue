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

<style scoped>
.wrapper {
  display: flex;
  background-color: #f0f4fd;
}
</style>
