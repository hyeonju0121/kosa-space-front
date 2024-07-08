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
                    <div class="d-flex flex-column">
                        <div class="spinner-border"
                            style="width: 8rem; height: 8rem; border-width: 1rem; color:#22C55E;" role="status">
                        </div>
                        <span class="visually ms-4 mt-3" style="color: #22C55E"><b>Loading...</b></span>
                    </div>
                </div>

                <div v-if="isLoading === false">
                    <!-- 필터 -->
                    <div class="align mt-3 mb-4" style="display: flex;">
                        <div class="InpBox">
                            <select id="educenter" title="교육장 선택" v-model.trim="resultData.ecname"
                                @change="centerChange()">
                                <!-- ecname의 값이 ''이면 "교육장 선택" 옵션 값을 보여줌 -->
                                <option :value="''" disabled selected>교육장 선택</option>
                                <option v-for="ecname in ecnames" :key="ecname" :value="ecname"> {{ ecname }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- 교육장 조회(필터) 안했을 때 ---------------------------------------------------------->
                    <div class="interview_list" v-if="resultData.ecname === ''">
                        <!-- 면접 요청 리스트 없을 경우 -->
                        <div class="empty_data">
                            <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                            <strong class="tit">교육장이 선택되지 않았습니다.</strong>
                            <div class="txt">교육장을 선택하고 강의실 조회를 눌러주세요!</div>
                        </div>
                    </div>

                    <div v-if="resultData.ecname !== ''" class="row d-flex">
                        <!-- 왼쪽 부분 -->
                        <div class="col-5 d-flex flex-column pe-5">
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
                                                resultData.courseTotalCnt.inprogresscnt }}건</h5>
                                        </div>
                                    </div>

                                    <div class="card2 ms-3">
                                        <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                                            <span class="card-title" style="color: rgb(115, 68, 227);">진행예정인 교육과정</span>
                                            <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{
                                                resultData.courseTotalCnt.scheduledcnt }}건</h5>
                                        </div>
                                    </div>

                                    <div class="card3 ms-3">
                                        <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                                            <span class="card-title" style="color: rgb(233, 25, 39);">종료된 교육과정</span>
                                            <h5 class="reason-num" style="color: rgb(233, 25, 39);">{{
                                                resultData.courseTotalCnt.completecnt }}건</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <table class="table">
                                    <thead>
                                        <th style="width: 70%;">
                                            <h4><b style="color:#22C55E">공지사항</b></h4>
                                        </th>
                                        <th style="text-align: end;">
                                            <RouterLink to="/admin/notice/list" class="btn btn-outline-info btn-sm">더보기
                                            </RouterLink>
                                        </th>
                                    </thead>
                                    <tbody class="align-middle">
                                        <!-- 테이블의 수는 8개가 적당해보임. 페이징 처리해야함. -->
                                        <tr v-for="item in resultData.noticeTotalInfo.noticeInfo" :key="item">
                                            <td>
                                                <div class="d-flex">
                                                    <span class="btn btn-info btn-sm me-2">{{ item.ncategory }}</span>
                                                    <span>{{ item.ntitle }}</span>
                                                </div>
                                            </td>
                                            <td style="text-align: end;">
                                                {{ item.ncreatedat }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <!-- 오른쪽 부분 -->
                        <div class="col-7">
                            <div class="d-flex flex-column">

                                <!-- 교육과정 진행 현황 -->
                                <div class="row mb-4">
                                    <div class="row mb-3">
                                        <div class="d-flex">
                                            <h4><b style="color:#22C55E">|</b> 교육과정 진행 현황</h4>
                                        </div>
                                        <div class="d-flex justify-content-between ms-3 mt-3 mb-2">
                                            <div class="d-flex">
                                                <span class="me-3" style="" :style="style1" @click="status1()"><b>진행
                                                        중</b></span>
                                                <span class="me-3" style="" :style="style2" @click="status2()"><b>진행
                                                        예정</b></span>
                                                <span class="me-3" style="" :style="style3" @click="status3()"><b>진행
                                                        완료</b></span>
                                            </div>
                                            <div class="me-5">
                                                <RouterLink to="/admin/course/list"
                                                    class="btn btn-outline-info btn-sm d-flex justify-content-end">더보기
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table align-middle" style="width: 95%;">
                                        <!-- 페이징 처리 4개씩 -->
                                        <tr v-for="item in resultData.courseTotalInfo.course" :key="item"
                                            class="table align-middle" style="width: 95%;">
                                            <td style="width: 40%;"><b>{{ item.cname }}</b></td>
                                            <td style="width: 30%;">{{ item.cstartdate.substring(0, 10) }} ~ {{
                                                item.cenddate.substring(0, 10) }}</td>
                                            <td style="width: 30%;">
                                                <div class="d-flex flex-row justify-content-between">
                                                    <span style="font-size: 8px;">2024.06.19 기준</span>
                                                    <span style="font-size: 8px;">70% (84 / 105)</span>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped bg-success"
                                                        style="width:70%">70%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-if="resultData.courseTotalInfo.course.length >= 1">
                                            <td colspan="5" class="text-center">
                                                <button class="btn btn-outline-primary btn-sm me-1"
                                                    @click="changePageNo(1)">처음</button>
                                                <button v-if="resultData.courseTotalInfo.pager.groupNo > 1"
                                                    class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.courseTotalInfo.pager.startPageNo - 1)">이전</button>
                                                <button v-for="pageNo in resultData.courseTotalInfo.pager.pageArray"
                                                    :key="pageNo"
                                                    :class="(resultData.courseTotalInfo.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                                                    class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                                                    {{ pageNo }}
                                                </button>
                                                <button
                                                    v-if="resultData.courseTotalInfo.pager.groupNo < resultData.courseTotalInfo.pager.totalGroupNo"
                                                    class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.courseTotalInfo.pager.endPageNo + 1)">다음</button>
                                                <button class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.courseTotalInfo.pager.totalPageNo)">맨끝</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <!-- 교육과정 출결 현황 -->
                                <div class="row">
                                    <div class="row mb-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h4><b style="color:#22C55E">|</b> 교육과정 출결 현황</h4>
                                            </div>
                                            <div class="me-4">
                                                <RouterLink to="/admin/attendance/list"
                                                    class="btn btn-outline-info btn-sm">더보기
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table align-middle" style="width: 95%;">
                                        <!-- 페이징 처리 4개씩. -->
                                        <tr v-for="item in resultData.attendanceTotalInfo.attendanceInfo" :key="item"
                                            class="table align-middle" style="width: 95%;">
                                            <td style="width: 5%;"><img
                                                    src="@/assets/dashboardimages/admindashboardimg1.png" alt=""></td>
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
                                        <tr v-if="resultData.attendanceTotalInfo.attendanceInfo.length >= 1">
                                            <td colspan="5" class="text-center">
                                                <button class="btn btn-outline-primary btn-sm me-1"
                                                    @click="changePageNo(1)">처음</button>
                                                <button v-if="resultData.attendanceTotalInfo.pager.groupNo > 1"
                                                    class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.attendanceTotalInfo.pager.startPageNo - 1)">이전</button>
                                                <button v-for="pageNo in resultData.attendanceTotalInfo.pager.pageArray"
                                                    :key="pageNo"
                                                    :class="(resultData.attendanceTotalInfo.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                                                    class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                                                    {{ pageNo }}
                                                </button>
                                                <button
                                                    v-if="resultData.attendanceTotalInfo.pager.groupNo < resultData.attendanceTotalInfo.pager.totalGroupNo"
                                                    class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.attendanceTotalInfo.pager.endPageNo + 1)">다음</button>
                                                <button class="btn btn-outline-info btn-sm me-1"
                                                    @click="changePageNo(resultData.attendanceTotalInfo.pager.totalPageNo)">맨끝</button>
                                            </td>
                                        </tr>

                                    </table>
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
import noticeAPI from '@/apis/noticeAPI';

