<template>
    <!-- contents -->
	<div class="headingArea">
		<div class="title">
			<h1 id="itemTitle">교육과정 목록</h1>
		</div>

        <div>
            <BaseButtonCreate class="mt-3" @click="handleCreateBtn">교육과정 등록</BaseButtonCreate>
        
            <div class="btn_big_wrap">
                <BaseButtonUpdate @click="handleUpdateBtn">수정</BaseButtonUpdate>
                <BaseButtonCancle style="margin-left: 10px;">삭제</BaseButtonCancle>
            </div>
        </div>
	</div>
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/course/create');
}

function handleUpdateBtn() {
    router.push('/admin/course/update');
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
