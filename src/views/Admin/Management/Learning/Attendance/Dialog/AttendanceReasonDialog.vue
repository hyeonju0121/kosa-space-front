<template>
    <Dialog>
        <template v-slot:header>
            <p class="title" style="margin-top: 5%;">조퇴 및 결석 사유</p>
        </template>

        <template v-slot:body>
            <p class="title_mark">출결 유형</p>
            <p class="contents">{{ reasonInfo.ancategory }}</p>
            <p class="title_mark">사유</p>
            <p class="contents">{{ reasonInfo.anreason }}</p>
            <p class="title_mark">인증 서류</p>
            <p class="contents">인증 서류 : {{ reasonInfo.anattach }}</p>
        </template>

        <template v-slot:footer>
            <div class="footer" style="display: flex; margin-left: 3%; justify-content: center;">
                <BaseButtonUpdate type="button" data-bs-dismiss="modal" style="margin-right: 1%;">닫기</BaseButtonUpdate>
                <BaseButtonUpdate v-if="midAdate.anconfirm === false" type="button" data-bs-dismiss="modal" @click="anconfirmCheck()">승인</BaseButtonUpdate>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { ref, defineProps, defineExpose, onMounted } from 'vue';
import attendanceAPI from '@/apis/attendanceAPI';


const midAdate = defineProps(["mid", "adate", "anconfirm"]);

onMounted(() => {
    console.log()
    console.log()
    personalAttendanceReason(midAdate.mid, midAdate.adate);
})

const reasonInfo = ref({
    // ancategory: "결석",
    // anreason: "새벽부터 몸이 좋지 않아서 오늘 아침에 병원을 갔다와야 할 것 같습니다.",
    // anattach: null
});

// 교육생 사유 가져오기
async function personalAttendanceReason(mid, adate) {
    try {
        const response = await attendanceAPI.getTraineeAttedanceReason(mid, adate);
        reasonInfo.value = response.data;
        console.log(response.data);
        console.log("개인 출결 현황 정보 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("개인 출결 현황 정보 가져오기 실패");
    }
}

//let anconfirmResult1 = ref(false);
//let anconfirmResult2 = ref(false);


const anconfirmResult = ref({
    mid: midAdate.mid,
    result1: false,
    result2: false
});



// 사유 승인 처리
async function personalAttendanceReasonApprove(mid, adate) {
    try {
        await attendanceAPI.getTraineeAttendaceReasonApproveConfirm(mid, adate);
        console.log("출결 사유에 대한 승인 성공");

        // 승인 성공 시 anconfirmResult -> true 로 변경

        anconfirmResult.value.result1 = true;
        anconfirmResult.value.result2 = true;

        //console.log("anconfirmResult.value : " + anconfirmResult1.value);
        // 자식 컴포넌트 -> 부모 컴포넌트로 사유 승인 결과 데이터 보내기
        emit('anconfirmResult', anconfirmResult);

    } catch (error) {
        console.log(error);
        console.log("출결 사유에 대한 승인 실패");
    }
}

const emit = defineEmits(["anconfirmResult"]);

function anconfirmCheck() {
    personalAttendanceReasonApprove(midAdate.mid, midAdate.adate);
    // // 자식 컴포넌트 -> 부모 컴포넌트로 사유 승인 결과 데이터 보내기
    // console.log("결과: (anconfirmResult.value)" + anconfirmResult.value);
    // emit('anconfirmResult', anconfirmResult);
}


/*
function result() {
    return anconfirmResult.value;
}
*/

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
}

.title_mark {
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(127, 127, 127);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgba(226, 229, 231, 0.69);
}
</style>
