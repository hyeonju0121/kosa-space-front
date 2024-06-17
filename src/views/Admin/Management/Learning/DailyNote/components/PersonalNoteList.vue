<template>
    <!-- contents -->
	<div class="headingArea">
		<div class="title">
			<h1 id="itemTitle">개인별 데일리 과제 목록 조회</h1>
		</div>

        <div>
            <BaseButtonUpdate class="mt-3" @click="handleDailyNoteBtn">과제 상세 보기</BaseButtonUpdate>
        </div>
	</div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleDailyNoteBtn() {
    router.push('/admin/dailynote/trainee/note/detail');
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

</style>
