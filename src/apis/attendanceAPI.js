// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

function addClientIPHeader(clientIP) {
    // 모든 요청 헤더에 clientIP 추가 
    // common 객체에 동적 속성으로 ClientIP 을 추가
    axios.defaults.headers.common["ClientIP"] = "IP " + clientIP;
    console.log(axios.defaults.headers.common);
} 

// 입실 기능

function userCheckin(attendanceinfo) {
    return axios.post("/attendance/checkin", attendanceinfo);
}

export default {
    userCheckin,
    addClientIPHeader
}