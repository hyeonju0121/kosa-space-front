// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

function addClientIPHeader(clientIP) {
    // 모든 요청 헤더에 clientIP 추가 
    // common 객체에 동적 속성으로 ClientIP 을 추가
    axios.defaults.headers.common["ClientIP"] = "IP " + clientIP;
    console.log(axios.defaults.headers.common);
} 

// ecname, cname, adate 기준으로 전체 출결 목록 조회 기능
function getTotalAttendanceList(ecname, cname, adate) {
    return axios.get("/attendance/list?ecname=" + ecname + "&cname=" + cname + "&adate=" + adate); 
}

// 교육생 입실, 퇴실 출결 정보 조회 기능
function getUserAttendanceInfoData(mid, adate) {
    return axios.get("/attendance/user/attendance/time?mid=" + mid + "&adate=" + adate);
}

// 입실 기능
function userCheckin(attendanceinfo) {
    return axios.post("/attendance/checkin", attendanceinfo);
}

// 퇴실 기능
function userCheckout(attendanceinfo) {
    return axios.post("/attendance/checkout", attendanceinfo);
}

// (교육생) 출결 상세 조회
function getTraineeAttendanceDetail(mid, startdate, enddate) {
    return axios.get("/attendance/trainee/detail?mid="+mid+"&startdate="+startdate+"&enddate="+enddate);
}

// 개인 상세 출결 사유 조회
function getTraineeAttedanceReason(mid, adate) {
    return axios.get("/attendance/reason/detail?mid=" + mid + "&adate=" + adate);
}

// 교육생 출결 승인 페이지 대시보드 건수 조회 (진행중)
function getTraineeAttendaceReasonCnt(ecname, cname, adate) {
    return axios.get("/attendance/reason/dashboard?ecname=" + ecname + "&cname="+ cname + "&adate=" + adate);
}

// 교육생 승인 페이지 출결 목록 조회
function getTraineeAttendanceApproveList(ecname, cname, adate) {
    return axios.get("/attendance/approve/list?ecname=" + ecname + "&cname=" + cname + "&adate=" + adate)
}

// (운영진) 교육생 출결에 관한 사유 승인 처리
function getTraineeAttendaceReasonApproveConfirm(mid, adate) {
   return axios.get("/attendance/reason/approve?mid=" + mid + "&adate=" + adate);
}

// (운영진) 교육생 출결 사유 승인 처리에 따른 출결 처리 승인 / 미승인
function getTraineeAttendanceApproveConfirm(mid, adate) {
    return axios.get("/attendance/approve?mid=" + mid + "&adate=" + adate);
}

// (교육생) 대시보드 사유 작성 API
function createAttendanceCreate(request) {
    axios.post("/attendance/reason/create", request);
}

// (교육생) 교육생 대시보드 출결 상세 정보 조회
function getDashboardTraineeAttendanceInfo(mid, adate) {
    return axios.get("/attendance/trainee/attendance/dashboard/detail?mid=" + mid + "&adate=" + adate);
}


export default {
    getUserAttendanceInfoData,
    userCheckin,
    userCheckout,
    getTotalAttendanceList,
    addClientIPHeader,
    getTraineeAttendanceDetail,
    getTraineeAttedanceReason,
    getTraineeAttendaceReasonCnt,
    getTraineeAttendanceApproveList,
    getTraineeAttendaceReasonApproveConfirm,
    getTraineeAttendanceApproveConfirm,
    createAttendanceCreate,
    getDashboardTraineeAttendanceInfo
}