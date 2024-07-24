<template>
    <Dialog>
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <p class="title">KOSA SPACE 출결 확인</p>
        </template>
        
        <template v-slot:body>
            <!--<p class="contents">현재 시간은 오후 {{ todayCheckOut.hours }}시 {{ todayCheckOut.minutes }}분 {{ todayCheckOut.seconds }}입니다. (서버시간 기준)</p>-->
            <p class="contents">현재 시간은 오후 5시 55분 입니다. (서버시간 기준)</p>
            <p class="contents">퇴실시 재입실이 불가합니다.</p>
            <p class="contents">퇴실처리하시겠습니까?</p>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right: 5%;">아니오</button>
            <!-- 자식 컴포넌트에서 모달 안에 제출 버튼을 클릭했을 때 처리하는 이벤트 정의-->
            <button type="button" class="btn btn-primary" @click="handleChekOutSubmit">네</button>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import { ref } from 'vue';

const emit = defineEmits(["submitCheckOut"]);

// 현재 날짜와 시간을 가져오기
// const currentDate = new Date();

// const todayCheckOut = ref({
//     year: "",
//     month: "",
//     day: "",
//     hours: "",
//     minutes: "",
//     seconds: "",
//     formattedDate: ""
// });

// // 각 구성 요소를 가져오기
// todayCheckOut.value.year = currentDate.getFullYear();
// todayCheckOut.value.month = currentDate.getMonth() + 1;
// todayCheckOut.value.day = currentDate.getDate();
// todayCheckOut.value.hours = currentDate.getHours();
// todayCheckOut.value.minutes = currentDate.getMinutes();
// todayCheckOut.value.seconds = currentDate.getSeconds();

// // 날짜와 시간을 문자열로 포맷팅
// todayCheckOut.value.formattedDate = `${todayCheckOut.value.year}-${String(todayCheckOut.value.month).padStart(2, '0')}-
//     ${String(todayCheckOut.value.day).padStart(2, '0')} ${String(todayCheckOut.value.hours).padStart(2, '0')}:${String(todayCheckOut.value.minutes).padStart(2, '0')}:${String(todayCheckOut.value.seconds).padStart(2, '0')}`;

// 포맷팅된 날짜와 시간을 출력
//console.log(formattedDate);

const todayCheckOut = ref("2024-07-26 17:55:27");

function handleChekOutSubmit() {
    // 자식 컴포넌트 -> 부모 컴포넌트로 입실 시간 데이터 보내기
    emit('submitCheckOut', todayCheckOut);
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

.title {
    font-weight: 700;
}

.contents {
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
}
</style>
