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
                        <!-- <option selected disabled value="">교육장 선택</option> -->
                        <option selected disabled :value="filter.ecname">{{ filter.ecname }}</option>
                        <option value="전체">전체</option>
                        <option v-for="ecname in ecnames" :key="ecname" :value="ecname"> {{ ecname }}</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select id="course" title="교육과정 선택" v-model="filter.cname">
                        <!-- <option selected disabled value="">교육과정 선택</option> -->
                        <option selected disabled :value="filter.cname">{{ filter.cname }}</option>
                        <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
            </div>
        </form>

        <div class="attandance_approve_card" style="display: flex; margin-top: 3%;">
            <div class="card1">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(115, 68, 227);">오늘 제출된 출결 사유</span>
                    <h5 class="reason-num" style="color: rgb(115, 68, 227);">{{ attendanceDashBoardDate.todayReasonCnt }}건
                    </h5>
                </div>
            </div>
            <div class="card2" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(36, 142, 147);">승인</span>
                    <h5 class="reason-num" style="color: rgb(36, 142, 147);">{{ attendanceDashBoardDate.approveCnt }}건</h5>
                </div>
            </div>
            <div class="card3" style="margin-left: 1%;">
                <div class="card-contents" style="margin-top: 5%; margin-left: 7%;">
                    <span class="card-title" style="color: rgb(233, 25, 39);">미승인</span>
                    <h5 class="reason-num" style="color: rgb(233, 25, 39);">{{ attendanceDashBoardDate.notApprovedCnt }}건
                    </h5>
                </div>
            </div>
        </div>

        <div class="interview_list_header">
            <div class="total_interviews">총 0건</div>

            <!-- 필터 -->
            <div class="search_interview">
                <div class="TypoBox search_area" style="margin-left: 2%;">
                    <input type="text" class="Typo search" id="search_keyword" v-model="filter.mname" value=""
                        placeholder="교육생 입력">
                    <button type="button" id="keyword_search">
                        <PhMagnifyingGlass color="#838181" style="width: 24px; height: 24px;" />
                    </button>
                </div>
            </div>
        </div>

        <!-- 조회 안했을 때 ---------------------------------------------------------->
        <!-- <div class="interview_list" v-if="!submitStatus"> -->
        <!-- 면접 요청 리스트 없을 경우 -->
        <!-- <div class="empty_data">
                <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                <strong class="tit">교육과정이 선택되지 않았습니다.</strong>
                <div class="txt">교육장과 교육과정을 선택하고 승인 조회를 눌러주세요!</div>
            </div>
        </div> -->

        <!-- 조회 했을 때------------------------------------------------------------->
        <div>
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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in traineeData" :key="item">
                        <td>{{ item.rnum }}</td>
                        <td>{{ item.mname }}</td>
                        <td>{{ item.mid }}</td>
                        <td>{{ item.acheckin }}</td>
                        <td>{{ item.acheckout }}</td>
                        <td>{{ item.astatus }}</td>
                        <td>
                            <div v-if="item.reasonable === false">
                                <button class="btn btn-dark btn-sm" disabled>해당없음</button>
                            </div>
                            <div v-if="item.reasonable === true">
                                <div v-if="item.anconfirm === true || (result1 === true && dailogMid === item.mid)">
                                    <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                        :data-bs-target="`#attendanceReasonDialog${item.mid}`"
                                        @click="handlerReasonBtn(item.mid)">
                                        승인완료
                                    </button>
                                    <!-- Modal -->
                                    <div class="modal fade" :id="`attendanceReasonDialog${item.mid}`" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header" style="background-color: #22C55E; color: white;">

                                                    <p class="title" style="margin-top: 5%;">조퇴 및 결석 사유</p>

                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p class="title_mark">출결 유형</p>
                                                    <p class="contents">{{ reasonInfo.ancategory }}</p>
                                                    <p class="title_mark">사유</p>
                                                    <p class="contents">{{ reasonInfo.anreason }}</p>
                                                    <p class="title_mark">인증 서류</p>
                                                    <p class="contents">인증 서류 : {{ reasonInfo.anattach }}</p>
                                                </div>
                                                <div class="modal-footer" style="display: flex; margin-left: 3%; justify-content: center;">
                                                    <!-- <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">닫기</button> -->
                                                    <BaseButtonUpdate type="button" data-bs-dismiss="modal" 
                                                        style="margin-right: 1%;">닫기</BaseButtonUpdate>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- adate는 현재 2024-07-02 고정값 -->
                                    <!-- <AttendanceReasonDialog :id="`attendanceReasonDialog${item.mid}`" :mid="item.mid"
                                        :adate="adate" :anconfirm="item.anconfirm" /> -->
                                </div>


                                <div v-if="item.anconfirm === false">
                                    <!-- <button class="btn btn-danger btn-sm" @click="handlerReasonBtn(item.mid)">사유보기</button> -->
                                    <!-- adate는 현재 2024-07-02 고정값 -->
                                    <!-- <AttendanceReasonDialog :id="`attendanceReasonDialog${item.mid}`" :mid="item.mid" :adate="adate" :anconfirm="item.anconfirm" @anconfirmResult="reasonResult">사유보기</AttendanceReasonDialog> -->

                                    <!-- 다이얼로그 -->
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                        :data-bs-target="`#attendanceReasonDialog${item.mid}`"
                                        @click="handlerReasonBtn(item.mid)">
                                        사유보기
                                    </button>
                                    <!-- Modal -->
                                    <div class="modal fade" :id="`attendanceReasonDialog${item.mid}`" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header" style="background-color: #22C55E; color: white;">

                                                    <p class="title" style="margin-top: 5%;">조퇴 및 결석 사유</p>

                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p class="title_mark">출결 유형</p>
                                                    <p class="contents">{{ reasonInfo.ancategory }}</p>
                                                    <p class="title_mark">사유</p>
                                                    <p class="contents">{{ reasonInfo.anreason }}</p>
                                                    <p class="title_mark">인증 서류</p>
                                                    <p class="contents">인증 서류 : {{ reasonInfo.anattach }}</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <BaseButtonUpdate type="button" data-bs-dismiss="modal" 
                                                        style="margin-right: 1%;">닫기</BaseButtonUpdate>
                                                    <BaseButtonUpdate type="button" data-bs-dismiss="modal" @click="anconfirmCheck(item.mid, adate)">승인</BaseButtonUpdate>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- adate는 현재 2024-07-02 고정값 -->
                                    <!-- <AttendanceReasonDialog :id="`attendanceReasonDialog${item.mid}`" :mid="item.mid" :adate="adate" :anconfirm="item.anconfirm" @anconfirmResult="reasonResult">사유보기</AttendanceReasonDialog> -->
                                </div>
                            </div>
                        </td>

                        <!-- 분계선 -->

                        <td>
                            <div v-if="item.aconfirm === false">
                            <!-- adate는 현재 2024-07-02 고정값 -->
                            <button class="btn btn-primary btn-sm" @click="handlerApproveBtn(item.mid)">미승인</button>
                            <ApproveDialog :id="`approveDialog${item.mid}`" :mid="item.mid" :adate="adate" @result="attendanceApproveResult"/>
                            </div>
                            <div v-if="item.aconfirm === true">
                                <button class="btn btn-danger btn-sm" disabled>승인완료</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
    <!-- <AttendanceReasonDialog id="attendanceReasonDialog" />
    <ApproveDialog id="approveDialog" /> -->
