// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// axios함수를 사용하면 Promise 형태로 값을 반환함 ★

// 회원가입
function signup(member) { // form-data 형식으로 데이터를 전송
    console.log("memberAPI signup 메소드 실행");
    console.log(member);
    return axios.post("/signup", member);
}

// 로그인
function login(member) {
    return axios.post("/login", member);
}

// 아이디 찾기
// function findId(mphone, memail) {
function findId(member) {
    // return axios.get("/find/id", {params: {mphone, memail}});
    console.log("memberAPI findId 메소드 실행");
    console.log(member);
    return axios.get("/find/id", member);
}

// 비밀번호 찾기

// (운영진) 회원정보수정

export default {
    signup,
    login,
    findId,
}