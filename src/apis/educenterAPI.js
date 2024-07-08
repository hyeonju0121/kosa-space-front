//REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

//교육장 등록
function create(FormData) {
    console.log("educenterAPI create 메소드 실행");
    console.log(FormData);
    return axios.post("/edu/center/create", FormData);
}

//교육장 수정
function update(FormData) {
    return axios.put("/edu/center/update", FormData);
}

//교육장 단건조회
function getEducenterByEcno(ecno) {
    return axios.get("/edu/center/info", {
        params: {
            ecno: ecno
        }
    });
}

//교육장 목록 조회
function getEducenterList() {
    return axios.get("/edu/center/list");
}

//교육장 목록에  교육장 사진 가져오기(캐러셀)
function getEducenterAttach(eano) {
    //PathVariable로 데이터전송
    return axios.get("/edu/download/attach/" + eano, { responseType: "blob" });
}

//교육장 삭제
function educenterDelete(ecno) {
    console.log(educenterDelete);
    //Path Variable로 데이터 전송
    return axios.delete("/edu/center/delete?ecno=" + ecno);
}

// 교육장 이름 전체 조회
function educenterNameList() {
    return axios.get("/edu/center/name/list");
}

// 운영진 대시보드 -- inprogresscnt, scheduledcnt, completecnt
function getTotalCourseCnt(ecname) {
    console.log("getTotalCourseCnt 실행");
    return axios.get("/edu/dashboard/course/totalcount?ecname=" + ecname);
}

// 운영진 대시보드 -- ecname 기준으로 교육상태에 따른 '교육과정 진행 현황 조회'
// ecno, ecname, cno, cname, cstatus, cstartdate, cenddate, crequireddate 반환
function getTotalCourseInfo(ecname, cstatus, pageNo) {
    console.log("getTotalCourseInfo 실행");
    return axios.post("/edu/dashboard/course", "ecname=" + ecname + "&cstatus=" + cstatus + "&pageNo=" + pageNo);
}

// 운영진 대시보드 -- ecname 기준으로 현재 진행중인 교육과정의 '교육생 출결 현황 조회'
function getTotalAttendanceInfo(ecname, pageNo, adate) {
    console.log("getTotalAttendanceInfo 실행");
    return axios.post("/edu/dashboard/attendance", "ecname=" + ecname + "&pageNo=" + pageNo + "&adate=" + adate);
}

export default {
    create,
    update,
    getEducenterByEcno,
    getEducenterList,
    getEducenterAttach,
    educenterDelete,
    educenterNameList,
    getTotalCourseCnt,
    getTotalCourseInfo,
    getTotalAttendanceInfo
}