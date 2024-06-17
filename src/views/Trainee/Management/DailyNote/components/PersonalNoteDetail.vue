<template>
    <!-- contents -->
	<div class="headingArea">
		<div class="title">
			<h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
		</div>
	</div>

    <div class="btn_big_wrap">
        <BaseButtonUpdate @click="handleUpdateBtn">수정</BaseButtonUpdate>
        <BaseButtonCancle style="margin-left: 10px;">삭제</BaseButtonCancle>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleUpdateBtn() {
    router.push('/trainee/dailynote/');
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
