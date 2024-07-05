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
    return axios.get("/edu/download/attach/" + eano, {responseType:"blob"});
}

//교육장 삭제
function educenterDelete(ecno) {
    console.log(educenterDelete);
    //Path Variable로 데이터 전송
    return axios.delete("/edu/center/delete?ecno=" + ecno);
}

// 교육장 이름 전체 조회
function educenterNamaList() {
    return axios.get("/edu/center/name/list");
}

export default {
    create,
    update,
    getEducenterByEcno,
    getEducenterList,
    getEducenterAttach,
    educenterDelete,
    educenterNamaList
}