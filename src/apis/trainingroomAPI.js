// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

//강의실 등록
function create(FormData) {
    console.log("trainingroomAPI create 메소드 실행")
    console.log(FormData);
    return axios.post("/edu/room/create",FormData);
}

// 강의실 목록 
function getTrainingroomList(ecname, trenable) {
    return axios.get("/edu/room/list", {
        params: {
            ecname: ecname,
            trenable: trenable
        }
    })
}

// 강의실 사진 가져오기(캐러셀)
function getRoomAttach(eano) {
    return axios.get("/edu/download/attach/" + eano, {responseType:"blob"});
}

//강의실 단건 조회
function getTrainingroomByTrno(trno) {
    return axios.get("/edu/room/info", {
        params: {
            trno: trno
        }
    });
}

//강의실 수정
function update(FormData) {
    return axios.put("/edu/room/update", FormData);
}

export default {
    getTrainingroomList,
    getRoomAttach,
    create,
    getTrainingroomByTrno,
    update
}