<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 출결 승인 처리</span>
        </div>

        <!-- contents -->
        <div class="headingArea" style="margin-bottom: 2%;">
            <div class="title">
                <h1 id="itemTitle">교육생 출결 승인 처리</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="교육장 선택" v-model="filter.ecname">
                        <option selected disabled value="">교육장 선택</option>
                        <option value="전체">전체</option>
                        <option value="송파교육센터">송파교육센터</option>
                        <option value="가산교육센터">가산교육센터</option>
                        <option value="혜화교육센터">혜화교육센터</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select id="course" title="교육과정 선택" v-model="filter.cname">
                        <option selected disabled value="">교육과정 선택</option>
                        <option value="2024M2">MSA 기반 Full Stack 개발 전문가 양성과정 2차</option>
                        <option value="2024C1">클라우드 솔루션즈 아키텍트 양성과정 1차</option>
                    </select>
                </div>
                <button type="button" class="BtnType SizeM" @click="handleSubmitFilter1" style="margin-left: 1%;">
                    승인 조회
                </button>
            </div>
        </form>

        <div class="attandance_approve_card" style="display: flex;" v-if="!submitStatus">
            <div class="card1">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(115, 68, 227);">오늘 제출된 출결 사유</span>
                    <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{ reasonDashboard.allnum }}건</h5>
                </div>
            </div>
            <div class="card2" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(36, 142, 147);">승인</span>
                    <h5 class="reason-num" style="color: rgb(36, 142, 147);">{{ reasonDashboard.approvenum }}건</h5>
                </div>
            </div>
            <div class="card3" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(233, 25, 39);">미승인</span>
                    <h5 class="reason-num" style="color: rgb(233, 25, 39);">{{ reasonDashboard.notapprovednum }}건</h5>
                </div>
            </div>
        </div>

        <div class="attandance_approve_card" style="display: flex;" v-if="submitStatus">
            <div class="card1">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(115, 68, 227);">오늘 제출된 출결 사유</span>
                    <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{ reasonDashboardsongpa.allnum }}건</h5>
                </div>
            </div>
            <div class="card2" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(36, 142, 147);">승인</span>
                    <h5 class="reason-num" style="color: rgb(36, 142, 147);">{{ reasonDashboardsongpa.approvenum }}건</h5>
                </div>
            </div>
            <div class="card3" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(233, 25, 39);">미승인</span>
                    <h5 class="reason-num" style="color: rgb(233, 25, 39);">{{ reasonDashboardsongpa.notapprovednum }}건</h5>
                </div>
            </div>
        </div>

        <div class="interview_list_header">
            <div class="total_interviews">총 0건</div>

            <!-- 필터 -->
            <div class="search_interview">
                    <div class="InpBox search_order">
                        <!-- 승인여부 -->
                        <select id="search_status" title="출결 승인 여부" v-model="filter.approve" style="width: 150px;">
                            <option selected disabled value="">사유 작성 여부</option>
                            <option value="0">전체</option>
                            <option value="1">작성</option>
                            <option value="2">미작성</option>
                            <option value="3">해당없음</option>
                        </select>
                    </div>
                    <div class="InpBox search_order">
                        <!-- 승인여부 -->
                        <select id="search_status" title="출결 승인 여부" v-model="filter.approve" style="width: 150px; margin-left: 3%;">
                            <option selected disabled value="">출결 승인 여부</option>
                            <option value="0">전체</option>
                            <option value="1">승인</option>
                            <option value="2">미승인</option>
                        </select>
                    </div>
                    <div class="TypoBox search_area" style="margin-left: 2%;">
                        <input type="text" class="Typo search" id="search_keyword" v-model="filter.mname" value="" placeholder="교육생 입력">
                        <button type="button" id="keyword_search">
                            <PhMagnifyingGlass color="#838181"  style="width: 24px; height: 24px;"/>
                        </button>
                    </div>
            </div>
        </div>

        <!-- 조회 안했을 때 ---------------------------------------------------------->    
        <div class="interview_list" v-if="!submitStatus">
            <!-- 면접 요청 리스트 없을 경우 -->
            <div class="empty_data">
                <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                <strong class="tit">교육과정이 선택되지 않았습니다.</strong>
                <div class="txt">교육장과 교육과정을 선택하고 승인 조회를 눌러주세요!</div>
            </div>
        </div>
        
        <!-- 조회 했을 때------------------------------------------------------------->
        <div v-if="submitStatus">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>교육생 번호</th>
                        <th>입실시간</th>
                        <th>퇴실시간</th>
                        <th>출결 유형</th>
                        <th>사유</th>
                        <th>승인처리</th>
                        <th>알림</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>유현주</td>
                        <td>2024M2001</td>
                        <td>08:50</td>
                        <td>17:55</td>
                        <td>정상 출결</td>
                        <td>
                            <button class="btn btn-dark btn-sm" disabled>해당없음</button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click="handlerApproveBtn">미승인</button>
                        </td>
                        <td><button class="btn btn-warning btn-sm">알림 전송</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>이경섭</td>
                        <td>2024M2002</td>
                        <td>-</td>
                        <td>-</td>
                        <td>결석</td>
                        <td>
                            <button class="btn btn-dark btn-sm" @click="handlerReasonBtn">사유 보기</button>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm" disabled>승인</button>
                        </td>
                        <td><button class="btn btn-warning btn-sm">알림 전송</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>김성민</td>
                        <td>2024M2003</td>
                        <td>08:55</td>
                        <td>-</td>
                        <td>조퇴</td>
                        <td>
                            <button class="btn btn-dark btn-sm" @click="handlerReasonBtn">사유 보기</button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click="handlerApproveBtn">미승인</button>
                        </td>
                        <td><button class="btn btn-warning btn-sm">알림 전송</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        
    </div>
    <AttendanceReasonDialog id="attendanceReasonDialog"/>
    <ApproveDialog id="approveDialog"/>
