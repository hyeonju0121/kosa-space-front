<template>
    <div class="row">
        <div class="content">
            <div class="box">
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
                <div class="mb-4" style="height: 160px;">
                    <table class="table align-middle" style="width: 95%;">
                        <!-- 페이징 처리 4개씩. -->
                        <tr v-for="item in attendance.attendanceInfo" :key="item" class="table align-middle"
                            style="width: 95%;">
                            <td style="width: 5%;"><img src="@/assets/dashboardimages/admindashboardimg1.png" alt="">
                            </td>
                            <td style="width: 30%;">
                                <span @click="goAttendanceList(item.cname)">
                                    <span class="courseInfo-span" style="cursor: pointer;">{{ item.cname }}</span>
                                </span>
                            </td>
                            <td style="width: 35%;">
                                <div class="d-flex flex-row justify-content-end">
                                    <span class="btn btn-dark btn-sm me-2">입실 : {{ item.totalCheckinCnt }}명</span>
                                    <span class="btn btn-dark btn-sm me-2">퇴실 : {{ item.totalCheckoutCnt }}명</span>
                                    <span class="btn btn-dark btn-sm me-2">결석 : {{ item.totalAbsenceCnt }}명</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="display: flex; justify-content: center; padding-top: 60px">
                    <div v-if="attendance.attendanceInfo.length >= 1">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from "vue";
import educenterAPI from '@/apis/educenterAPI';
import { useRoute, useRouter } from 'vue-router';

import { defineExpose, onBeforeMount } from 'vue';

const route = useRoute();
const router = useRouter();

// 자식 컴포넌트의 함수를 부모 컴포넌트로 전달 가능
defineExpose({ totalAttendanceInfo, submit })

const educenter = defineProps(["ecname"]);

const aPageNo = ref(route.query.aPageNo || 1);

onBeforeMount(() => {
    console.group("AttendanceInfo 컴포넌트 마운트 직전");
    //totalAttendanceInfo(educenter.ecname, aPageNo.value, adate.value.formattedDate);
    totalAttendanceInfo(educenter.ecname, aPageNo.value, '2024-07-26');
    console.groupEnd();
});


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
    //totalAttendanceInfo(educenter.ecname, aPageNo.value, adate.value.formattedDate);
    totalAttendanceInfo(educenter.ecname, aPageNo.value, '2024-07-26');
}

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    //totalAttendanceInfo(educenter.ecname, argPageNo, adate.value.formattedDate);
    totalAttendanceInfo(educenter.ecname, argPageNo, '2024-07-26');
}

function goAttendanceList(cname) {
    router.push({
        path: '/admin/attendance/list',
        query: {
            ecname: educenter.ecname,
            cname: cname
        }
    })
}
</script>

<style scoped>
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
select,
b {
    font-family: 'Noto Sans KR', sans-serif;
}

.courseInfo-span {
    font-weight: 500;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.box {
    flex: 1;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-right: 10px;
}

.box:last-child {
    margin-right: 0;
}

.box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.box-header h2 {
    margin: 0;
    font-size: 1.2em;
}

.box-header button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
}
</style>
