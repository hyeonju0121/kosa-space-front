<template>
        <button type="button" class="canclebtn">
            <slot>button</slot>
        </button>
</template>

<script setup>
</script>

<style scoped>
.canclebtn {
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
    background-color: white;
    border: 1px solid black;
}
</style>