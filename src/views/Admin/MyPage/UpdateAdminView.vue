<template>
    <div class="main p-3">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            마이페이지 > 회원정보수정
        </div>
    
        <div>
            <!-- contents -->
            <div class="headingArea">
                <div class="title">
                    <h1 id="itemTitle">회원정보수정</h1>
                </div>
            </div>

            <div class="btn_big_wrap">
                <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                <BaseButtonSubmit>완료</BaseButtonSubmit>
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
    router.push(`/admin/dashboard`);
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
    