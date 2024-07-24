<template>
    <div class="main p-4" style="margin-left: 20px; width: 1400px">
        <div>
            <div class="dashboard" style="background-color:rgba(215, 240, 220, 0.575); width:1400px; height:910px;">
                <div class="row">
                    <div class="profile-wrap col-md-4">
                        <div class="profile-background">
                            <img src="@/assets/dashboard/dashboard_myinfo.jpg" style="width:400px;">
                        </div>
                        <div class="profile-contents" style="width:430px; height:820px; background-color: rgb(255, 255, 255);">
                            <div class="user-info" style="padding-left: 10%;">
                                <div style="margin-top: 60px;">
                                    <h5 class="contents-title">{{ headerInfo.mname }}
                                        <span class="user-id">({{ mid }})</span>
                                    </h5>
                                    <span class="user-course">{{ headerInfo.cname }}</span>
                                    <p class="user-course-requireddate">({{ headerInfo.cstartdate }} ~ {{ headerInfo.cenddate }})</p>
                                </div>
                            </div>

                            <div class="user-attendance" style="margin-top: 40px; padding-left: 10%;">
                                <h5 class="sub-title">오늘의 출결현황</h5>
                                <div style="display: flex;">
                                    <div class="attendance-box check-in"
                                        style="background-color: rgba(236, 236, 236, 0.452); width: 180px; height: 100px;">
                                        <div class="attendance-info">
                                            <h5>입실</h5>
                                            <button type="button" v-if="!isCheckIn" @click="handlerCheckInBtn" 
                                                class="btn btn-primary btn-lg" style="width: 90%;">
                                                <span>입실하기</span>
                                            </button>

                                            <span class="checkin-text" v-if="isCheckIn">{{ hoursCheckIn }}:{{ minutesCheckIn }}</span>
                                        </div>
                                    </div>
                                    <div class="attendance-box check-out"
                                        style="background-color:  rgba(236, 236, 236, 0.452); width: 180px; height: 100px; margin-left: 10px;">
                                        <div class="attendance-info">
                                            <h5>퇴실</h5>
                                            <!--퇴실하기 버튼 클릭시, 퇴실하기 모달 활성화 함수 호출-->
                                            <button type="button" v-if="!isCheckOut" @click="showCheckOutDialog" 
                                                class="btn btn-primary btn-lg" style="width: 90%;">
                                                <span>퇴실하기</span>
                                            </button>
                                            <span class="checkin-text" v-if="isCheckOut">17:55</span>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; margin-top: 3%;">
                                    <div class="attendance-box check-in"
                                        style="background-color: rgba(236, 236, 236, 0.452); width: 180px; height: 100px;">
                                        <div class="attendance-info">
                                            <h5>지각/조퇴/결석 신청</h5>
                                            <RouterLink to="/trainee/attendance/reason/create">
                                                <button type="button" class="btn btn-primary btn-lg" style="width: 90%;">
                                                    <span>사유 작성</span>
                                                </button>
                                            </RouterLink>
                                        </div>
                                    </div>
                                    <div class="attendance-box check-in"
                                        style="background-color: rgba(236, 236, 236, 0.452); width: 180px; height: 100px; margin-left: 10px;">
                                        <div class="attendance-info">
                                            <h5>외출 신청</h5>
                                            <!--
                                            <button type="button" class="btn btn-dark btn-lg" style="width: 90%;">
                                                <span>외출하기</span>
                                            </button>
                                            -->
                                                <button class="btn btn-outline-dark btn-lg" :class="btnShow" @click="reasonbtn" style="width: 90%;">
                                                    <span>외출하기</span>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-attendance-state" style="width: 80%; margin-top: 10%;">
                                    <h5 class="sub-title">나의 출석률</h5>
                                    <div class="attendance-box" style="width: 120%; height: 80px;">
                                        <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                            <div class="d-flex flex-row justify-content-between">
                                                <span style="font-size: 14px;">2024.07-15 기준</span>
                                                <span style="font-size: 14px;">{{ userDashboardAttendanceInfo.percentage }}% ({{userDashboardAttendanceInfo.approvecnt}}일 / {{userDashboardAttendanceInfo.crequireddate}}일)</span>
                                            </div>
                                            <div class="progress" :aria-valuenow="`${userDashboardAttendanceInfo.percentage}`">
                                                <div class="progress-bar bg-success" :style="`width:${userDashboardAttendanceInfo.percentage}%`">{{userDashboardAttendanceInfo.percentage}}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="user-img">
                            <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${headerInfo.mid}`"
                                            class="user-img-detail" />
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <div class="content1">
                            <h5 class="community-title mt-3">취업 관련 소식</h5>
                            <div id="carouselExample" class="carousel slide" style="width: 800px;">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://jasoseol.com/_next/image?url=https%3A%2F%2Fdaoift3qrrnil.cloudfront.net%2Fggs%2Fimages%2F42291%2Foriginal%2F%25ED%2595%259C%25ED%2599%2594%25EB%25B9%2584%25EC%25A0%2584_PC%25EB%25A9%2594%25EC%259D%25B8%25EB%25B0%25B0%25EB%2584%2588.png%3F1717046514&w=1200&q=75"
                                            class="d-block w-100">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://jasoseol.com/_next/image?url=https%3A%2F%2Fdaoift3qrrnil.cloudfront.net%2Fggs%2Fimages%2F42752%2Foriginal%2F%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%258B%25E1%2585%25A3%25E1%2586%25BC%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A6%25E1%2586%25AB%25E1%2584%258C%25E1%2585%25B5_PC%25E1%2584%2586%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2587%25E1%2585%25A2%25E1%2584%2582%25E1%2585%25A5_1%25E1%2584%258B%25E1%2585%25A1%25E1%2586%25AB.png%3F1718074996&w=1200&q=75"
                                            class="d-block w-100">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://jasoseol.com/_next/image?url=https%3A%2F%2Fdaoift3qrrnil.cloudfront.net%2Fggs%2Fimages%2F43079%2Foriginal%2F%25EB%258F%2599%25EC%2596%2591%25EC%2583%259D%25EB%25AA%2585%25EB%25B3%25B4%25ED%2597%2598_PC%25EB%25A9%2594%25EC%259D%25B8%25EB%25B0%25B0%25EB%2584%2588.png%3F1717737948&w=1200&q=75"
                                            class="d-block w-100">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="content2 mt-5">
                            <h5 class="community-title">반 커뮤니티 소식</h5>
                            <div style="display: flex;">
                                <div class="card" style="width: 16rem; height: 14rem;">
                                    <img src="@/assets/dashboard/dashboard2.jpg" class="card-img-top"
                                        style="height: 120px;">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="class-name">[Vue]</span>front-end-vue.pptx</h5>
                                        <p class="reference-createdat" style="margin-top: 30px;">2024-06-19 09:17</p>
                                    </div>
                                </div>
                                <div class="card" style="width: 16rem; margin-left: 14px; height: 14rem;">
                                    <img src="@/assets/dashboard/dashboard1.jpg" class="card-img-top"
                                        style="height: 120px;">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="class-name">[SpringBoot]</span>
                                            back-end-springboot.pptx</h5>
                                        <p class="reference-createdat" style="margin-top: 11px;">2024-06-19 10:30</p>
                                    </div>
                                </div>

                                <div class="card" v-if="!isDailyNote" style="width: 16rem; margin-left: 14px; height: 14rem;">
                                    <div class="img_box d-flex">
                                        <div id="defaultImg">
                                            <img src="@/assets/icons/warning_icon2.png" style="width:50px; height: 50px;">
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title-dailynote">오늘의 데일리 과제가<br>아직 제출되지 않았어요!</h5>
                                        <BaseButtonSubmit @click="showDailyNoteDialog">제출하기</BaseButtonSubmit>
                                    </div>
                                </div>
                                
                                
                                <div class="card" v-if="isDailyNote" style="width: 16rem; margin-left: 14px; height: 14rem;">
                                    <div class="img_box d-flex">
                                        <div id="defaultImg">
                                            <img src="@/assets/icons/terms_icon.png" style="width:50px; height: 50px;">
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title-dailynote">오늘의 데일리 과제 제출 완료!</h5>
                                        <BaseButtonSubmit>제출완료</BaseButtonSubmit>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content3 mt-5" style="height: 400px;">
                            <h5 class="community-title mt-3">공지사항</h5>
                             <!-- 공지목록 들어갈 부분 -->
                             <NoticeInfo :ecname="ecname" ref="$noticeInfo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--부트스트랩에서 다이얼로그는 고유한 id를 필수로 갖고 있어야 함-->
    <AttendanceErrorDialog id="attendanceErrorDialog"/>
    <DailyNoteSubmitDialog id="dailyNoteSubmitDialog" @clickHandler="handleDailyNoteSubmit"/>
    <CheckInDialog id="checkInSubmitDialog" @submitCheckIn="submitCheckInDialog"/>
    <CheckOutDialog id="checkOutSubmitDialog" @submitCheckOut="submitCheckOutDialog"/>
    
</template>
    
<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import DailyNoteSubmitDialog from './Dialog/DailyNoteSubmitDialog.vue';
import AttendanceErrorDialog from './Dialog/AttendanceErrorDialog.vue';
import CheckOutDialog from './Dialog/CheckOutDialog.vue';
import CheckInDialog from './Dialog/CheckInDialog.vue';
import { onMounted, ref, watch } from 'vue';
import { Modal } from "bootstrap";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import memberAPI from '@/apis/memberAPI';
import NoticeInfo from './Dialog/NoticeInfo.vue';
import attendanceAPI from '@/apis/attendanceAPI';
import axios from 'axios';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import referenceDataAPI from '@/apis/referenceDataAPI';


// store 객체 얻기
const store = useStore();

// router 객체 얻기
const router = useRoute();

// const mid = "2024M2001";
const adate = "2024-07-24";
const mid = store.state.mid;
const ecname = ref("");

// store 에서 사용자 입실 및 퇴실 여부, 데일리 과제 제출 여부 가져오기
const userCheckInStatus = store.state.userDailyInfo.userCheckInStatus;
const userCheckOutStatus = store.state.userDailyInfo.userCheckOutStatus;
const userDailyNoteStatus = store.state.userDailyInfo.userDailyNoteStatus;

const userCheckInTime = store.state.userDailyInfo.userCheckIn;
const userCheckOutTime = store.state.userDailyInfo.userCheckOut;
console.log("입실 시간: ", userCheckInTime);

// IP 주소 일치 여부
let isIPstatus = ref(true);
// 입실 여부
let isCheckIn = ref(false);
// 퇴실 여부
let isCheckOut = ref(false);
// 데일리 과제 제출 여부 
let isDailyNote = ref(false);
// 외출 버튼 활성화 여부 
let btnShow = ref("disabled");

console.log("IP 주소 일치 여부: ", isIPstatus.value);
console.log("입실 여부: ", isCheckIn.value);
console.log("퇴실 여부: ", isCheckOut.value);
console.log("데일리 과제 제출 여부: ", isDailyNote.value);

let attendanceErrorDialog = null;
let dailyNoteDialog = null;
let checkOutDialog = null;
let checkInDialog = null;


// 컴포넌트가 생성되고, DOM에 부착될 때 자동으로 실행되는 콜백
onMounted(() => {
    // modal 객체로 생성 
    attendanceErrorDialog = new Modal(document.querySelector("#attendanceErrorDialog"));
    dailyNoteDialog = new Modal(document.querySelector("#dailyNoteSubmitDialog"));
    checkOutDialog = new Modal(document.querySelector("#checkOutSubmitDialog"));
    checkInDialog = new Modal(document.querySelector("#checkInSubmitDialog"));

    traineeHeader(mid);
    traineeAttendanceInfo(mid, adate);

    userAttendanceInfoData(mid, adate);
    
    testCheckIn();

    //handleNoticeInfo();
})

// 교육생 정보 가져오기
let headerInfo = ref({});
async function traineeHeader(mid) {
    try {
        const response = await traineeInfoAPI.getTraineeProfileHeader(mid);
        headerInfo.value = response.data;
        ecname.value = headerInfo.value.ecname;

        handleNoticeInfo();
        console.log("헤더 정보 받아오기 : " + headerInfo.value);
    } catch (error) {
        console.log(error);
    }
}


let userDashboardAttendanceInfo = ref({});
async function traineeAttendanceInfo(mid, adate) {
    try {
        const response = await attendanceAPI.getDashboardTraineeAttendanceInfo(mid, adate);
        userDashboardAttendanceInfo.value = response.data;
        console.log("대시보드 사용자 출결 정보 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("대시보드 사용자 출결 정보 가져오기 실패");
    }
}

// 사용자 IP 정보 조회 -------------------------------------------------
// const userClientInfo = ref([]);
const clientIP = ref("");

/*
async function getIpClient() {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    console.log(response.data);
    // 사용자 IP 값 저장
    userClientInfo.value = response.data;
    clientIP.value = userClientInfo.value.ip;
  } catch (error) {
    console.error(error);
  }
}
*/
// 사용자 IP 가져오기
clientIP.value = store.state.clientIP;
console.log(clientIP.value);

// --------------------------------------------------------------------
// IP 주소가 일치하지 않는 경우 에러 모달 활성화
function showErrorDialog() {
    attendanceErrorDialog.show();
}

// 입실하기 모달 활성화
function showCheckInDialog() {
    // 입실하기 버튼 클릭시, 입실하기 모달 활성화
    checkInDialog.show();
}


/*
function reasonbtn() {
    router.push('/trainee/attendance/reason/create');
}
*/

// 입실 시간 상태 데이터
const hoursCheckIn = ref("");
const minutesCheckIn = ref("");
// 퇴실 시간 상태 데이터
const hoursCheckOut = ref();
const minutesCheckOut = ref();

function testCheckIn() {
    if (isCheckIn.value) {
        hoursCheckIn.value = userCheckInTime.substring(11,13);
        minutesCheckIn.value = userCheckInTime.substring(14,16);
    }
}


// 입실 정보 상태 데이터 
const checkInData = ref({
    "mid": "",
    "attendancetime": "",
});

// 퇴실 정보 상태 데이터 
const checkOutData = ref({
    "mid": "",
    "attendancetime": "",
});

const userAttendanceInfo = ref();
let isUserCheckinStatus = ref(false);

// 교육생 입실, 퇴실, 과제 정보 조회 
async function userAttendanceInfoData(mid, adate) {
    try {
        const response = await attendanceAPI.getUserAttendanceInfoData(mid, adate);
        console.log("교육생 출결 정보 조회 성공");
        userAttendanceInfo.value = response.data;
        
        if(userAttendanceInfo.value.acheckinstatus) {
            console.log("교육생 입실 여부 : " + userAttendanceInfo.value.acheckinstatus);
            isCheckIn.value = true;
        }

        if(userAttendanceInfo.value.acheckoutstatus) {
            console.log("교육생 퇴실 여부 : " + userAttendanceInfo.value.acheckoutstatus);
            isCheckOut.value = true;
        }

        if(userAttendanceInfo.value.referencestatus) {
            console.log("데일리 과제 제출 여부 : " + userAttendanceInfo.value.referencestatus);
            isDailyNote.value = true;
        }

        userInfo();
        console.log("userAttendanceInfo: " + JSON.stringify(userAttendanceInfo));
    } catch (error) {
        console.log(error);
        console.log("교육생 출결 정보 조회 성공");
    }
    console.groupEnd();
}

function userInfo() {
    if (isCheckIn.value) {
        console.log("isCheckIn: " + isCheckIn.value);
        hoursCheckIn.value = userAttendanceInfo.value.acheckin.substring(11,13);
        minutesCheckIn.value = userAttendanceInfo.value.acheckin.substring(14,16);

        // 교육생의 입실 여부가 성공했다면, store 에 입실 시간 저장하기
        // 입실 상태 변경
        store.commit("userDailyInfo/setUserCheckInStatus", isCheckIn.value);
        store.commit("userDailyInfo/setUserCheckIn", checkInData.value.attendancetime);
    }
    if (isCheckOut.value) {
        console.log("isCheckOut: " + isCheckOut.value);
        hoursCheckOut.value = userAttendanceInfo.value.acheckout.substring(11,13);
        minutesCheckOut.value = userAttendanceInfo.value.acheckout.substring(14,16);

        // 교육생의 퇴실 여부가 성공했다면, store 에 퇴실 시간 저장하기
        // 퇴실 상태 변경
        store.commit("userDailyInfo/setUserCheckOutStatus", isCheckOut.value);
        store.commit("userDailyInfo/setUserCheckOut", checkOutData.value.attendancetime);
    }

    if (isDailyNote.value) {
        console.log("isDailyNote: " + isDailyNote.value);

        store.commit("userDailyInfo/setUserDailyNoteStatus", isDailyNote.value);
    }
}


function submitCheckInDialog(todayCheckIn) {
    console.log("CheckInDialog 에서 정의한 이벤트 수신 완료");

    // 입실 서버 통신 --------------------
    
    // (1) mid, IP, 현재 날짜와 시간 상태 객체 값 세팅 --------------------
    checkInData.value.mid = mid;
    checkInData.value.attendancetime = todayCheckIn.value;

    console.log("checkInData.value.mid: " + checkInData.value.mid);
    console.log("checkInData.value.attendancetime: " + checkInData.value.attendancetime);

    // (2) 서버 통신 코드 호출
    userAttendanceCheckIn();
    // ---------------------------------

    // '네' 버튼 클릭시, 모달 비활성화
    checkInDialog.hide();

    // 사용자가 입실 버튼을 누른 시간
    //console.log("사용자 입실 버튼 누른 시간: " + todayCheckIn.value.formattedDate);
    //hoursCheckIn.value = todayCheckIn.value.hours;
    //minutesCheckIn.value = todayCheckIn.value.minutes;

    // mid, IP, 현재 날짜와 시간 상태 객체 값 세팅 --------------------
    // checkInData.value.mid = mid;
    // checkInData.value.attendancetime = todayCheckIn.value.formattedDate;
    //checkInData.value.clientip = clientIP.value;

    //console.log(checkInData.value.clientip);


    // // 입실 상태 변경
    // isCheckIn.value = !isCheckIn.value;
    // store.commit("userDailyInfo/setUserCheckInStatus", isCheckIn.value);
    // store.commit("userDailyInfo/setUserCheckIn", checkInData.value.attendancetime);

    // 외출하기 버튼 활성화 
    btnShow.value = "";
}


// 교육생 입실 기능
async function userAttendanceCheckIn() {
    try {
        // 클라이언트가 입력한 값을 -> json 형식의 checkInData 객체 형태로 변환
        const data = JSON.parse(JSON.stringify(checkInData.value));
        await attendanceAPI.userCheckin(data);
        console.log("교육생 입실 성공");

        isCheckIn.value = true;

    } catch (error) {
        console.log(error);
        console.log("교육생 입실 실패");
    }
    console.groupEnd();
}

// 교육생 퇴실 기능
async function userAttendanceCheckOut() {
    try {
        // 클라이언트가 입력한 값을 -> json 형식의 checkInData 객체 형태로 변환
        const data = JSON.parse(JSON.stringify(checkOutData.value));
        await attendanceAPI.userCheckout(data);
        console.log("교육생 퇴실 성공");

        isCheckOut.value = true;

    } catch (error) {
        console.log(error);
        console.log("교육생 퇴실 실패");
    }
    console.groupEnd();
}

watch(
    () => isCheckIn.value,
    (nv, ov) => {
        console.log("isCheckIn.value 변경 전 = " + nv);
        console.log("isCheckIn.value 변경 후 = " + ov);
         
        userAttendanceInfoData(mid, adate);
    }
)

watch(
    () => isCheckOut.value,
    (nv, ov) => {
        console.log("isCheckOut.value 변경 전 = " + nv);
        console.log("isCheckOut.value 변경 후 = " + ov);
         
        userAttendanceInfoData(mid, adate);
    }
)

// 퇴실하기 모달 활성화
function showCheckOutDialog() {
    // 퇴실하기 버튼 클릭시, 퇴실하기 모달 활성화
    checkOutDialog.show();
}

function submitCheckOutDialog(todayCheckOut) {
    console.log("CheckOutDialog 에서 정의한 이벤트 수신 완료");

    // 퇴실 서버 통신 --------------------
    // (1) mid, IP, 현재 날짜와 시간 상태 객체 값 세팅 --------------------
    checkOutData.value.mid = mid;
    checkOutData.value.attendancetime = todayCheckOut.value;

    // (2) 서버 통신 코드 호출
    userAttendanceCheckOut();
    // ---------------------------------

    // '네' 버튼 클릭시, 모달 비활성화 
    checkOutDialog.hide();

    // 사용자가 퇴실 버튼을 누른 시간
    // console.log("사용자 퇴실 버튼 누른 시간: " + todayCheckOut.value.formattedDate);
    // hoursCheckOut.value = todayCheckOut.value.hours;
    // minutesCheckOut.value = todayCheckOut.value.minutes;

    //  퇴실 상태 변경
    // isCheckOut.value = !isCheckOut.value;
    // store.commit("userDailyInfo/setUserCheckOutStatus", isCheckOut.value);
}



// 입실하기 버튼 클릭시, IP가 일치하는지 검사하는 함수 ------------------------
// 교육장 IP 주소와 일치한 경우, 입실 모달 활성화
function handlerCheckInBtn() {
    //getIpClient();

    // 교육장 IP 주소와 다른 경우, IP 접속 실패 에러 모달 활성화
    if(!isIPstatus.value) { 
        showErrorDialog();
    } else if(isIPstatus.value && !isCheckIn.value){
        showCheckInDialog();
    }
}

// 데일리 과제 모달 활성화
function showDailyNoteDialog() {
    dailyNoteDialog.show();
}

// 과제 정보 상태 데이터
const referenceData = ref(
    // reftitle: "",
    // refurl: "",
    // refdate: ""
);


function handleDailyNoteSubmit(noteData) {
    console.log("DailyNoteSubmitDialog 에서 정의한 이벤트 수신 완료");

    referenceData.value = noteData.value;
    console.log(JSON.parse(JSON.stringify(referenceData)));

    const formData = new FormData();
    formData.append("reftitle", referenceData.value.reftitle);
    formData.append("refurl", referenceData.value.refurl);
    formData.append("refdate", referenceData.value.refdate);

    // 과제 제출 서버 통신 코드 호출
    userReferenceSubmit(formData);

    // 과제 모달 비활성화
    dailyNoteDialog.hide();

    // // 과제 제출 여부 상태 변경
    // isDailyNote.value = !isDailyNote.value;
  
    // store.commit("userDailyInfo/setUserDailyNoteStatus", isDailyNote.value);
    // console.log(store.state.userDailyInfo.userDailyNoteStatus);

    console.log("데일리 과제 제출 완료!");
}


// 교육생 과제 제출 기능
async function userReferenceSubmit(formData) {
    try {
        // 클라이언트가 입력한 값을 -> json 형식의 referenceDate 객체 형태로 변환
        // const data = JSON.parse(JSON.stringify(referenceData.value));
        // const data = JSON.stringify(referenceData.value);

        await referenceDataAPI.userReferenceDataSubmit(formData);
        console.log("교육생 과제 제출 성공");

        isDailyNote.value = true;

    } catch (error) {
        console.log(error);
        console.log("교육생 과제 제출 실패");
    }
    console.groupEnd();
}

watch(
    () => isDailyNote.value,
    (nv, ov) => {
        console.log("isDailyNote.value 변경 전 = " + nv);
        console.log("isDailyNote.value 변경 후 = " + ov);
         
        userAttendanceInfoData(mid, adate);
    }
)

// ----- 자식 컴포넌트의 함수를 부모 컴포넌트에서 호출 --------------------------------------------
const $noticeInfo = ref();

function handleNoticeInfo() {
    $noticeInfo.value.submit();
}


/*
async function getClientIP() {
  try {
    console.log("getClientIP() 호출");
    const response = await memberAPI.getClientIP();
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
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

.dashboard {
    border-radius: 30px;
    height: auto;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.community-title {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 1.2rem;;
}

.card-title {
    font-size: 1.0rem;
    font-weight: 400;
}

.card-title-dailynote {
    text-align: center;
    font-size: 1.0rem;
    font-weight: 500;
}

.class-name {
    color: #3f7ae9;
    font-weight: 700;
    font-size: 1.1rem;
    padding-right: 2px;
}

.reference-createdat {
    font-size: 0.9rem;
    font-weight: 400;
    color: #7a7a7a;
    vertical-align: bottom;
}

.img_box {
    line-height: normal;
    border-collapse: collapse;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15.9rem;
    height: 120px;
    padding-bottom: 0;
    /* border-radius: 50%; */
    background: #F2F2F2;
    color: #4b4a4a;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
}

.profile-wrap {
    position: relative;
}

.profile-contents {
    position: absolute;
    top: 70%;
    left: 41.7%;
    width: 100%;
    transform: translate(-50%, -59%);
}

/*사용자 이미지 틀 (원형)*/
.user-img {
    position: absolute;
    top: 20%;
    left: 18%;
    transform: translate(-50%, -50%);
    width: 110px;
    height: 110px;
    border-radius: 25px;
    border: 4px solid white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin-left: 10px;
    overflow: hidden;
}

/*사용자 이미지 사이즈 조정*/
.user-img img {
    width: 100%;
    object-fit: cover;
}

.contents-title {
    font-weight: 700;
    font-size: 1.4rem;
}

.sub-title {
    font-weight: 600;
    font-size: 1.1rem;
}

.user-id {
    color: #807f7f;
}

.user-course {
    font-weight: 500;
}

.user-course-requireddate {
    font-size: 0.9rem;
    color: #707070;
}

.attendance-box {
    border-radius: 22px;
    border: 1px solid rgba(39, 39, 39, 0.274);
}

.attendance-info {
    margin-top: 6%;
    margin-left: 10%;
}

.attendance-info h5 {
    font-size: 1rem;
    font-weight: 500;
}

.checkin-text {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 25%;
    color: #143064;
}

</style>
    