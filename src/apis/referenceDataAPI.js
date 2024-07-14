// REST API와 통신하는 모듈
import axios from "axios";
import qs from "qs";

// axios함수를 사용하면 Promise 형태로 값을 반환함 ★

// 개인별 데일리 과제 제출 현황 목록 조회하기
function personalDailySubmitList(mid, adate, pageNo) {
    return axios.get("/dailynote/trainee/note/list?mid=" + mid + "&adate=" + adate + "&pageNo=" + pageNo);
}

// 개인별 데일리 과제 상세 조회하기
function personalDailySubmitDetail(mid, refweek) {
    return axios.get("/dailynote/detail?mid=" + mid + "&refweek=" + refweek);
}

// 교육생 과제 제출 
function userReferenceDataSubmit(referenceDataInfo) {
    return axios.post("/dailynote/create", referenceDataInfo);
}

export default {
    personalDailySubmitList,
    personalDailySubmitDetail,
    userReferenceDataSubmit
}