<template>
    <div class="main p-4" style="margin-left: 20px; width: 1400px">
        <div>
            <div class="dashboard" style="background-color:rgba(206, 206, 206, 0.205);">
                <div class="row">
                    <div class="profile-wrap col-md-4">
                        <div class="profile-background">
                            <img src="@/assets/dashboard/dashboard_myinfo.jpg" style="width:400px;">
                        </div>
                        <div class="profile-contents" style="width:430px; height:620px; background-color: white;">
                            <div class="user-info" style="padding-left: 10%;">
                                <div style="margin-top: 60px;">
                                    <h5 class="contents-title">유현주
                                        <span class="user-id">(M2001)</span>
                                    </h5>
                                    <span class="user-course">MSA 기반 Full Stack 개발 전문가 양성과정 2차</span>
                                    <span class="user-course-requireddate">(2024.02.26 ~ 2024.07.26)</span>
                                </div>
                            </div>

                            <div class="user-attendance" style="margin-top: 40px; padding-left: 10%;">
                                <h5 class="sub-title">오늘의 출결현황</h5>
                                <div style="display: flex;">
                                    <div class="attendance-box check-in"
                                        style="background-color: rgba(236, 236, 236, 0.452); width: 180px; height: 100px;">
                                        <div class="attendance-info">
                                            <h5>입실</h5>
                                            <button type="button" v-if="!isCheckIn" @click="showCheckInDialog" 
                                                class="btn btn-primary btn-lg" style="width: 90%;">
                                                <span>입실하기</span>
                                            </button>
                                            <span class="checkin-text" v-if="isCheckIn">09:10</span>
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
                                <div class="user-attendance-state" style="width: 80%; margin-top: 10%;">
                                    <h5 class="sub-title">나의 출석률</h5>
                                    <div class="attendance-box" style="width: 120%; height: 80px;">
                                        <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                            <div class="d-flex flex-row justify-content-between">
                                                <span style="font-size: 14px;">2024.06.19 기준</span>
                                                <span style="font-size: 14px;">70% (84일 / 105일)</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-success" style="width:70%">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="user-img">
                            <img src="@/assets/hyeonju.jpg" class="user-img-detail" />
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--부트스트랩에서 다이얼로그는 고유한 id를 필수로 갖고 있어야 함-->
    <DailyNoteSubmitDialog id="dailyNoteSubmitDialog" @clickHandler="handleDailyNoteSubmit"/>
    <CheckInDialog id="checkInSubmitDialog" @submitCheckIn="submitCheckInDialog"/>
    <CheckOutDialog id="checkOutSubmitDialog" @submitCheckOut="submitCheckOutDialog"/>
    
</template>
    
<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import DailyNoteSubmitDialog from './DailyNoteSubmitDialog.vue';
import CheckOutDialog from './CheckOutDialog.vue';
import CheckInDialog from './CheckInDialog.vue';
import { onMounted, ref } from 'vue';
import { Modal } from "bootstrap";
import { useStore } from 'vuex';

// store 객체 얻기
const store = useStore();

// store 에서 사용자 입실 및 퇴실 여부, 데일리 과제 제출 여부 가져오기
const userCheckInStatus = store.state.userDailyInfo.userCheckInStatus;
const userCheckOutStatus = store.state.userDailyInfo.userCheckOutStatus;
const userDailyNoteStatus = store.state.userDailyInfo.userDailyNoteStatus;

let isCheckIn = ref(userCheckInStatus);
let isCheckOut = ref(userCheckOutStatus);
let isDailyNote = ref(userDailyNoteStatus);

console.log("입실 여부: ", isCheckIn.value);
console.log("퇴실 여부: ", isCheckOut.value);
console.log("데일리 과제 제출 여부: ", isDailyNote.value);

let dailyNoteDialog = null;
let checkOutDialog = null;
let checkInDialog = null;

// 컴포넌트가 생성되고, DOM에 부착될 때 자동으로 실행되는 콜백
onMounted(() => {
    // modal 객체로 생성 
    dailyNoteDialog = new Modal(document.querySelector("#dailyNoteSubmitDialog"));
    checkOutDialog = new Modal(document.querySelector("#checkOutSubmitDialog"));
    checkInDialog = new Modal(document.querySelector("#checkInSubmitDialog"));
})

// 입실하기 모달 활성화
function showCheckInDialog() {
    // 입실하기 버튼 클릭시, 입실하기 모달 활성화
    checkInDialog.show();
}

function submitCheckInDialog() {
    console.log("CheckInDialog 에서 정의한 이벤트 수신 완료");
    // '네' 버튼 클릭시, 모달 비활성화
    checkInDialog.hide();

    // 입실 상태 변경
    isCheckIn.value = !isCheckIn.value;
    store.commit("userDailyInfo/setUserCheckInStatus", isCheckIn.value);

    console.log("isCheckIn: " + isCheckIn.value);
    console.log("store -userCheckInStatus: " + store.state.userDailyInfo.userCheckInStatus);
    console.log("입실 성공");
}


// 퇴실하기 모달 활성화
function showCheckOutDialog() {
    // 퇴실하기 버튼 클릭시, 퇴실하기 모달 활성화
    checkOutDialog.show();
}

function submitCheckOutDialog() {
    console.log("CheckOutDialog 에서 정의한 이벤트 수신 완료");
    // '네' 버튼 클릭시, 모달 비활성화 
    checkOutDialog.hide();

    //  퇴실 상태 변경
    isCheckOut.value = !isCheckOut.value;
    store.commit("userDailyInfo/setUserCheckOutStatus", isCheckOut.value);

    console.log("isCheckOut: " + isCheckOut.value);
    console.log("store -userCheckOutStatus: " + store.state.userDailyInfo.userCheckOutStatus);
    console.log("퇴실 성공");
}


// 데일리 과제 모달 활성화
function showDailyNoteDialog() {
    dailyNoteDialog.show();
}

function handleDailyNoteSubmit(noteData) {
    console.log("DailyNoteSubmitDialog 에서 정의한 이벤트 수신 완료");
    console.log(JSON.parse(JSON.stringify(noteData.value)));

    // 과제 모달 비활성화
    dailyNoteDialog.hide();

    // 과제 제출 여부 상태 변경
    isDailyNote.value = !isDailyNote.value;
  
    store.commit("userDailyInfo/setUserDailyNoteStatus", isDailyNote.value);
    console.log(store.state.userDailyInfo.userDailyNoteStatus);

    console.log("데일리 과제 제출 완료!");
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

.dashboard {
    border-radius: 30px;
    overflow: hidden;
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
    top: 60%;
    left: 42.7%;
    width: 100%;
    transform: translate(-50%, -50%);
}

/*사용자 이미지 틀 (원형)*/
.user-img {
    position: absolute;
    top: 15%;
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
    