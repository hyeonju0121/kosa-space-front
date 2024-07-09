<template>
    <div class="main p-3" style="margin-left: 25px; width: 1550px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>마이페이지 > 대시보드</span>
        </div>

        <div>
            <!-- contents -->
            <div class="headingArea">
                <div class="title">
                    <h1 id="itemTitle">대시보드</h1>
                </div>

                <!-- 스피너 -->
                <div v-if="isLoading === true" class="spinner d-flex justify-content-center align-items-center"
                    style="height: 800px">
                    <!-- <div class="spinner d-flex justify-content-center align-items-center"
                    style="height: 800px">-->
                    <div class="d-flex flex-column">
                        <div class="spinner-border"
                            style="width: 8rem; height: 8rem; border-width: 1rem; color:#22C55E;" role="status">
                        </div>
                        <span class="visually ms-4 mt-3" style="color: #22C55E"><b>Loading...</b></span>
                    </div>
                </div>

                <div v-if="isLoading === false">
                    <div>
                        <!-- 필터 -->
                        <div class="align mt-3 mb-4" style="display: flex;">
                            <div class="InpBox">
                                <select id="educenter" title="교육장 선택" v-model.trim="ecname" @change="centerChange()">
                                    <!-- ecname의 값이 ''이면 "교육장 선택" 옵션 값을 보여줌 -->
                                    <option :value="''" disabled selected>교육장 선택</option>
                                    <option v-for="ecname in ecnames" :key="ecname" :value="ecname"> {{ ecname }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- 교육장 조회(필터) 안했을 때 ---------------------------------------------------------->
                        <div class="interview_list" v-if="ecname === ''">
                            <!-- 면접 요청 리스트 없을 경우 -->
                            <div class="empty_data">
                                <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                                <strong class="tit">교육장이 선택되지 않았습니다.</strong>
                                <div class="txt">교육장을 선택하고 강의실 조회를 눌러주세요!</div>
                            </div>
                        </div>

                        <div v-if="ecname !== ''" class="row d-flex">
                            <!-- 왼쪽 부분 -->
                            <div class="col-5 d-flex flex-column pe-5" style="height: 900px;">
                                <!-- Cnt들어갈부분 -->
                                <CourseCntInfo :ecname="ecname" ref="$courseCnt" style="height: 200px;" />
                                <!-- 공지목록 들어갈 부분 -->
                                <NoticeInfo :ecname="ecname" ref="$noticeInfo" style="height: 700px;" />
                            </div>
                            <!-- 오른쪽 부분 -->
                            <div class="col-7">
                                <div class="d-flex flex-column" style="height: 900px;">

                                    <!-- 교육과정 진행 현황 -->
                                    <CourseInfo :ecname="ecname" ref="$courseInfo" style="height: 450px;"/>
                                    <!-- 교육과정 출결 현황 -->
                                    <AttendanceInfo :ecname="ecname" ref="$attendanceInfo" style="height: 450px;"/>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import { useRoute, useRouter } from 'vue-router';

import AttendanceInfo from './components/AttendanceInfo.vue';
import CourseCntInfo from './components/CourseCntInfo.vue';
import CourseInfo from './components/CourseInfo.vue';
import NoticeInfo from './components/NoticeInfo.vue';

const route = useRoute();
const router = useRouter();

// 비동기 작업을 기다린 후, 화면 랜더링을 위해 로딩 상태 변수 추가 --> 서버로부터 데이터를 받아오기 전까지 spinner를 보여줌
const isLoading = ref(true);

// 교육장 리스트를 받아올 변수
let ecnames = ref("");

// 교육장 리스트에서 선택한 값을 받아올 변수
let ecname = ref("");

// 컴포넌트가 마운트 된 후 실행
onMounted(() => {
    listCenterSet();
});

// 등록된 교육장 불러오기
async function listCenterSet() {
    isLoading.value = true;
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1); // 인덱스 0번째 요소 '전체'를 뺌
        console.log("교육장 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("ResultData = " + JSON.stringify(ecnames.value));
    } catch (error) {
        console.log("교육장 리스트 가져오기 실패");
    }
}

