<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육과정 수정</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육과정 수정</h1>
            </div>
        </div>


        <div style="text-align: center; margin-top: 32%;">
            <Vue3Lottie :loop="4" :animationData="lottie2" class="h-100 w-100 position-absolute top-0 start-0"/>
            <!-- <Vue3Lottie :animationData="lottie" :height="300" :width="300" /> -->
            <h1 style="font-weight: 600;">교육과정 수정이 완료됐습니다.</h1>
            <h4>그동안 고생많으셨습니다.</h4>

        </div>
    </div>
</template>

<script setup>
import lottie from '@/assets/lottie_complete.json';
import lottie2 from '@/assets/lottie_complete2.json';
import { onMounted } from 'vue';

function showLottie() {
    lottie2;
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p,
span,
small,
textarea,
select {
    font-family: 'Noto Sans KR', sans-serif;
}

.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title {
    border-bottom: 2px solid #2a3954;
}

#itemTitle {
    font-weight: 700;
    font-size: 1.6rem;
}


</style>