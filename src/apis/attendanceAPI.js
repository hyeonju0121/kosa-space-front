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


// 입실 기능

function userCheckin(attendanceinfo) {
    return axios.post("/attendance/checkin", attendanceinfo);
}

// 출결 상세 조회
function getTraineeAttendanceDetail(mid, startdate, enddate) {
    return axios.get("/attendance/trainee/detail?mid="+mid+"&startdate="+startdate+"&enddate="+enddate);
}

export default {
    userCheckin,
    getTotalAttendanceList,
    addClientIPHeader,
    getTraineeAttendanceDetail
}