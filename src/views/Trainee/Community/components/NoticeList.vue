<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h4 id="itemTitle">공지사항 목록</h4>
        </div>

        <div>
            <BaseButtonSubmit @click="handleDetailBtn" style="margin-top: 10px;">게시글 보기</BaseButtonSubmit>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleDetailBtn() {
    router.push('/trainee/community/notice/detail');
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
    font-size: 1.2rem;
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
