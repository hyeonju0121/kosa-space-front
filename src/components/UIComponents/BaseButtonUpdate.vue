<template>
    <button type="button" class="updatebtn">
        <slot>update button</slot>
    </button>
</template>

<script setup>
</script>

<style scoped>
.updatebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    color: white;
    background-color: #22C55E;
    border: 1px solid white;
    margin-left: 10px;
}
</style>
