<template>
    <div class="wrapper">
        <!--slidebar-->
        <TraineeSlidebar/>
        <RouterView/>

    </div>
</template>

<script setup>
import AdminSlidebar from "@/components/Slidebar/AdminSlidebar.vue";
import TraineeSlidebar from "./components/Slidebar/TraineeSlidebar.vue";
import ProfessorSlidebar from "./components/Slidebar/ProfessorSlidebar.vue";
import { RouterView } from "vue-router";

</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: #f0f4fd;
}
</style>
