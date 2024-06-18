<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 목록</h1>
            </div>

            <div>
                <BaseButtonCreate class="mt-3" @click="handleCreateBtn">공지사항 등록</BaseButtonCreate>
            
                <div class="btn_big_wrap">
                    <BaseButtonSubmit @click="handleDetailBtn">게시글 보기</BaseButtonSubmit>
                    <BaseButtonUpdate @click="handleUpdateBtn">수정</BaseButtonUpdate>
                    <BaseButtonCancle style="margin-left: 10px;">삭제</BaseButtonCancle>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleDetailBtn() {
    router.push('/admin/notice/detail');
}

function handleCreateBtn() {
    router.push('/admin/notice/create');
}

function handleUpdateBtn() {
    router.push('/admin/notice/update');
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