const route = useRoute();
const router = useRouter();

// 비동기 작업을 기다린 후, 화면 랜더링을 위해 로딩 상태 변수 추가 --> 서버로부터 데이터를 받아오기 전까지 spinner를 보여줌
const isLoading = ref(true);

// 교육장 리스트를 받아올 변수
let ecnames = ref("");

// 교육과정 진행 현황의 옵션 초깃값
let cstatus = ref("진행중");


// 교육과정 출결 현황 (오늘 날짜) 옵션 초깃값
const adate = ref({
    year: "",
    month: "",
    day: "",
    hours: "",
    minutes: "",
    seconds: "",
    formattedDate: ""
});
// 현재 날짜와 시간을 가져오기
const currentDate = new Date();
// 각 구성 요소를 가져오기
adate.value.year = currentDate.getFullYear();
adate.value.month = currentDate.getMonth() + 1;
adate.value.day = currentDate.getDate();


// 날짜와 시간을 문자열로 포맷팅
adate.value.formattedDate = `${adate.value.year}-${String(adate.value.month).padStart(2, '0')}-${String(adate.value.day).padStart(2, '0')}`;


// 컴포넌트가 마운트 된 후 실행
onMounted(() => {
    listCenterSet();
});

// 값을 받고 전달하기 위한 상태 변수
const resultData = ref({
    ecname: "",
    cname: "",
    courseTotalCnt: "", // inprogresscnt, scheduledcnt, completecnt 사용가능
    courseTotalInfo: { course: "", pager: "" }, // course : { ecno, ecname, cno, cname, cstatus, cstartdate, cenddate, crequireddate } // pager : { totalRows, ... } -> Pager DTO 참고
    attendanceTotalInfo: { attendanceInfo: "", pager: "" }, // attendanceInfo : {  }
    noticeTotalInfo: { noticeInfo: "", pager: "" }, // noticeInfo: { ncategory, ntitle, ncreatedat, ecname }, pager : { totalRows, ... }
});

