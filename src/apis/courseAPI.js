//REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

//교육과정 등록
function create(FormData) {
    return axios.post("/edu/course/create", FormData);
}

//교육과정 목록 가져오기
function getCourseList(ecname, cstatus, cprofessor, pageNo) {
    return axios.get("/edu/course/list?ecname=" + ecname + "&cstatus=" + cstatus + "&cprofessor=" + cprofessor + "&pageNo=" + pageNo);
}

// 진행중인 교육과정 목록 가져오기
function getInprogressCourseList(ecname) {
    return axios.get("/edu/course/cnamelist/inprogress?ecname=" + ecname);
}


//교육과정 목록에  교육장 사진 가져오기(캐러셀)
function getCourseAttach(eano) {
    //PathVariable로 데이터전송
    return axios.get("/edu/download/attach/" + eano, {responseType:"blob"});
}

//교육과정 단건조회(수정전 내용보여주기)
function getCourseByCno(cno) {
    return axios.get("/edu/course/info", {
        params: {
            cno: cno
        }
    });
}

//교육과정 수정
function update(FormData) {
    return axios.put("/edu/course/update", FormData);
}

// 교육과정 이름 전체 조회
function getCourseNameList(ecname) {
    return axios.get("/edu/course/cnamelist?ecname=" + ecname);
}



export default {
    create,
    getCourseList,
    getCourseAttach,
    getCourseByCno,
    update,
    getCourseNameList,
    getInprogressCourseList
}