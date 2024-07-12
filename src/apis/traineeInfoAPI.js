// REST API와 통신하는 모듈
import axios from "axios";
import qs from "qs";

// axios함수를 사용하면 Promise 형태로 값을 반환함 ★

// 교육생 등록
// function traineeRegister(ecname, cname, request) { // form-data 형식으로 데이터를 전송
function traineeRegister(request) { // form-data 형식으로 데이터를 전송
    console.log("traineeInfoAPI traineeRegister 메소드 실행");
    // console.log("ecname = " + ecname);
    // console.log("cname = " + cname);
    // return axios.post("/admin/trainee/register?ecname="+ecname+"&cname="+cname , request);
    return axios.post("edu/admin/trainee/register", request, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// 교육생 상세조회
function traineeInfo(mid) {
    console.log("traineeInfoAPI traineeInfo 메소드 실행");
    return axios.get("/edu/admin/trainee/detail?mid=" + mid);
}

// 교육생 (교육장, 교육과정 기준) 목록 조회
function getTraineeList(ecname, cname) {
    console.log(getTraineeList);
    return axios.get("/edu/admin/trainee/list?ecname=" + ecname + "&cname=" + cname);
}

// 교육생 (아이디를 기준으로) 이미지 첨부파일 가져오기
function getTraineeAttach(mid) {
    //PathVariable로 데이터전송
    return axios.get("/edu/download/traineeattach/" + mid, {responseType:"blob"});
}

// 교육생 프로필 헤더 정보 가져오기
function getTraineeProfileHeader(mid) {
    console.log("getTraineeProfileHeader 실행 mid = " + mid);
    return axios.get("/edu/trainee/profile/header?mid=" + mid);
}


export default {
    traineeRegister,
    traineeInfo,
    getTraineeList,
    getTraineeAttach,
    getTraineeProfileHeader
}