// 등록된 교육장 불러오기
async function listCenterSet() {
    isLoading.value = true;
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1); // 인덱스 0번째 요소 '전체'를 뺌
        console.log("교육장 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("ResultData = " + JSON.stringify(resultData.value));
    } catch (error) {
        console.log("교육장 리스트 가져오기 실패");
    }
}

// 교육과정 정보(통계) 리스트 가져오기
async function totalCourseCnt(ecname) {
    isLoading.value = true;
    try {
        const response = await educenterAPI.getTotalCourseCnt(ecname);
        resultData.value.courseTotalCnt = response.data;
        console.log("교육과정 정보(통계) 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("ResultData = " + JSON.stringify(resultData.value));
    } catch (error) {
        console.log("교육과정 정보(통계) 리스트 가져오기 실패");
        isLoading.value = true;
    }
}

// 교육과정 진행 현황 조회를 위한 변수 선언
const pPageNo = ref(route.query.pPageNo || 1);
const aPageNo = ref(route.query.aPageNo || 1);
const nPageNo = ref(route.query.nPageNo || 1);

// ecname 기준으로 교육상태에 따른 '교육과정 진행 현황 조회'
async function totalCourseInfo(ecname, cstatus, pageNo) {
    isLoading.value = true;
    try {
        const response = await educenterAPI.getTotalCourseInfo(ecname, cstatus, pageNo);
        resultData.value.courseTotalInfo.course = response.data.course;
        resultData.value.courseTotalInfo.pager = response.data.pager;
        console.log("교육과정 진행현황 정보(페이지) 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("resultData.value.courseTotalInfo = " + JSON.stringify(resultData.value.courseTotalInfo));
        console.log("resultData.value.courseTotalInfo.course = " + JSON.stringify(resultData.value.courseTotalInfo.course));
    } catch (error) {
        console.log("교육과정 진행현황 정보(페이지) 리스트 가져오기 실패");
        isLoading.value = true;
    }
}

// ecname 기준으로 현재 진행중인 교육과정의 '교육생 출결 현황 조회'
async function totalAttendanceInfo(ecname, pageNo, adate) {
    isLoading.value = true;
    try {
        const response = await educenterAPI.getTotalAttendanceInfo(ecname, pageNo, adate);
        resultData.value.attendanceTotalInfo.attendanceInfo = response.data.attendanceInfo;
        resultData.value.attendanceTotalInfo.pager = response.data.pager;
        console.log("교육과정 출결현황 정보(페이지) 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("resultData.value.attendanceTotalInfo = " + JSON.stringify(resultData.value.attendanceTotalInfo));
        console.log("resultData.value.attendanceTotalInfo.attendanceInfo = " + JSON.stringify(resultData.value.attendanceTotalInfo.attendanceInfo));
    } catch (error) {
        console.log("교육과정 출결현황 정보(페이지) 리스트 가져오기 실패");
        isLoading.value = true;
    }
}

// ecname 기준으로 공지사항 조회
async function totalNoticeInfo(ecname, pageNo) {
    isLoading.value = true;
    try {
        console.group("totalNoticeInfo 검사");
        console.log("ecname = " + ecname);
        console.log("pageNo = " + pageNo);
        const response = await noticeAPI.getEcnameNoticeList(ecname, pageNo);
        console.log("response.date = " + response.data);
        // resultData.value.noticeTotalInfo.noticeInfo = response.data.noticeInfo;
        // resultData.value.noticeTotalInfo.pager = response.data.pager;
        console.log("response.data" + response.data);
        console.log("response.data" + JSON.stringify(response.data));
        console.groupEnd();
        console.log("교육과정 공지사항 정보(페이지) 리스트 가져오기 성공");
        isLoading.value = false;
        console.log("resultData.value.noticeTotalInfo = " + JSON.stringify(resultData.value.noticeTotalInfo));
        console.log("resultData.value.noticeTotalInfo.noticeInfo = " + JSON.stringify(resultData.value.noticeTotalInfo.noticeInfo));
    } catch (error) {
        console.log("교육과정 공지사항 정보(페이지) 리스트 가져오기 실패");
        isLoading.value = true;
    }
}

// -----

// 교육장 필터값 변경에 따른 함수
function centerChange() {
    console.group("centerChange 실행")
    // console.log("resultData.value.ecname = " + resultData.value.ecname);
    // listCourseSet(resultData.value.ecname);
    totalCourseCnt(resultData.value.ecname);  // 교육장 값에 따른 대시보드 건수 리로드
    console.log("resultData.value.courseTotalInfo.cstatus = " + resultData.value.courseTotalInfo.cstatus);
    // 교육과정 진행 현황의 초깃값은 '진행중' 상태로 보여준다.
    if (resultData.value.courseTotalInfo.cstatus === undefined) {
        console.log("cstatus는 undefined");
        console.log("resultData.value.ecname = " + resultData.value.ecname);
        console.log("cstatus.value = " + cstatus.value);
        console.log("pPageNo = " + pPageNo.value);
        totalCourseInfo(resultData.value.ecname, cstatus.value, pPageNo.value);
    } else {
        console.log("cstatus는 값이 있음");
        totalCourseInfo(resultData.value.ecname, resultData.value.courseTotalInfo.cstatus, pPageNo.value);
    }
    console.log("교육과정 출결 현황 조회");
    console.log("adate.value = " + adate.value);

    // 교육과정 출결 현황 조회
    // totalAttendanceInfo(resultData.value.ecname, aPageNo.value, adate.value.formattedDate); 
    totalAttendanceInfo(resultData.value.ecname, aPageNo.value, "2024-07-02 09:00:21");

    // 교육장에 따른 공지사항 조회
    totalNoticeInfo(resultData.value.ecname, nPageNo.value);

    console.groupEnd();
    status1();
}

// 교육과정 진행 현황 옵션 style변수
let style1 = ref("border-bottom: 4px solid #22C55E; color:#22C55E");
let style2 = ref("color: black");
let style3 = ref("color: black");

function status1() {
    console.log("status1 클릭");
    // resultData.value.courseTotalInfo.course.cstatus = "진행중";
    // console.log(resultData.value.courseTotalInfo.course.cstatus);
    totalCourseInfo(resultData.value.ecname, "진행중", pPageNo.value);
    style1.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
    style2.value = ref("color: black");
    style3.value = ref("color: black");
}

function status2() {
    console.log("status2 클릭");
    // resultData.value.courseTotalInfo.course.cstatus = "진행예정";
    // console.log(resultData.value.courseTotalInfo.course.cstatus);
    totalCourseInfo(resultData.value.ecname, "진행예정", pPageNo.value);
    style1.value = "color: black";
    style2.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
    style3.value = "color: black";
}

function status3() {
    console.log("status3 클릭");
    // resultData.value.courseTotalInfo.course.cstatus = "진행완료";
    // console.log(resultData.value.courseTotalInfo.course.cstatus);
    totalCourseInfo(resultData.value.ecname, "진행완료", pPageNo.value);
    style1.value = "color: black";
    style2.value = "color: black";
    style3.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
}

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    // router.push(`/admin/dashboard/BoardList?pageNo=${argPageNo}`);
    // pageNo.value = argPageNo;
    console.log("페이지 이동 argPageNo = " + argPageNo);
    totalCourseInfo(resultData.value.ecname, resultData.value.courseTotalInfo.cstatus, argPageNo);
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