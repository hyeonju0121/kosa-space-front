<template>
    <div>
        <!-- 교육과정 대시보드 -->
        <!-- <div class="row d-flex mb-4" style="border: 1px solid grey; border-radius: 100px;"> -->
        <div class="row d-flex mb-4">
            <div class="row mb-3">
                <h4><b style="color:#22C55E">|</b> 교육과정 대시보드</h4>
            </div>

            <div class="attandance_approve_card" style="display: flex;">
                <div class="card1">
                    <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                        <span class="card-title" style="color: rgb(115, 68, 227);">진행중인 교육과정</span>
                        <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{
                            resultCourseCntInfoData.courseTotalCnt.inprogresscnt }}건</h5>
                    </div>
                </div>

                <div class="card2 ms-3">
                    <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                        <span class="card-title" style="color: rgb(115, 68, 227);">진행예정인 교육과정</span>
                        <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{
                            resultCourseCntInfoData.courseTotalCnt.scheduledcnt }}건</h5>
                    </div>
                </div>

                <div class="card3 ms-3">
                    <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                        <span class="card-title" style="color: rgb(233, 25, 39);">종료된 교육과정</span>
                        <h5 class="reason-num" style="color: rgb(233, 25, 39);">{{
                            resultCourseCntInfoData.courseTotalCnt.completecnt }}건</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps, defineEmits } from "vue";
import educenterAPI from '@/apis/educenterAPI';

import { defineExpose } from 'vue';

defineExpose({totalCourseCnt})

const ecname = defineProps(["ecname"]);

const resultCourseCntInfoData = ref({
    ecname: "",
    courseTotalCnt: "", // inprogresscnt, scheduledcnt, completecnt 사용가능
});

// 교육과정 정보(통계) 리스트 가져오기
async function totalCourseCnt(ecname) {
    // isLoading.value = true;
    try {
        const response = await educenterAPI.getTotalCourseCnt(ecname);
        console.log("totalCourseCnt 함수 실행 response.data = " + response.data);
        resultCourseCntInfoData.value.courseTotalCnt = response.data;
        resultCourseCntInfoData.value.ecname = ecname;
        console.log("resultCourseCntInfoData.value.ecname = " + resultCourseCntInfoData.value.ecname);
        console.log("resultCourseCntInfoData.value.courseTotalCnt = " + JSON.stringify(resultCourseCntInfoData.value.courseTotalCnt));
        console.log("교육과정 정보(통계) 리스트 가져오기 성공");
        // isLoading.value = false;
        console.log("ResultData = " + JSON.stringify(resultCourseCntInfoData.value));
    } catch (error) {
        console.log("교육과정 정보(통계) 리스트 가져오기 실패");
        // isLoading.value = true;
    }
}




//const ecname = defineProps(["ecname"]);

//console.log("ecname = " + ecname.value);
//console.log("resultCourseCntInfoData = " + JSON.stringify(resultCourseCntInfoData));
</script>

<style scoped></style>
