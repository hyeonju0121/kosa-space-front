// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

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

export default {
    getTrainingroomList,
    getRoomAttach
}