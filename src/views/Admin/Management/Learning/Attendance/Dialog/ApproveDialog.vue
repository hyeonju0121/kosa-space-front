<template>
    <Dialog>
        <template v-slot:header>
            <p class="title" style="margin-top: 5%;">출결 승인 처리</p>
        </template>

        <template v-slot:body>
            <p class="contents">출결 승인 처리 하시겠습니까?</p>
        </template>

        <template v-slot:footer>
            <div class="footer" style="display: flex; margin-left: 3%;">
                <BaseButtonUpdate type="button" data-bs-dismiss="modal" style="margin-right: 1%;">닫기</BaseButtonUpdate>
                <BaseButtonUpdate type="button" data-bs-dismiss="modal" @click="aconfirmCheck()">승인</BaseButtonUpdate>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { ref, defineProps, defineExpose, defineEmits } from 'vue';
import attendanceAPI from '@/apis/attendanceAPI';


const midAdate = defineProps(["mid", "adate"]);


let aconfirmCheckResult = ref(false);

// 출결 승인 처리
async function personalAttendanceApprove(mid, adate) {
    try {
        console.log("mid: " + mid);
        await attendanceAPI.getTraineeAttendanceApproveConfirm(mid, adate);
        console.log("출결 승인 성공");

        // 승인 성공 시 aconfirmResult -> true 로 변경
        aconfirmCheckResult.value = true;

        // 자식 컴포넌트 -> 부모 컴포넌트로 출결 승인 결과 데이터 보내기
        emit('result', aconfirmCheckResult);

    } catch (error) {
        console.log(error);
        console.log("출결 승인 실패");
    }
}

const emit = defineEmits(["result"]);

function aconfirmCheck() {
    personalAttendanceApprove(midAdate.mid, midAdate.adate);
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
    font-weight: 400;
    font-size: 1.0rem;
    margin-left: 3%;
    text-align: center;
}

</style>
