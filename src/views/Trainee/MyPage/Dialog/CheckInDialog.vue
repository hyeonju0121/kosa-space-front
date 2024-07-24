<template>
    <Dialog>
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <p class="title" style="margin-top: 5%;">KOSA SPACE 출결 확인</p>
        </template>
        
        <template v-slot:body>
           <!-- <p class="contents">현재 시간은 오전 {{ todayCheckIn.hours }}시 {{ todayCheckIn.minutes }}분 {{ todayCheckIn.seconds }}초 입니다. (서버시간 기준)</p> -->
            <p class="contents">현재 시간은 오전 8시 50분 27초 입니다. (서버시간 기준)</p>
            <p class="contents">입실처리하시겠습니까?</p>
            <p class="contents">퇴실 시 반드시 퇴실처리를 하셔야 출석으로 인정됩니다.</p>
        </template>

        <template v-slot:footer>
            <div class="footer">
                <BaseButtonCancle type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="margin-right: 5%;">아니오</BaseButtonCancle>
                <!-- 자식 컴포넌트에서 모달 안에 제출 버튼을 클릭했을 때 처리하는 이벤트 정의-->
                <BaseButtonUpdate type="button" class="btn btn-primary" @click="handleChekinSubmit">네</BaseButtonUpdate>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { ref } from 'vue';

const emit = defineEmits(["submitCheckIn"]);

// ----------- 현재 시간 가져오는 부분은 임시로 주석 처리함 (시연할 때, 현재 시간 기준으로 보내게 되면 입실 퇴실 다 못보여줌)
// 현재 날짜와 시간을 가져오기
// const currentDate = new Date();

// const todayCheckIn = ref({
//     year: "",
//     month: "",
//     day: "",
//     hours: "",
//     minutes: "",
//     seconds: "",
//     formattedDate: ""
// });

// 각 구성 요소를 가져오기
// todayCheckIn.value.year = currentDate.getFullYear();
// todayCheckIn.value.month = currentDate.getMonth() + 1;
// todayCheckIn.value.day = currentDate.getDate();
// todayCheckIn.value.hours = currentDate.getHours();
// todayCheckIn.value.minutes = currentDate.getMinutes();
// todayCheckIn.value.seconds = currentDate.getSeconds();

// 날짜와 시간을 문자열로 포맷팅
// todayCheckIn.value.formattedDate = `${todayCheckIn.value.year}-${String(todayCheckIn.value.month).padStart(2, '0')}-${String(todayCheckIn.value.day).padStart(2, '0')} ${String(todayCheckIn.value.hours).padStart(2, '0')}:${String(todayCheckIn.value.minutes).padStart(2, '0')}:${String(todayCheckIn.value.seconds).padStart(2, '0')}`;

// 포맷팅된 날짜와 시간을 출력
// console.log(formattedDate);

const todayCheckIn = ref("2024-07-26 08:50:27");

function handleChekinSubmit() {
    // 자식 컴포넌트 -> 부모 컴포넌트로 입실 시간 데이터 보내기
    emit('submitCheckIn', todayCheckIn);
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
    font-weight: 600;
}

.contents {
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
}

</style>