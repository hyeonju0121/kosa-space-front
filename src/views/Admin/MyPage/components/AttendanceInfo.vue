<template>
    <div>
        <div class="row">
            <div class="row mb-3">
                <div class="d-flex justify-content-between">
                    <div>
                        <h4><b style="color:#22C55E">|</b> 교육과정 출결 현황</h4>
                    </div>
                    <div class="me-4">
                        <RouterLink to="/admin/attendance/list" class="btn btn-outline-info btn-sm">자세히 보기
                        </RouterLink>
                    </div>
                </div>
            </div>
            <table class="table align-middle" style="width: 95%;">
                <!-- 페이징 처리 4개씩. -->
                <tr v-for="item in attendance.attendanceInfo" :key="item" class="table align-middle"
                    style="width: 95%;">
                    <td style="width: 5%;"><img src="@/assets/dashboardimages/admindashboardimg1.png" alt=""></td>
                    <td style="width: 30%;"><b>{{ item.cname }}</b></td>
                    <td style="width: 35%;">
                        <div class="d-flex flex-row justify-content-end">
                            <span class="btn btn-dark btn-sm me-2">입실 : {{ item.totalCheckinCnt
                                }}명</span>
                            <span class="btn btn-dark btn-sm me-2">퇴실 : {{ item.totalCheckoutCnt
                                }}명</span>
                            <span class="btn btn-dark btn-sm me-2">결석 : {{ item.totalAbsenceCnt
                                }}명</span>
                        </div>
                    </td>
                </tr>
                <tr v-if="attendance.attendanceInfo.length >= 1">
                    <td colspan="5" class="text-center">
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                        <button v-if="attendance.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(attendance.pager.startPageNo - 1)">이전</button>
                        <button v-for="pageNo in attendance.pager.pageArray" :key="pageNo"
                            :class="(attendance.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                            class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                            {{ pageNo }}
                        </button>
                        <button v-if="attendance.pager.groupNo < attendance.pager.totalGroupNo"
                            class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(attendance.pager.endPageNo + 1)">다음</button>
                        <button class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(attendance.pager.totalPageNo)">맨끝</button>
                    </td>
                </tr>

            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from "vue";
import educenterAPI from '@/apis/educenterAPI';
import { useRoute } from 'vue-router';

import { defineExpose, onBeforeMount } from 'vue';

const route = useRoute();

// 자식 컴포넌트의 함수를 부모 컴포넌트로 전달 가능
defineExpose({ totalAttendanceInfo, submit })

const educenter = defineProps(["ecname"]);

const aPageNo = ref(route.query.pPageNo || 1);

// 교육과정 출결 현황 (오늘 날짜) 옵션 초깃값
const adate = ref({
    year: "",
    month: "",
    day: "",
});
// 현재 날짜와 시간을 가져오기
const currentDate = new Date();
// 각 구성 요소를 가져오기
adate.value.year = currentDate.getFullYear();
adate.value.month = currentDate.getMonth() + 1;
adate.value.day = currentDate.getDate();

// 날짜와 시간을 문자열로 포맷팅
adate.value.formattedDate = `${adate.value.year}-${String(adate.value.month).padStart(2, '0')}-${String(adate.value.day).padStart(2, '0')}`;

let attendance = ref({
    attendanceInfo: "",
    pager: ""
});

// ecname 기준으로 현재 진행중인 교육과정의 '교육생 출결 현황 조회'
async function totalAttendanceInfo(ecname, pageNo, adate) {
    try {
        const response = await educenterAPI.getTotalAttendanceInfo(ecname, pageNo, adate);
        attendance.value.attendanceInfo = response.data.attendanceInfo;
        attendance.value.pager = response.data.pager;
        console.log("교육과정 출결현황 정보(페이지) 리스트 가져오기 성공");
        console.log("attendance.value = " + JSON.stringify(attendance.value));
    } catch (error) {
        console.log("교육과정 출결현황 정보(페이지) 리스트 가져오기 실패");
    }
}

function submit() {
    totalAttendanceInfo(educenter.ecname, aPageNo.value, adate.value.formattedDate);
}

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    totalAttendanceInfo(educenter.ecname, argPageNo, adate.value.formattedDate);
}
</script>

<style scoped></style>
