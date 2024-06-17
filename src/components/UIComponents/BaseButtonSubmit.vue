<template>
    <div>
        <button type="button" class="submitbtn">
            <slot>button</slot>
        </button>
    </div>
</template>

<script setup>
</script>

<style scoped>
.submitbtn {
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
    background-color: #232323;
    border: 1px solid black;
    margin-left: 10px;
}
</style>