// ----- 자식 컴포넌트의 함수를 부모 컴포넌트에서 호출 --------------------------------------------
const $courseCnt = ref();
const $courseInfo = ref();
const $attendanceInfo = ref();
const $noticeInfo = ref();

// CourseCntInfo 자식 컴포넌트에 선언된 totalCourseCnt(ecname) 메소드 호출
function handleCourseCnt(ecname) {
    $courseCnt.value.totalCourseCnt(ecname);
}

// CourseInfo 자식 컴포넌트에 선언된 totalCourseInfo(ecname, cstatus, pageNo) 메소드 호출
function handleCourseInfo(ecname, cstatus, pageNo) {
    $courseInfo.value.totalCourseInfo(ecname, cstatus, pageNo);
}

// CourseInfo 자식 컴포넌트에 선언된 status1() 메소드 호출
function handleCourseInfoStatus1() {
    $courseInfo.value.status1();
}

// AttendanceInfo 자식 컴포넌트에 선언된 submit() 메소드 호출
function handleAttendanceInfo() {
    $attendanceInfo.value.submit();
}

// NoticeInfo 자식 컴포넌트에 선언된 submit() 메소드 호출
function handleNoticeInfo() {
    $noticeInfo.value.submit();
}

// 교육장 필터값 변경에 따른 함수
function centerChange() {
    console.log("선택된 ecname: " + ecname.value);
    console.group("centerChange 실행")
    handleCourseCnt(ecname.value);  // 교육장 값에 따른 대시보드 건수 리로드
    // 교육과정 진행 현황의 초깃값은 '진행중' 상태로 보여준다.
    handleCourseInfoStatus1();  // CourseInfo 자식 컴포넌트에서 가져온 함수를 호출

    // 교육과정 출결 현황 조회
    handleAttendanceInfo();

    // 교육장에 따른 공지사항 조회
    handleNoticeInfo();

    console.groupEnd();
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

/* table (현주 추가) ------------------------------------*/
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #22C55E;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.createbtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
    margin-left: 10px;
}


/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* 필터 */
/* select option css */
.InpBox {
    display: inline-block;
    vertical-align: top;
}

.InpBox select {
    padding: 0 28px 0 12px;
    width: 100%;
    height: 40px;
    border: 1px solid #232323;
    border-radius: 4px;
    box-sizing: border-box;
    color: #232323;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    background-color: #dbdbdb0e;
    cursor: pointer;
}


/* 카드 부분 */
.card-title {
    text-align: center;
    color: white;
    font-weight: 500;
    margin-left: 2%;
}

.reason-num {
    text-align: center;
    color: white;
    margin-top: 2%;
    font-size: 1.7rem;
}

.card1 {
    width: 250px;
    height: 100px;
    border: 1px solid rgb(115, 68, 227);
    border-radius: 16px;
    box-sizing: border-box;
    background-color: rgb(236, 236, 255);
}

.card2 {
    width: 250px;
    height: 100px;
    border: 1px solid rgb(36, 142, 147);
    border-radius: 16px;
    box-sizing: border-box;
    background-color: rgb(227, 255, 250);
}

.card3 {
    width: 250px;
    height: 100px;
    border: 1px solid rgb(233, 25, 39);
    border-radius: 16px;
    box-sizing: border-box;
    background-color: rgb(254, 239, 238);
}

/* 필터 적용 안할 때 리스트  */
.interview_list .empty_data {
    padding: 72px 0 80px;
    border-bottom: 1px solid #ebedf2;
    color: #575d6d;
    text-align: center;
}

.empty_data img {
    display: block;
    margin: 0 auto;
}

.empty_data .tit {
    display: block;
    margin: 24px auto 4px;
    color: #5c667b;
    font-size: 18px;
    line-height: 32px;
}

.empty_data .txt {
    margin: 0 auto 24px;
    color: #475067;
    font-size: 14px;
    line-height: 24px;
}
</style>