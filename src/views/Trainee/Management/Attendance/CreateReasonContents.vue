<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>출결 관리 > 출결 변경 신청</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">조퇴 및 결석 사유 등록</h1>
            </div>

            <div class="btn_big_wrap">
                <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCancle() {
    router.push(`/trainee/attendance/detail`);
}

function handleSubmit() {
    router.push(`/trainee/attendance/detail`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}
</style>