</template>

<script setup>
// modal
import AttendanceReasonDialog from './Dialog/AttendanceReasonDialog.vue';
import { Modal } from 'bootstrap';
import ApproveDialog from './Dialog/ApproveDialog.vue';
import courseAPI from '@/apis/courseAPI';
import educenterAPI from '@/apis/educenterAPI';
import attendanceAPI from '@/apis/attendanceAPI';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';

import { ref, onMounted, watch } from 'vue';

onMounted(() => {

    // 등록된 교육장 불러오기
    listCenterSet();

    // 필터 초깃값 설정 후 리스트 불러오기
    approveAttendanceInfo(filter.value.ecname, filter.value.cname, adate.value);
    progressAttendanceCntInfo(filter.value.ecname, filter.value.cname, adate.value);

    // modal 객체 생성
    // attendanceReasonDialog = new Modal(document.querySelector("#attendanceReasonDialog"));
    // approveDialog = new Modal(document.querySelector("#approveDialog"));
})

let ecnames = ref();

let cnames = ref();

let mid = ref();

// 필터 상태 객체 정의
const filter = ref({
    ecname: "송파교육센터",
    cname: "MSA 2차 Full Stack 개발자 양성과정",
    approve: "",
    mname: "",
});

// 1. 교육장 목록 가져오기
async function listCenterSet() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1);
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 2. 진행중인 교육과정 목록 가져오기
async function progressCourseList(ecname) {
    // getInprogressCourseList
    try {
        const response = await courseAPI.getInprogressCourseList(ecname);
        cnames.value = response.data;
        console.log("cnames.value = " + cnames.value);
        console.log("진행중인 교육과정 정보 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("진행중인 교육과정 정보 가져오기 실패");
    }
}

// 출결 카운트 값을 받아올 변수
const attendanceDashBoardDate = ref({
    todayReasonCnt: 0,
    approveCnt: 0,
    notApprovedCnt: 0
});

// adate는 임시 고정 값
const adate = ref("2024-07-15")
// 3. 진행중인 교육과정의 출결 사유 제출 건수 가져오기
async function progressAttendanceCntInfo(ecname, cname, adate) {
    try {
        const response = await attendanceAPI.getTraineeAttendaceReasonCnt(ecname, cname, adate);
        attendanceDashBoardDate.value = response.data;
        console.log("attendanceDashBoardDate.value = " + attendanceDashBoardDate.value);
        console.log("진행중인 교육과정의 출결 사유 제출 건수 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("진행중인 교육과정의 출결 사유 제출 건수 가져오기 실패");
    }
}

// 교육생 리스트 정보를 받을 변수
const traineeData = ref(
    // "rnum": 1,
    // "mname": "유현주",
    // "mid": "2024M2001",
    // "acheckin": "09:05",
    // "acheckout": "17:58",
    // "astatus": "정상출결",
    // "aconfirm": true,    // 출결 승인 여부
    // "reasonable": false  // 사유 작성 여부
    // "anconfirm": false   // 사유 승인 여부
)

// 4. 교육생 승인 페이지 출결 목록 불러오기
async function approveAttendanceInfo(ecname, cname, adate) {
    try {
        const response = await attendanceAPI.getTraineeAttendanceApproveList(ecname, cname, adate);
        traineeData.value = response.data;
        console.log("traineeData.value = " + traineeData.value);
        console.log("교육생 승인 페이지 출결 목록 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("교육생 승인 페이지 출결 목록 가져오기 실패");
    }
}

watch(() => filter.value.ecname,
    (nv, ov) => {
        progressCourseList(nv);
    }
)

watch(() => filter.value.cname,
    (nv, ov) => {
        progressAttendanceCntInfo(filter.value.ecname, nv, adate.value);
        approveAttendanceInfo(filter.value.ecname, nv, adate.value);
    }
)

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

// 사유 모달
let attendanceReasonDialog = null;

// 사유 보기 버튼 클릭시, 교육생이 제출한 사유에 대한 모달 활성화
function handlerReasonBtn(e) {
    personalAttendanceReason(e, adate.value);

    // mid.value = e;
    // console.log("handlerReasonBtn   e = " + e);
    // console.log("handlerReasonBtn   mid.value = " + mid.value);



    // // modal 객체 생성
    // attendanceReasonDialog = new Modal(document.querySelector("#attendanceReasonDialog" + e));
    // attendanceReasonDialog.show();
}

// 승인 모달
let approveDialog = null;

// 미승인 버튼 클릭시, 출결 승인 처리 모달 활성화
function handlerApproveBtn(e) {
    mid.value = e;
    // modal 객체 생성
    approveDialog = new Modal(document.querySelector("#approveDialog" + e));
    approveDialog.show();
}


let dailogMid = ref("");
let result1 = ref(false);
let result2 = ref(false);

function reasonResult(anconfirmResult) {
    console.log("자식컴포넌트에서 anconfirmCheck() 메소드 실행")
    //console.log("check: " + check.value);

    dailogMid.value = anconfirmResult.value.mid;
    result1.value = anconfirmResult.value.result1;
    result2.value = anconfirmResult.value.result2;

    //console.log("check: " + check.value + "로 변경");
}

/*
watch(() => check.value,
    (nv, ov) => {
    console.log("check.value - ov : " + ov);
    console.log("check.value - nv : " + nv);      
})
*/

//------------------ 모달 --------------------------

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

// 사유 승인 처리
async function personalAttendanceReasonApprove(mid, adate) {
    try {
        await attendanceAPI.getTraineeAttendaceReasonApproveConfirm(mid, adate);
        console.log("출결 사유에 대한 승인 성공");

    } catch (error) {
        console.log(error);
        console.log("출결 사유에 대한 승인 실패");
    }
}

const check = ref(false);

function anconfirmCheck(mid, adate) {
    check.value = !check.value;
    console.log(check.value);
    personalAttendanceReasonApprove(mid, adate);
    // // 자식 컴포넌트 -> 부모 컴포넌트로 사유 승인 결과 데이터 보내기
    // console.log("결과: (anconfirmResult.value)" + anconfirmResult.value);
    // emit('anconfirmResult', anconfirmResult);
}

watch(()=>check.value,
()=>{
    approveAttendanceInfo(filter.value.ecname, filter.value.cname, adate.value);
    progressAttendanceCntInfo(filter.value.ecname, filter.value.cname, adate.value);
})

const check2 = ref(false);


function attendanceApproveResult(aconfirmCheckResult) {
    check2.value = aconfirmCheckResult.value;
    console.log("check2.value: " + check2.value);
}

watch(()=> check2.value,
(nv, ov)=>{
    console.log("check2.value 변경 전:  " + ov);
    console.log("check2.value 변경 후:  " + nv);
    approveAttendanceInfo(filter.value.ecname, filter.value.cname, adate.value);
    check2.value = false;
})



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
select,
th,
td {
    font-family: 'Noto Sans KR', sans-serif;
}

.title {
    font-weight: 600;
}

.contents {
    font-weight: 400;
    font-size: 1.0rem;
    margin-left: 3%;
    text-align: left;
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
    width: 130px;
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
    width: 100%;
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

.modal-footer {
    text-align: center;
    display: inline-block;
}
</style>
