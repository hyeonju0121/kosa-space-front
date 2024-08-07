// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// 공지사항 등록
function createNotice(request) {
    axios.post("/community/notice/create", request);
}

// (운영진 대시보드) ecname 기준으로 공지사항 조회
function getEcnameNoticeList(ecname, pageNo) {
    console.log("getEcnameNoticeList 실행")
    return axios.get("/community/dashboard/notice/list?ecname=" + ecname + "&pageNo=" + pageNo);
    // axios.post("/community/dashboard/notice/list", "ecname=" + ecname + "&pageNo=" + pageNo);
}

// (교육생 대시보드) ecname 기준으로 공지사항 조회
function getEcnameTraineeNoticeList(ecname, pageNo) {
    console.log("getEcnameNoticeList 실행")
    return axios.get("/community/dashboard/trainee/notice/list?ecname=" + ecname + "&pageNo=" + pageNo);
    // axios.post("/community/dashboard/notice/list", "ecname=" + ecname + "&pageNo=" + pageNo);
}

// (운영진 대시보드) nno 기준으로 공지사항 단건 조회
function getNoticeInfo(nno){
    console.log("getNoticeInfo 실행");
    return axios.get("/community/notice/detail/" + nno);
}

export default {
    createNotice,
    getEcnameNoticeList,
    getEcnameTraineeNoticeList
}