// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// 공지사항 등록하기
function createNotice(request) {
    axios.post("/community/notice/create", request);
}

// ecname, cname, ncategory, pageNo 에 따른 공지사항 목록 조회
function getNoticeList(ecname, cname, ncategory, pageNo) {
    return axios.post("/community/notice/list?ecname=" + ecname + "&canme=" + cname
        + "&ncategory=" + ncategory + "&pageNo=" + pageNo)
}

// 공지사항 단건 조회
function getNoticeDetail(nno) {
    return axios.get("/community/notice/detail/" + nno);
}

// 공지사항 수정하기
function updateNotice(request) {
    axios.put("/community/notice/update", request);
}

// 공지사항 삭제하기
function deleteNotice(nno) {
    axios.delete("/community/notice/delete/" + nno);
}

// 공지사항 첨부파일 다운로드 --> ${axios.defaults.baseURL} 사용하기 ,,,

export default {
    createNotice,
    getNoticeList,
    getNoticeDetail,
    updateNotice,
    deleteNotice
}