</template>

<script setup>
// modal
import AttendanceReasonDialog from './Dialog/AttendanceReasonDialog.vue';
import ApproveDialog from './Dialog/ApproveDialog.vue';
import { Modal } from "bootstrap";

import { ref, onMounted } from 'vue';


// 필터 상태 객체 정의
const filter = ref({
    ecname: "",
    cname: "",
    approve: "",
    mname: "",
 });

 // 출결 사유 현황 상태 객체 정의
 const reasonDashboard = ref({
    allnum: 58,
    approvenum: 20,
    notapprovednum: 38,
 });

 const reasonDashboardsongpa = ref({
    allnum: 8,
    approvenum: 5,
    notapprovednum: 3
 });

let submitStatus = ref(false);

// 교육장, 교육과정 필터 선택하고, 승인 조회 버튼 클릭 시 
function handleSubmitFilter1() {
    submitStatus.value = !submitStatus.value;
    console.log(filter.value); 
}

let attendanceReasonDialog = null;
let approveDialog = null;

onMounted(() => {
    // modal 객체 생성
    attendanceReasonDialog = new Modal(document.querySelector("#attendanceReasonDialog"));
    approveDialog = new Modal(document.querySelector("#approveDialog"));
})

// 사유 보기 버튼 클릭시, 교육생이 제출한 사유에 대한 모달 활성화
function handlerReasonBtn() {
    attendanceReasonDialog.show();
}

// 미승인 버튼 클릭시, 출결 승인 처리 모달 활성화
function handlerApproveBtn() {
    approveDialog.show();
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
select, th, td {
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

.my_menu {
    display: flex;
}

.my_menu {
    list-style: none;
    width: 30rem;
}

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

.BtnType {
    display: block;
    margin-bottom: 8px;
    width: 150px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    background-color: #22C55E;
    cursor: pointer;
}

.SizeM {
    padding: 6px 11px;
    height: 40px;
    font-size: 14px;
    line-height: 24px;
}

/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* card ---------------------------------------*/
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

.card-title {
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

/* table header */
.interview_list_header {
    clear: both;
    padding: 20px 0 50px;
    border-bottom: 1px solid #d7dce5;
}

.total_interviews {
    float: left;
    margin-top: 17px;
    padding-left: 24px;
    color: #5c667b;
    font-size: 15px;
    line-height: 20px;
}

.search_interview {
    float: right;
    display: flex;
}

.search_area {
    display: inline-block;
    position: relative;
    width: 160px;
}

.TypoBox {
    display: inline-block;
    position: relative;
    border: 1px solid #8491a7;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
}

.TypoBox .text {
    padding-right: 36px;
    width:100%;
    padding-block: 1px;
    padding-inline: 2px;
}

.TypoBox .Typo {
    padding: 8px 12px;
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #475067;
    font-size: 14px;
    line-height: 20px;
    background: none;
}

.search_interview .search_area button {
    display: inline-block;
    position: absolute;
    top: 6px;
    right: 4px;
    width: 32px;
    height: 32px;
    border: 0;
    background: url(https://www.saraminimage.co.kr/sri/person/resume/bg_alink.png) repeat;
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
