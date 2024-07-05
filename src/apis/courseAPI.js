//REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

//교육과정 등록
function create(FormData) {
    return axios.post("/edu/course/create", FormData);
}

//교육과정 목록 가져오기
function getCourseList() {
    return axios.get("/edu/course/list");
}


//교육장 목록에  교육장 사진 가져오기(캐러셀)
function getCourseAttach(eano) {
    //PathVariable로 데이터전송
    return axios.get("/edu/download/attach/" + eano, {responseType:"blob"});
}


export default {
    create,
    getCourseList,
    getCourseAttach
}