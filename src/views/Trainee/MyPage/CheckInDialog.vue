<template>
    <Dialog>
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <p class="title">KOSA SPACE 출결 확인</p>
        </template>
        
        <template v-slot:body>
            <p class="contents">현재 시간은 오전 8시 45분입니다. (서버시간 기준)</p>
            <p class="contents">입실시 재입실이 불가합니다.</p>
            <p class="contents">입실처리하시겠습니까?</p>
        </template>

        <template v-slot:footer>
            <div class="footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right: 5%;">아니오</button>
                <!-- 자식 컴포넌트에서 모달 안에 제출 버튼을 클릭했을 때 처리하는 이벤트 정의-->
                <button type="button" class="btn btn-primary" @click="emit('submitCheckIn')">네</button>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';

const emit = defineEmits(["submitCheckIn"]);

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

.title {
    font-weight: 700;
}

.contents {
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
}

</style>