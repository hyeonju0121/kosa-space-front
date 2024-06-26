<template>
    <div class="wrapper">
        <RouterView/>
    </div>
</template>

<script setup>
import AdminSlidebar from "@/components/Slidebar/AdminSlidebar.vue";
import TraineeSlidebar from "./components/Slidebar/TraineeSlidebar.vue";
import ProfessorSlidebar from "./components/Slidebar/ProfessorSlidebar.vue";
import { RouterView } from "vue-router";

</script>

<style>
.wrapper {
  display: flex;
  background-color: #ffffff;
}
</style>
