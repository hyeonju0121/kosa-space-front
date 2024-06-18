<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>출결 관리 > 개인별 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 출결 현황 조회</h1>
            </div>

            <div>
                <BaseButtonUpdate @click="handleCreateBtn">사유 작성</BaseButtonUpdate>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push(`/trainee/attendance/reason/create`)
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

</style>
